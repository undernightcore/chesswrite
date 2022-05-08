<template>
    <div @click="acceptFriendRequest" class="friendCard">
        <div class="row">
            <div class="col-4">
                <img  src="@/assets/friend.png">
            </div>
            <div class="col-8">
                <h5>
                    <div v-if="status == 'accepted'">Username: <br> <span class="principalColor">{{username}}</span></div>
                    <div v-else-if="sent && status == 'pending'">Sent to <br> <span class="principalColor">{{username}}</span></div>
                    <div v-else-if="!sent && status == 'pending'">Received from <br> <span class="principalColor">{{username}}</span></div></h5>
                    <h6 v-if="status == 'pending' && !sent"><span class="greyText toPointer">(Click to accept)</span></h6>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
    name: "FriendCard",
    props: {
        id: String,
        username: String,
        status: String,
        sent: Boolean
    },
    methods: {
        acceptFriendRequest() {
            if (this.status == 'pending' && !this.sent) {
                Swal.fire({
                    title: 'Accept friend request?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sure!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.$emit('requestClick', this.id) 
                    }
                })
            }
        }
    }
}
</script>

<style scoped>
 .friendCard {
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
.greyText {
    color: grey;
}
</style>