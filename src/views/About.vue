<template>
    <div class="container about">
        <div class="us">
            <h2 class="mb-4">About <span class="principalColor">Us</span></h2>
            <div @click="goLink('https://github.com/undernightcore')" class="row row-cols-1 row-cols-md-2 cards">
                <div class="col-xxl-2 d-flex flex-column align-items-center justify-content-center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"/></div>
                <div class="col-xxl-10 d-flex flex-column justify-content-center">
                    <h3>Javier Martí</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div @click="goLink('https://github.com/JuanCGit')" class="row row-cols-1 row-cols-md-2 cards">
                <div class="col-xxl-2 d-flex flex-column align-items-center justify-content-center"><img src="@/assets/JuanChess.png"/></div>
                <div class="col-xxl-10 d-flex flex-column justify-content-center">
                    <h3>Juan Casanova</h3>
                    <p>Since I was a child I have loved computers and everything that surrounds it. Regarding my main motivation, it is the curiosity and the constant desire to learn new things about development and life in general.</p>
                </div>
            </div>
            <div @click="goLink('https://github.com/MarcosSesa')" class="row row-cols-1 row-cols-md-2 cards">
                <div class="col-xxl-2 d-flex flex-column align-items-center justify-content-center"><img src="@/assets/MarcosChess.png"/></div>
                <div class="col-xxl-10 d-flex flex-column justify-content-center">
                    <h3>Marcos Sesa</h3>
                    <p>I have always been interested in the world of programming and web design, so when I found some friends who felt the same way as I did, we got down to work. We developed different projects and learned together everything that interested us until today where we continue learning.</p>
                </div>
            </div>
        </div>
        <div class="ourProject">
            <h2 class="mb-4">Our <span class="principalColor">Project</span></h2>
            <div class="row row-cols-1" style="padding-top: 0px;">
                <div class="d-flex flex-column justify-content-center">
                    <h3>From day 1 we thought it was a good idea to approach <b>hackathon</b> in a different way, and what better way to do it than this, through a game as interesting as <b>chess</b>.
                        We also thought that it would be a good option to implement <b>appwrite</b> and its methods because through the friends system, matches and so on, we could do <b>something interesting.</b></h3>
                </div>
            </div>
        </div>
        <div class="technologies">
            <h2 class="mb-4">Used <span class="principalColor">Technologies</span></h2>
            <div @click="goLink('https://appwrite.io/')" class="row row-cols-1 row-cols-md-2 cards">
                <div class="col-xxl-2 d-flex flex-column align-items-center justify-content-center"><img src="@/assets/AppwriteChess.png"/></div>
                <div class="col-xxl-10 d-flex flex-column justify-content-center">
                    <h2 class="principalColor font-weight-bold">Appwrite</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
            <div  @click="goLink('https://vuejs.org/')" class="row row-cols-1 row-cols-md-2 cards">
                <div class="col-xxl-2 d-flex flex-column align-items-center justify-content-center"><img src="@/assets/VueChess.png"/></div>
                <div class="col-xxl-10 d-flex flex-column justify-content-center">
                    <h2 class="font-weight-bold" style="color: #42b883">Vue.js</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
            <div  @click="goLink('https://nodejs.org/es/')" class="row row-cols-1 row-cols-md-2 cards">
                <div class="col-xxl-2 d-flex flex-column align-items-center justify-content-center"><img src="@/assets/NodeChess.png"/></div>
                <div class="col-xxl-10 d-flex flex-column justify-content-center">
                    <h2 class="font-weight-bold" style="color: #8ac400">Node.js</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
            <div  @click="goLink('https://getbootstrap.com/')" class="row row-cols-1 row-cols-md-2 cards">
                <div class="col-xxl-2 d-flex flex-column align-items-center justify-content-center"><img src="@/assets/BootstrapChess.png"/></div>
                <div class="col-xxl-10 d-flex flex-column justify-content-center">
                    <h2 class="font-weight-bold" style="color: #7952b3">Bootstrap</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'About',
  methods: { 
        goLink(url) {
            window.open(url, '_blank');
        }
  }
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
.us, .ourProject, .technologies {
    padding-bottom: 50px;
}
.cards {
    padding: 25px;
    box-shadow: 0 30px 80px rgb(0 0 0 / 14%), 0 20px 70px rgb(0 0 0 / 12%);
    border-radius: 15px;
    margin-bottom: 50px;
    cursor: pointer;
}
@media (max-width: 1400px) {
    img {
        width: 75%;
        justify-content: center;
    }
}
@media (max-width: 991px) {
    .cards {
        margin-bottom: 75px;
    }
}
@media (max-width: 767px) {
    img {
        margin-bottom: 45px;
    }

    .cards {
        margin-right: 10px;
        margin-left: 10px;
    }
}
</style>