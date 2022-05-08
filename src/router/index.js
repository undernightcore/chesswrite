import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import page404 from '../views/404.vue'

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
    path: '/match-requests',
    name: 'MatchRequests',
    component: () => import(/* webpackChunkName: "match-requests" */ '../views/MatchRequests.vue')
  },
  {
    path: '/create-match',
    name: 'CreateMatch',
    component: () => import(/* webpackChunkName: "create-match" */ '../views/CreateMatch.vue')
  },
  {
    path: '/friends',
    name: 'Friends',
    component: () => import(/* webpackChunkName: "friends" */ '../views/Friends.vue')
  },
  {
    path: '/friend-requests',
    name: 'FriendRequests',
    component: () => import(/* webpackChunkName: "friend-requests" */ '../views/FriendRequests.vue')
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
  },
  {
    path: '/404',
    name: '404',
    component: page404
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
