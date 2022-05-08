import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/verify-account',
    name: 'VerifyAccount',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/VerifyAccount.vue')
  },
  {
    path: '/match/:id',
    name: 'Match',
    component: () => import(/* webpackChunkName: "match" */ '../views/Match.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
