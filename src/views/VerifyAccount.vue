<template>
    <div class="verifyAccount">
        <img src="@/assets/verify.svg" class="checking">
        <h5 class="mt-3">We are verifying <span class="principalColor">your account</span></h5>
        <h5 class="mt-1 principalColor">Please wait ...</h5>
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
        userId: this.$route.query.userId,
        secret: this.$route.query.secret
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
        let promise = this.api.account.updateVerification(this.userId, this.secret);
            promise.then(async () => {
                this.popup("Account verified successfully", "success")
                setTimeout(() => {
                    this.$router.push('/');
                }, 2000)  // Success
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
.verifyAccount {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.checking {
    width: 300px;
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
