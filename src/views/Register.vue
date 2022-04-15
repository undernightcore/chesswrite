<template>
  <div class="register">
    <h2>Register</h2>
    <RandomQuote/>
    <form class="text-center">
        <div class="mb-3"><input class="form-control" type="email" name="email" placeholder="Email" /></div>
        <div class="mb-3"><input class="form-control" type="password" name="password" placeholder="Password" /></div>
        <div class="mb-3"><input class="form-control" type="password" name="password" placeholder="Repeat password" /></div>
        <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit">Register</button></div>
    </form>
  </div>
</template>

<script>
import RandomQuote from '@/components/RandomQuote.vue';

export default {
  name: 'Register',
  components: {
    RandomQuote
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.register {
  height: 100vh;
  padding-left: 30%;
  padding-right: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media only screen and (max-width: 750px) {
  .register {
    height: 100vh;
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
