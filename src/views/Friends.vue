<template>
    <div v-if="user && friends?.length" class="container friends">
        <h2>People you can <span class="principalColor">trust</span></h2>
        <h6 @click="sendFriendRequest" class="principalColor addFriend"><i class="fa-solid fa-plus"></i> Add new friend</h6>
    </div>
    <div v-else-if="friends?.length == 0" class="nofriends">
        <img src="@/assets/alone.svg" class="alone">
        <h5 class="mt-3">Sometimes It's <span class="principalColor">OK</span> to be alone.</h5>
        <h5>But in case you want a  <span class="principalColor">friend</span>.</h5>
        <h5 @click="sendFriendRequest" class="principalColor text-decoration-underline addFriend"><i class="fa-solid fa-plus"></i> Add new friend.</h5>
    </div>
    <Loading v-else />
</template>

<script>
import { Appwrite } from 'appwrite';
import { Query } from "appwrite";
import Loading from '@/components/Loading.vue'
import Swal from 'sweetalert2';

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
            friends: null
        }
    },
    components: {
        Loading
    },
    methods: {
        getFriends() {
            let friendList = []

            let promise = this.api.database.listDocuments('friends', [
                Query.equal('user1', this.user.$id)
            ]);

            promise.then((response) => {
                friendList = friendList.concat(response.documents)
                let promise2 = this.api.database.listDocuments('friends', [
                    Query.equal('user2', this.user.$id)
                ]);
                promise2.then((res) => {
                    friendList = friendList.concat(res.documents)
                    this.friends = friendList
                }, (error) => {
                    console.log(error);
                });
            }, (error) => {
                console.log(error);
            });
        },
        async sendFriendRequest() {
            let { value: username } = await Swal.fire({
                title: "Type your friend's username",
                input: 'text',
                showCancelButton: true,
                inputValidator: (value) => {
                    if (!value) {
                    return 'You need to write something!'
                    }
                }
            })
            if (username) {
                let promise = this.api.functions.createExecution('623b5382c84e8ec006ec', username, false);

                promise.then((response) => {
                    console.log(response);
                    if (response.status == "failed" ) {
                        this.popup(response.stderr, "error")
                    } else {
                        this.popup(response.stdout, "success")
                    }
                }, () => {
                    this.popup("Error. Please try again.", "error")
                });
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