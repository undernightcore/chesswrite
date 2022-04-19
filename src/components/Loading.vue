<template>
    <div class="loading">
        <h5>{{randomSentence}}</h5>
        <span class="spinner-grow" role="status"></span>
    </div>
</template>

<script>
export default {
    name: "Loading",
    data() {
        return {
            sentences: [
                "Hi, I'm loading!",
                "Wait please! I'm using your WI-FI!"
            ]
        }
    },
    computed: {
        randomSentence() {
            return this.sentences[Math.floor(Math.random()*this.sentences.length)]
        }
    }
}
</script>

<style scoped>
    .loading {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .spinner-grow {
        color: #f02e65;
    }
</style>