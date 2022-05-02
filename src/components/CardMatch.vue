<template>
    <div class="cardMatch">
        <div class="row">
            <div class="col-4">
                <img src="https://www.ajedrez21.com/17158-home_default/tablero-caoba-importacion.jpg">
            </div>
            <div class="col-8">
                <h5>Match with <span class="principalColor">Username</span></h5>
                <h6 class="principalColor">Last move on: 31/03/2022</h6>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardMatch",
    data() {
        return {
            properties: [{
                status: "",
                turn:"",
                winner:""
            }]
        }
    }//,
    // computed: {
    //     getProperties() {
    //         return this.properties;
    //     }
    // }
}
</script>

<style scoped>
    .cardMatch {
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
</style>