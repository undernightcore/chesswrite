<template>
  <div class="home container">
    <div class="row g-0 row-cols-1 row-cols-sm-1 row-cols-md-2">
      <div class="col p-col col-a">
        <AutoChessBoard :moves="moves" class="whitePos"/>
      </div>
      <div class="col p-col col-b">
        <h1>You are not one of those that lose in 3 moves. <span class="principalColor">AREN'T YOU!?</span></h1>
        <p>Play chess online with your friends and show them how good you are.</p>
        <div class="row">
          <div class="col">
            <router-link class="btn btn-primary prove-it ms-md-2" role="button" to="/dashboard">Prove it!</router-link>
          </div>
          <div class="col">
            <router-link class="btn ms-md-2 about-us" role="button" to="/about">About us</router-link>
          </div>
        </div>
        
        
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
  .p-col {
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
  .about-us {
    background-color: whitesmoke !important;
    width: 100px;
  }
  .prove-it {
    width: 100px;
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