<template>
    <nav class="navbar navbar-light navbar-expand-md py-3 fixed-top">
        <div class="container">
            <router-link to="/" class="navbar-brand d-flex align-items-center">Chesswrite</router-link>
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-2">
                <span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span>
            </button>
            <div id="navcol-2" class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><router-link class="nav-link active" to="/login">Log in</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/register">Register</router-link></li>
                </ul>
                <router-link class="btn btn-primary ms-md-2" role="button" to="/dashboard">Play now</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>
</style>