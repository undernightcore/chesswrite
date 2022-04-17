<template>
    <nav class="navbar navbar-light navbar-expand-md py-3 fixed-top">
        <div class="container">
            <router-link to="/" class="navbar-brand d-flex align-items-center">Chesswrite</router-link>
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-2">
                <span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span>
            </button>
            <div id="navcol-2" class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto">
                    <li v-if="!user" class="nav-item"><router-link class="nav-link active" to="/login">Log in</router-link></li>
                    <li v-if="!user" class="nav-item"><router-link class="nav-link" to="/register">Register</router-link></li>
                    <div class="dropdown" v-if="user"><button class="btn btn-primary dropdown-toggle" aria-expanded="true" data-bs-toggle="dropdown" type="button">Welcome <span class="principalColor">{{user}}</span></button>
                        <div class="dropdown-menu"><a @click="logOut" class="dropdown-item" href="#">Log out</a></div>
                    </div>
                </ul>
                <router-link class="btn btn-primary ms-md-2" role="button" to="/dashboard">Play now</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
import { Appwrite } from 'appwrite';

export default {
    name: "NavBar",
    created() {
        this.api = new Appwrite()
        this.api
        .setEndpoint('https://api.cloudness.es/v1')
        .setProject('chess')
        this.getAccount()
    },
    data() {
        return {
            user: ""
        }
    },
    methods: {
        logOut() {
            let promise = this.api.account.deleteSession("current");
            promise.then(() => {
                this.getAccount()
                this.$router.push('/');
            }, function (error) {
                console.log(error);
            });
        },
        getAccount() {
            let promise = this.api.account.get();
            promise.then((response) => {
                this.user = response.email.split("@")[0];
                console.log(response);
            }, (error) => {
                console.log(error);
                this.user = ""
            });
        }
    }
}
</script>

<style scoped>
.dropdown .btn {
    background-color: transparent !important;
    border: none !important;
    color: black !important;
    padding: 8px;
}

.dropdown .btn:focus {
    box-shadow: none !important;
}

.dropdown-menu {
    border: none !important;
}

.dropdown-item:hover {
    background-color: transparent !important;
    color: rgba(0,0,0,.55);
}

.dropdown .btn {
    padding: 8px;
}

.dropdown-menu, .dropdown-item {
    padding-top: 0px;
    padding-left: 8px;
}



@media only screen and (max-width: 768px) {
    .dropdown .btn {
        padding: 8px 0;
    }

    .dropdown-menu, .dropdown-item {
        padding-top: 0px;
    }
}
</style>