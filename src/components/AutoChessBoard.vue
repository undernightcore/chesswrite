<template>
    <div id="board1"></div>
</template>

<script>
import ChessBoard from "chessboardjs-vue";

export default {
    name: "AutoChessBoard",
    props: {
        moves: Array
    },
    data() {
        return {
            board: "",
            step: 0,
            loop: 0
        }
    },
    mounted() {
        let config = {
            showNotation: false,
            position: 'start'
        }
        this.board = ChessBoard('board1', config);
        window.addEventListener("resize", this.board.resize());
        this.moveAndReset()
    },
    beforeUnmount() {
        clearInterval(this.loop)
        window.removeEventListener("resize", this.board.resize())
    },
    methods: {
        moveAndReset() {
            this.loop = setInterval(() => {
                this.board.move(this.moves[this.step])
                if (this.step == this.moves.length) {
                    this.board.start()
                    this.step = 0
                } else {
                    this.step++
                }
            }, 1250)
        }
    }
}
</script>

<style scoped>
    #board1 {
        width: 70%;
    }
    @media only screen and (max-width: 992px) {
        #board1 {
            width: 95%;
        }
    }
</style>