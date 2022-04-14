<template>
    <p>{{randomQuote}}</p>
</template>

<script>
export default {
    name: "RandomQuote",
    data() {
        return {
            quotes: [
                "“I have come to the personal conclusion that while all artists are not chess players, all chess players are artists.” - Marcel Duchamp",
                "“Chess is the gymnasium of the mind.” - Blaise Pascal",
                "“Chess is a war over the board. The object is to crush the opponent's mind.” - Bobby Fischer",
                "“Chess holds its master in its own bonds, shackling the mind and brain so that the inner freedom of the very strongest must suffer.” - Albert Einstein",
                "“Avoid the crowd. Do your own thinking independently. Be the chess player, not the chess piece.” - Ralph Charell",
                "“Chess is the struggle against the error.” - Johannes Zukertort"
            ]
        }
    },
    computed: {
        randomQuote() {
            return this.quotes[Math.floor(Math.random()*this.quotes.length)]
        }
    }
}
</script>