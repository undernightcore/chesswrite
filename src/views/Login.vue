<template>
  <div class="login">
    <h2>Log in</h2>
    <RandomQuote/>
    <form @submit.prevent="login" class="text-center">
        <div class="mb-3"><input class="form-control" type="email" name="email" placeholder="Email" /></div>
        <div class="mb-3"><input class="form-control" type="password" name="password" placeholder="Password" /></div>
        <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit">Login</button></div>
    </form>
  </div>
</template>

<script>
import { Appwrite } from 'appwrite';
import RandomQuote from '@/components/RandomQuote.vue';

export default {
  name: 'Login',
  components: {
    RandomQuote
  },
  data() {
    return {
      api: ""
    }
  },
  created() {
    this.api = new Appwrite()
    this.api
    .setEndpoint('https://api.cloudness.es/v1')
    .setProject('chess')
  },
  methods: {
    login() {
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

@media only screen and (max-width: 768px) {
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
