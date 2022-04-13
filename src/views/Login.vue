<template>
  <div class="login">
    <h2>Log in</h2>
    <p class="w-lg-50">{{randomQuote}}</p>
    <form class="text-center">
        <div class="mb-3"><input class="form-control" type="email" name="email" placeholder="Email" /></div>
        <div class="mb-3"><input class="form-control" type="password" name="password" placeholder="Password" /></div>
        <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit">Login</button></div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {
  },
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

<style scoped>
.login {
  height: 100vh;
  padding-left: 30%;
  padding-right: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media only screen and (max-width: 750px) {
  .login {
    height: 100vh;
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
