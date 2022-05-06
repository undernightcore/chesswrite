<template>
    <div class="friendRequests">
        <div v-if="user && (sentRequests?.length || receivedRequests?.length)" class="container friends">
            <h2>Pending <span class="principalColor">friend requests</span></h2>
            <router-link class="h6 principalColor toPointer" role="button" to="/friends"><i class="fa-solid fa-plus"></i>Go to friend list</router-link>
            <div v-if="receivedRequests?.length > 0 || sentRequests?.length > 0" class="row mt-5">
                <div v-if="receivedRequests?.length > 0" class="received">
                <h2 class="mb-4"><span class="principalColor">Received </span>requests</h2>
                <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3" style="margin-top: 50px;">
                    <div v-for="r in receivedRequests" v-bind:key="r.$id" class="col">
                        <FriendCard @requestClick="acceptFriendRequest($event)" :id="r.$id" :username="r.user1" status="pending" :sent="false"/>
                    </div>      
                </div>
                </div>
                <div v-if="sentRequests?.length > 0" class="ourProject">
                    <h2 class="mb-4"><span class="principalColor">Sent</span> requests</h2>
                    <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3" style="margin-top: 50px;">
                        <div v-for="s in sentRequests" v-bind:key="s.$id" class="col">
                            <FriendCard :id="s.$id" :username="s.user2" status="pending" :sent="true"/>
                        </div>      
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="sentRequests?.length == 0 && receivedRequests?.length == 0" class="nofriends">
            <img src="@/assets/alone.svg" class="alone">
            <h5 class="mt-3">Sometimes It's <span class="principalColor">OK</span> to be alone.</h5>
            <h5>But in case you want a  <span class="principalColor">friend</span>.</h5>
            <span @click="sendFriendRequest" class="principalColor text-decoration-underline toPointer"><i class="fa-solid fa-plus"></i> Add new friend.</span>
        </div>
        <Loading v-else />
    </div>
</template>

<script>
import { Appwrite } from 'appwrite';
import { Query } from "appwrite";
import Loading from '@/components/Loading.vue'
import FriendCard from '@/components/FriendCard.vue'
import Swal from 'sweetalert2';

export default {
    name: 'FriendRequests',
    created() {
        this.api = new Appwrite()
        this.api
        .setEndpoint('https://api.cloudness.es/v1')
        .setProject('chess')
        let promise = this.api.account.get();
        promise.then((response) => {
            setTimeout(() => {
                this.user = response
                this.getFriends('user1', 'pending', true)
                this.getFriends('user2', 'pending', false)
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
            sentRequests: null,
            receivedRequests: null
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
                    this.sentRequests = response.documents
                } else {
                    this.receivedRequests = response.documents
                }
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
        acceptFriendRequest(id) {
            let promise = this.api.functions.createExecution('623b53a8e82c6b90c479', id, false);

            promise.then((response) => {
                console.log(response);
                if (response.status == "failed" ) {
                    this.popup(response.stderr, "error")
                } else {
                    this.getFriends('user1', 'pending', true)
                    this.getFriends('user2', 'pending', false)
                    this.popup(response.stdout, "success")
                }
            }, () => {
                this.popup("Error. Please try again.", "error")
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
.addFriend {
    cursor: pointer
}
@media only screen and (max-width: 750px) {
    .alone {
        width: 200px;
    }
}
</style>
