<template>
  <div class="register">
    <h2>Register</h2>
    <RandomQuote/>
    <form @submit.prevent="register" class="text-center">
        <div class="mb-3"><input v-model="username" class="form-control" type="text" name="username" placeholder="Username" /></div>
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
      username: "",
      email: "",
      password: "",
      password2: "",
      api: ""
    }
  },
  methods: {
    register() {
      if (this.username && this.email && this.password && this.password2) {
        if (this.password == this.password2) {
          let promise = this.api.account.create(this.username.toLowerCase(), this.email, this.password);
          promise.then(async () => {
            this.popup("Please verify your email account", "info")
            let promise2 = this.api.account.createSession(this.email, this.password);
            promise2.then(async () => {
              this.api.account.createVerification('http://localhost:8080/verify-account');
              await this.$router.push('/');
              setTimeout(() => {
                this.$router.go()   
              }, 2000)         
            });
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
          customClass : {
            title: 'swal2-title',
            cancelButton: 'swal2-cancel',
            confirmButton: 'swal2-confirm',
            input: 'swal2-input'
          },
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
