<template>
    <div v-if="user && friends.total" class="container friends">
        <h2>People you can <span class="principalColor">trust</span></h2>
        <h6 class="principalColor addFriend"><i class="fa-solid fa-plus"></i> Add new friend</h6>
    </div>
    <div v-else-if="friends.total == 0" class="nofriends">
        <img src="@/assets/alone.svg" class="alone">
        <h5 class="mt-3">Sometimes It's <span class="principalColor">OK</span> to be alone.</h5>
        <h5>But in case you want a  <span class="principalColor">friend</span>.</h5>
        <h5 class="principalColor text-decoration-underline addFriend"><i class="fa-solid fa-plus"></i> Add a new friend.</h5>
    </div>
    <Loading v-else />
</template>

<script>
import { Appwrite } from 'appwrite';
import { Query } from "appwrite";
import Loading from '@/components/Loading.vue'

export default {
    name: 'Friends',
    created() {
        this.api = new Appwrite()
        this.api
        .setEndpoint('https://api.cloudness.es/v1')
        .setProject('chess')
        let promise = this.api.account.get();
        promise.then((response) => {
            setTimeout(() => {
                this.user = response
                this.getFriends()
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
            user: "",
            friends: ""
        }
    },
    components: {
        Loading
    },
    methods: {
        getFriends() {
            let promise = this.api.database.listDocuments('friends', [
                Query.equal('user1', this.user.$id),
                Query.equal('user2', this.user.$id)
            ]);

            promise.then((response) => {
                this.friends = response
            }, (error) => {
                console.log(error);
            });
        }
    }
}
</script>

<style scoped>
.friends {
    padding-top: 100px;
    padding-bottom: 100px;
    height: 100vh;
}
.nofriends {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.alone {
    width: 300px;
}
.addFriend {
    cursor: pointer
}
@media only screen and (max-width: 750px) {
    .alone {
        width: 200px;
    }
}
</style>