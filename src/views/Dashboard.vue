<template>
    <div v-if="user" class="dashboard container">
        <h2>Actual <span class="principalColor">matches</span></h2>
        <span @click="sendMatchRequest" class="h6 principalColor addMatch"><i class="fa-solid fa-plus"></i> Create new match</span>
        <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3" style="margin-top: 50px;">
            <div class="col">
                <cardMatch/>
            </div>
            <div class="col">
                <cardMatch/>
            </div>
            <div class="col">
                <cardMatch/>
            </div>        
        </div>
    </div>
    <Loading v-else />
</template>

<script>
import { Appwrite } from 'appwrite';
import Loading from '@/components/Loading.vue'
import CardMatch from '@/components/CardMatch.vue'

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
        Loading,
        CardMatch
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

    .cardMatch {
        padding: 25px;
        box-shadow: 0 30px 80px rgb(0 0 0 / 20%), 0 20px 70px rgb(0 0 0 / 20%);
        border-radius: 15px;
        margin-bottom: 50px;
    }

    img {
        width: 100px;
        height: 100px;
        margin-right: 20px;
    }
</style>