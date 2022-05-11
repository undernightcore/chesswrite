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
.swal2-cancel {
  background-color: rgb(177, 177, 177) !important;
}
.swal2-confirm {
  background-color: rgb(255, 0, 89) !important;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px #f02e65 !important;
  border-color: #f02e65 !important;
}
.swal2-title {
  font-weight: 400;
}
.swal2-input:focus {
  border-color: #f02e65 !important;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px #f02e65 !important;
}
.toPointer {
  cursor: pointer;
}
.form-control:focus {
  border-color: #f02e65 !important;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px #f02e65 !important;
}
.black-3c85d {
  background-color: #FF9696 !important;
}
.white-1e1d7 {
  background-color: #ffffff !important;
}
.board-b72b1 {
  border: 4px solid #404040 !important;
  box-sizing: content-box;
  border-radius: 20px !important;
}
.whitePos .square-a8 {
  border-radius: 17px 0 0 0 !important;
}
.whitePos .square-h8 {
  border-radius: 0 17px 0 0 !important;
}
.whitePos .square-a1 {
  border-radius: 0 0 0 17px !important;
}
.whitePos .square-h1 {
  border-radius: 0 0 17px 0 !important;
}
.blackPos .square-a8 {
  border-radius: 0 0 17px 0 !important;
}
.blackPos .square-h8 {
  border-radius: 0 0 0 17px !important;
}
.blackPos .square-a1 {
  border-radius: 0 17px 0 0 !important;
}
.blackPos .square-h1 {
  border-radius: 17px 0 0 0 !important;
}
</style>