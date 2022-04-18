<template>
  <div class="home">
    <div class="row g-0 row-cols-1 row-cols-sm-1 row-cols-md-2">
      <div class="col">
        <AutoChessBoard :moves="moves"/>
      </div>
      <div class="col"></div>
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
    align-items: end;
    justify-content: center;
  }
</style>