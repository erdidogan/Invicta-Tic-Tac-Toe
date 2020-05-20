import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/single',
    name: 'SinglePlayer',
    component: () => import('../views/SinglePlayer.vue')
  },
  {path: '*',  component: () => import( '../views/NotFound.vue')} // Not found


]

const router = new VueRouter({
  routes
})

export default router
