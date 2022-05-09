<template>
    <div v-if="user && (sentFriends?.length || receivedFriends?.length)" class="container friends">
        <h2>People you can <span class="principalColor">trust</span></h2>
        <span @click="sendFriendRequest" class="h6 principalColor toPointer"><i class="fa-solid fa-plus"></i> Add new friend</span>
        <router-link class="h6 toPointer ms-3" role="button" to="/friend-requests">Go to friend requests</router-link>

        <div class="row mt-5">
            <div v-if="sentFriends?.length">
                <h3 class="principalColor">Requests accepted by my friends</h3>
                <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3 mt-3">              
                    <div v-for="s in sentFriends" v-bind:key="s.$id" class="col">
                        <FriendCard :id="s.$id" :username="s.user2" status="accepted" :sent="true"/>
                    </div>
                </div>
            </div>
            <div v-if="receivedFriends?.length">
                <h3 class="principalColor">Requests accepted by me</h3>
                <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3 mt-3">
                    <div v-for="r in receivedFriends" v-bind:key="r.$id" class="col">
                        <FriendCard :id="r.$id" :username="r.user1" status="accepted" :sent="false"/>
                    </div> 
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="sentFriends?.length == 0 && receivedFriends?.length == 0" class="nofriends">
        <img src="@/assets/alone.svg" class="alone">
        <h5 class="mt-3">Sometimes It's <span class="principalColor">OK</span> to be alone.</h5>
        <h5>But in case you want a  <span class="principalColor">friend</span>.</h5>
        <span @click="sendFriendRequest" class="principalColor text-decoration-underline toPointer h5"><i class="fa-solid fa-plus"></i> Add new friend.</span>
        <router-link role="button" to="/friend-requests"><span class="h5 text-decoration-underline">Check friend requests.</span></router-link>
    </div>
    <Loading v-else />
</template>

<script>
import { Appwrite } from 'appwrite';
import { Query } from "appwrite";
import Loading from '@/components/Loading.vue'
import FriendCard from '@/components/FriendCard.vue'
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
                this.getFriends('user1', 'accepted', true)
                this.getFriends('user2', 'accepted', false)
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
            sentFriends: null,
            receivedFriends: null,
            friends: null
        }
    },
    components: {
        Loading,
        FriendCard
    },
    methods: {
        getFriends(column, status, sent) {
            let promise = this.api.database.listDocuments('friends', [
                Query.equal(column, this.user.$id),
                Query.equal('status', status)
            ]);
            promise.then((response) => {
                if (sent) {
                    this.sentFriends = response.documents
                } else {
                    this.receivedFriends = response.documents
                }
            }, (error) => {
                console.log(error);
            });
        },
        async sendFriendRequest() {
            let { value: username } = await Swal.fire({
                customClass : {
                    title: 'swal2-title',
                    cancelButton: 'swal2-cancel',
                    confirmButton: 'swal2-confirm',
                    input: 'swal2-input'
                },
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
a {
    text-decoration: none;
    color: #4f5255;
}
a:hover {
    color: #4f5255;
}
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
@media only screen and (max-width: 750px) {
    .alone {
        width: 200px;
    }
}
</style>