<template>
    <div id="board"></div>
</template>

<script>
import ChessBoard from "chessboardjs-vue";
import { Chess } from 'chess.js'

export default {
    name: 'ChessBoard',
    data() {
        return {
            board: '',
            chess: ''
        }
    },
    props: {
        game: String,
        orientation: String
    },
    mounted() {
        this.chess = new Chess();
        this.chess.load_pgn(this.game);

        let config = {
            showNotation: false,
            position: this.chess.fen(),
            draggable: true,
            orientation: this.orientation,
            onDragStart: this.onDragStart,
            onDrop: this.onDrop
        }
        
        this.board = ChessBoard('board', config);
        window.addEventListener("resize", this.board.resize());
    },
    methods: {
        onDragStart(source, piece, position, orientation) {
            if ((orientation === 'white' && piece.search(/^w/) === -1) ||
                (orientation === 'black' && piece.search(/^b/) === -1)) {
                return false
            }
        },
        onDrop(source, target) {
            this.$emit('pieceMove', {
                from: source,
                to: target
            })
        },
        wrongMove() {
            this.chess.load_pgn(this.game);
            this.board.position(this.chess.fen());
        }
    },
    watch: {
        game() {
            this.chess.load_pgn(this.game);
            this.board.position(this.chess.fen());
        }
    }
}
</script>

<style scoped>
    #board {
        width: 70%;
    }
    @media only screen and (max-width: 992px) {
        #board {
            width: 95%;
        }
    }
</style>