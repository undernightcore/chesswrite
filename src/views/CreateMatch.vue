<template>
    <div v-if="user && (sentFriends?.length || receivedFriends?.length)" class="container friends">
        <h2>Who do you want <span class="principalColor">play with?</span></h2>

        <div class="row mt-5">
            <div v-if="sentFriends?.length">
                <h3 class="principalColor">Friendship started by my friends</h3>
                <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3 mt-3">              
                    <div v-for="s in sentFriends" v-bind:key="s.$id" class="col">
                        <FriendCard @click="sendMatchRequest(s.user2)" class="toPointer" :id="s.$id" :username="s.user2" status="accepted" :sent="true"/>
                    </div>
                </div>
            </div>
            <div v-if="receivedFriends?.length">
                <h3 class="principalColor">Friendship started by me</h3>
                <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3 mt-3">
                    <div v-for="r in receivedFriends" v-bind:key="r.$id" class="col">
                        <FriendCard @click="sendMatchRequest(r.user1)" class="toPointer" :id="r.$id" :username="r.user1" status="accepted" :sent="false"/>
                    </div> 
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="sentFriends?.length == 0 && receivedFriends?.length == 0" class="nofriends">
        <img src="@/assets/createMatch.svg" class="alone">
        <h5 class="mt-3">You need some <span class="principalColor">friends</span> to play with.</h5>
        <router-link role="button" to="/friends"><span class="principalColor h5 text-decoration-underline"><i class="fa-solid fa-plus"></i>Add new friend.</span></router-link>
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
    name: 'CreateMatch',
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
        async sendMatchRequest(id) {
            Swal.fire({
                customClass : {
                    title: 'swal2-title',
                    cancelButton: 'swal2-cancel',
                    confirmButton: 'swal2-confirm',
                    input: 'swal2-input'
                },
                title: 'Send match request?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sure!'
            }).then((result) => {
                if (result.isConfirmed) {
                    console.log(id);
                    let promise = this.api.functions.createExecution('623b53c744cb379e87bb', id, false);

                    promise.then((response) => {
                        console.log(response);
                        if (response.status == "failed" ) {
                            this.popup(response.stderr, "error")
                        } else {
                            this.popup(response.stdout, "success")
                            this.$router.push('/match-requests');
                        }
                    }, () => {
                        this.popup("Error. Please try again.", "error")
                    });
                }
            })
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