<template>
  <div class="login">
    <h2>We hare verifying <span class="principalColor">your account...</span></h2>
  </div>
</template>

<script>
import { Appwrite } from 'appwrite';
import Swal from 'sweetalert2';

export default {
  name: 'VerifyAccount',
  data() {
    return {
        api: "",
        email: "",
        password: "",
        userId: $route.query.userId,
        secret: $route.query.secret
    }
  },
  created() {
    this.api = new Appwrite()
    this.api
    .setEndpoint('https://api.cloudness.es/v1')
    .setProject('chess')
    this.verifying()
  },
  methods: {
    verifying() {
        let promise = this.api.updateVerification(userId, secret);
            promise.then(async () => {
                this.popup("Account verified successfully", "success")
                await this.$router.push('/login');
                this.$router.go()  // Success
            }, (error) => {
                this.popup(error.message, "error") // Failure
            });
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
