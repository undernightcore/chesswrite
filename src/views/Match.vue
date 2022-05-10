<template>
    <div v-if="user && match" class="match">
        <div class="match-container">
            <h5 class="your-turn" v-if="(orientation === 'black' && turn === 'b') || (orientation === 'white' && turn === 'w')">Your turn</h5>
            <h5 class="not-your-turn" v-else>Waiting for your friend to move...</h5>
            <ChessBoard ref="ChessBoard" :game="game" :orientation="orientation" @pieceMove="movePiece($event)"/>
        </div>
    </div>
    <Loading v-else/>
</template>

<script>
import { Appwrite } from 'appwrite';
import Loading from '@/components/Loading.vue'
import ChessBoard from '@/components/ChessBoard.vue'
import Swal from 'sweetalert2';

export default {
    name: 'Match',
    data() {
        return {
            api: '',
            user: '',
            match: '',
            game: '',
            orientation: '',
            subscription: '',
            turn: ''
        }
    },
    created() {
        this.api = new Appwrite()
        this.api
            .setEndpoint('https://api.cloudness.es/v1')
            .setProject('chess')
        let promise = this.api.account.get();
        promise.then((response) => {
            setTimeout(() => {
                this.user = response
                let promise = this.api.database.getDocument('matches', this.$route.params.id);

                promise.then((response) => {
                    this.turn = response.turn
                    this.game = response.board
                    this.match = response.$id
                    if (response.black === this.user.$id) {
                        this.orientation = 'black'
                    } else {
                        this.orientation = 'white'
                    }

                    if (response.status === "finished") {
                        Swal.fire(
                            'This match is finished',
                            'This is a finished match, go to play now if you want to start a new one',
                            'info'
                        )
                    }

                    this.subscription = this.api.subscribe(`collections.matches.documents.${this.$route.params.id}`, (data) => {
                        this.game = data.payload.board
                        this.turn = data.payload.turn
                        if (data.payload.status === 'finished') {
                            Swal.fire(
                                'The match has just ended',
                                `Congratulation to ${data.payload.winner}!`,
                                'success'
                            )
                        }
                    })
                }, () => {
                    this.popup(`Can't play this match`, 'error')
                    this.$router.push('/dashboard');
                });
            }, 1000)
        }, () => {
            setTimeout(() => {
                this.$router.push('/login');
            }, 1000)
        });
    },
    components: {
        Loading,
        ChessBoard
    },
    methods: {
        movePiece(move) {
            let moveObject = JSON.stringify({match: this.match, from: move.from, to: move.to})
            let promise = this.api.functions.createExecution('6238d787cfea4d6a6edb', moveObject, false)
            promise.then((response) => {
                if (response.status === 'failed') {
                    this.$refs.ChessBoard.wrongMove()
                    this.popup(response.stderr, 'error')
                }
            }, (error) => {
                this.popup(error.message, 'error')
            });
        },
        popup(message, status) {
            Swal.fire({
                customClass : {
                    title: 'swal2-title',
                    cancelButton: 'swal2-cancel',
                    confirmButton: 'swal2-confirm',
                    input: 'swal2-input'
                },
                icon: status,
                title: message,
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            })
        }
    },
    beforeUnmount() {
        if (this.subscription) {
            this.subscription()
        }
    }
}
</script>

<style scoped>
    html {
      overflow: hidden;
      width: 100%;
    }

    body {
      height: 100%;
      position: fixed;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
    }

    .match {
        height: 100vh;
        padding-top: 100px;
        padding-bottom: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .your-turn {
      color: #f02e65;
    }

    .not-your-turn {
      color: #4f5255;
    }

    .match-container {
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    @media only screen and (max-width: 700px) {
        .match-container {
            width: 90%;
        }
    }

    
</style>