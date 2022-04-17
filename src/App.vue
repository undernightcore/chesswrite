<template>
  <NavBar/>
  <router-view/>
</template>

<script>
import NavBar from "@/components/NavBar.vue"

export default {
  name: "Home",
  components: {
    NavBar
  }
}
</script>

<style>
* {
  font-family: Inter, sans-serif !important;
}
:root {
  --bs-primary: #f02e65;
}
.btn {
  background-color: #f02e65 !important;
  border-color: #f02e65 !important;
}
.btn:hover, .btn:focus{
  border-color: #f02e65 !important;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px #f02e65 !important;
}
.principalColor {
  color: #f02e65;
}
.form-control:focus {
  border-color: #f02e65 !important;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px #f02e65 !important;
}

</style>
