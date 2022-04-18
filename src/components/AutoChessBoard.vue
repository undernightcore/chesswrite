<template>
    <div id="board1" style="width: 400px"></div>
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
            step: 0
        }
    },
    mounted() {
        let config = {
            showNotation: false,
            position: 'start'
        }
        this.board = ChessBoard('board1', config);
        this.moveAndReset()
    },
    methods: {
        moveAndReset() {
            setInterval(() => {
                this.board.move(this.moves[this.step])
                if (this.step == this.moves.length) {
                    this.board.start()
                    this.step = 0
                } else {
                    this.step++
                }
            }, 1000)
        }
    }
}
</script>