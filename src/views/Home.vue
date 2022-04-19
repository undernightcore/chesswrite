<template>
  <div class="home container">
    <div class="row g-0 row-cols-1 row-cols-sm-1 row-cols-md-2">
      <div class="col col-a">
        <AutoChessBoard :moves="moves"/>
      </div>
      <div class="col col-b">
        <h1>You are not one of those that lose in 3 moves. <span class="principalColor">AREN'T YOU!?</span></h1>
        <p>Play chess online with your friends and show them how good you are.</p>
        <router-link class="btn btn-primary ms-md-2" role="button" to="/dashboard">Prove it!</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AutoChessBoard from "@/components/AutoChessBoard.vue"

export default {
  name: 'Home',
  data() {
    return {
      moves: [
        'f2-f3',
        'e7-e5',
        'g2-g4',
        'd8-h4'
      ]
    }
  },
  components: {
    AutoChessBoard
  }
}
</script>

<style scoped>
  .col {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .col-b {
    padding-left: 5%;
    padding-right: 5%;
  }
  @media only screen and (max-width: 768px) {
    .col-a {
      height: 60vh;
      justify-content: end;
    }
    .col-b {
      height: 40vh;
    }
  }
</style>