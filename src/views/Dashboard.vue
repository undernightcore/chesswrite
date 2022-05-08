<template>
    <div v-if="user && (sentMatches?.length || receivedMatches?.length)" class="container friends">
        <h2><span class="principalColor">Dashboard</span></h2>
        <span @click="sendMatchRequest" class="h6 principalColor toPointer"><i class="fa-solid fa-plus"></i> Add new match</span>
        <router-link class="h6 toPointer ms-3" role="button" to="/match-requests">Go to match requests</router-link>

        <div class="row mt-5">
            <div v-if="sentMatches?.length">
                <h3>Playing <span class="principalColor">white</span></h3>
                <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3 mt-3">              
                    <div v-for="s in sentMatches" v-bind:key="s.$id" class="col">
                        <CardMatch @click="goMatch(s.$id)" class="toPointer" :id="s.$id" :username="s.black" status="ongoing" :sent="false" :yourTurn="(s.turn == 'w' && s.white == user.$id) || (s.turn == 'b' && s.black == user.$id)"/>
                    </div>
                </div>
            </div>
            <div v-if="receivedMatches?.length">
                <h3>Playing <span class="principalColor">black</span></h3>
                <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3 mt-3">
                    <div v-for="r in receivedMatches" v-bind:key="r.$id" class="col">
                        <CardMatch @click="goMatch(r.$id)" class="toPointer" :id="r.$id" :username="r.white" status="ongoing" :sent="true" :yourTurn="(r.turn == 'w' && r.white == user.$id) || (r.turn == 'b' && r.black == user.$id)"/>
                    </div> 
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="sentMatches?.length == 0 && receivedMatches?.length == 0" class="nofriends">
        <img src="@/assets/noMatches.svg" class="alone">
        <h5 class="mt-3">There isn't <span class="principalColor">matches</span> to play.</h5>
        <h5>But in case you want to play a <span class="principalColor">new one</span>.</h5>
        <router-link role="button" to="/create-match"><span class="principalColor h5 text-decoration-underline">Play new match.</span></router-link>
        <router-link role="button" to="/match-requests"><span class="h5 text-decoration-underline">Check pending matches.</span></router-link>
    </div>
    <Loading v-else />
</template>

<script>
import { Appwrite } from 'appwrite';
import { Query } from "appwrite";
import Loading from '@/components/Loading.vue'
import CardMatch from '@/components/CardMatch.vue'
import Swal from 'sweetalert2';

export default {
    name: 'Dashboard',
    created() {
        this.api = new Appwrite()
        this.api
        .setEndpoint('https://api.cloudness.es/v1')
        .setProject('chess')
        let promise = this.api.account.get();
        promise.then((response) => {
            setTimeout(() => {
                this.user = response
                this.getMatches('white', 'ongoing', true)
                this.getMatches('black', 'ongoing', false)
            }, 1000)
        }, (error) => {
            setTimeout(() => {
                console.log(error);
                this.$router.push('/login');
            }, 1000)
        });
    },
    data() {
        return {
            api: "",
            user: "",
            sentMatches: null,
            receivedMatches: null
        }
    },
    components: {
        Loading,
        CardMatch
    },
    methods: {
        getMatches(column, status, sent) {
            let promise = this.api.database.listDocuments('matches', [
                Query.equal(column, this.user.$id),
                Query.equal('status', status)
            ]);
            promise.then((response) => {
                if (sent) {
                    this.sentMatches = response.documents
                } else {
                    this.receivedMatches = response.documents
                }
            }, (error) => {
                console.log(error);
            });
        },
        async sendFriendRequest() {
            let { value: username } = await Swal.fire({
                title: "Type your friend's username",
                input: 'text',
                showCancelButton: true,
                inputValidator: (value) => {
                    if (!value) {
                    return 'You need to write something!'
                    }
                }
            })
            if (username) {
                let promise = this.api.functions.createExecution('623b5382c84e8ec006ec', username, false);

                promise.then((response) => {
                    console.log(response);
                    if (response.status == "failed" ) {
                        this.popup(response.stderr, "error")
                    } else {
                        this.popup(response.stdout, "success")
                    }
                }, () => {
                    this.popup("Error. Please try again.", "error")
                });
            }
        },
        goMatch(id) {
            this.$router.push("/match/" + id)
        },
        popup(message, status) {
            Swal.fire({
                icon: status,
                title: message,
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
            })
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: #4f5255;
}
a:hover {
    color: #4f5255;
}
.friends {
    padding-top: 100px;
    padding-bottom: 100px;
    height: 100vh;
}
.nofriends {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.alone {
    width: 300px;
}
@media only screen and (max-width: 750px) {
    .alone {
        width: 200px;
    }
}
</style>