<template>
    <div v-if="user" class="dashboard container">
        <h2>Actual <span class="principalColor">matches</span></h2>
        <span @click="sendMatchRequest" class="h6 principalColor addMatch"><i class="fa-solid fa-plus"></i> Create new match</span>
    </div>
    <Loading v-else />
</template>

<script>
import { Appwrite } from 'appwrite';
import Loading from '@/components/Loading.vue'

export default {
    name: "Dashboard",
    created() {
        this.api = new Appwrite()
        this.api
        .setEndpoint('https://api.cloudness.es/v1')
        .setProject('chess')
        let promise = this.api.account.get();
        promise.then((response) => {
            setTimeout(() => {
                this.user = response
            }, 1000)
        }, (error) => {
            setTimeout(() => {
                console.log(error);
                this.$router.push('/login');
            }, 1000)
        });
    },
    data() {
        return {
            api: "",
            user: ""
        }
    },
    components: {
        Loading
    }
}
</script>

<style scoped>
    .dashboard {
        padding-top: 100px;
        padding-bottom: 100px;
    }

    .addMatch {
        cursor: pointer
    }
</style>