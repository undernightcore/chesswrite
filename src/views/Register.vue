<template>
  <div class="register">
    <h2>Register</h2>
    <RandomQuote/>
    <form @submit.prevent="register" class="text-center">
        <div class="mb-3"><input v-model="email" class="form-control" type="email" name="email" placeholder="Email" /></div>
        <div class="mb-3"><input v-model="password" class="form-control" type="password" name="password" placeholder="Password" /></div>
        <div class="mb-3"><input v-model="password2" class="form-control" type="password" name="password" placeholder="Repeat password" /></div>
        <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit">Register</button></div>
    </form>
  </div>
</template>

<script>
import { Appwrite } from 'appwrite';
import RandomQuote from '@/components/RandomQuote.vue';
import Swal from 'sweetalert2';

export default {
  name: 'Register',
  components: {
    RandomQuote
  },
  data() {
    return {
      email: "",
      password: "",
      password2: "",
      api: ""
    }
  },
  methods: {
    register() {
      if (this.email && this.password && this.password2) {
        if (this.password == this.password2) {
          let promise = this.api.account.create('unique()', this.email, this.password);
          promise.then(async () => {
            this.popup("Please verify your email account", "info")
            this.api.account.createVerification('http://localhost:8080/verify-account');
            this.$router.push('/');
          }, (error) => {
            this.popup(error.message, "error")
          });
        } else {
          this.popup("Password MUST match", "error")
        }
      } else {
        this.popup("Please don't leave any of the fields empty", "error")
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
  },
  created() {
    this.api = new Appwrite()
    this.api
    .setEndpoint('https://api.cloudness.es/v1')
    .setProject('chess')
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
