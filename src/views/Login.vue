<template>
  <div class="login">
    <h2>Log in</h2>
    <RandomQuote/>
    <form @submit.prevent="login" class="text-center">
        <div class="mb-3"><input v-model="email" class="form-control" type="email" name="email" placeholder="Email" /></div>
        <div class="mb-3"><input v-model="password" class="form-control" type="password" name="password" placeholder="Password" /></div>
        <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit">Login</button></div>
    </form>
  </div>
</template>

<script>
import { Appwrite } from 'appwrite';
import RandomQuote from '@/components/RandomQuote.vue';
import Swal from 'sweetalert2';

export default {
  name: 'Login',
  components: {
    RandomQuote
  },
  data() {
    return {
      api: "",
      email: "",
      password: ""
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
      if (this.email && this.password) {
          let promise = this.api.account.createSession(this.email, this.password);
          promise.then(async () => {
            await this.$router.push('/');
            this.$router.go() 
          }, (error) => {
            this.popup(error.message, "error")
          });
      } else {
        this.popup("Please don't leave any of the fields empty", "error");
      }    
    },
    popup(message, status) {
      Swal.fire({
          icon: status,
          title: message,
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true
      })
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
