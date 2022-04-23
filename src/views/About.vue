<template>
  <div class="container about">
    <h2 class="mb-4">About Us</h2>
    <div class="row row-cols-1 row-cols-md-2">
        <div class="col-xxl-2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" class="profile"/></div>
        <div class="col-xxl-10 d-flex flex-column justify-content-center">
            <h3>Javier Martí</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2">
        <div class="col-xxl-10 offset-0 d-flex flex-column justify-content-center order-last order-md-first text-xl-end">
            <h3>Juan Casanova</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="col-xxl-2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" class="profile"/></div>
    </div>
    <div class="row row-cols-1 row-cols-md-2">
        <div class="col-xxl-2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" class="profile"/></div>
        <div class="col-xxl-10 d-flex flex-column justify-content-center">
            <h3>Marcos Sesa</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
    padding-top: 100px;
    padding-bottom: 100px;
}
p {
    font-size: 20px;
    margin-bottom: 0;
    padding-bottom: 0;
}
img {
    width: 100%;
}
@media (max-width: 1400px) {
    .profile{
        width: 75%;
    }
}
</style>