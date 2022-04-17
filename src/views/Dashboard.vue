<template>
    <div class="dashboard">

    </div>
</template>

<script>
import { Appwrite } from 'appwrite';

export default {
    name: "Dashboard",
    created() {
        this.api = new Appwrite()
        this.api
        .setEndpoint('https://api.cloudness.es/v1')
        .setProject('chess')
        let promise = this.api.account.get();
        promise.then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
            this.$router.push('/login');
        });
    },
    data() {
        return {
            api: ""
        }
    }
}
</script>

<style scoped>

</style>