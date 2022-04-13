<template>
  <NavBar/>
  <router-view/>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

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
</style>
