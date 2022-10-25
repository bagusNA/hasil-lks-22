import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/LoginView.vue'
import {store} from "../store/store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  if (
      !store.token &&
      to.name !== 'login'
  ) {
    return { name: 'login' }
  }
  else if (store.token && to.name !== 'home')
    return { name: 'home' }
})

export default router
