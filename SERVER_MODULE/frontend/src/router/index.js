import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {store} from "../store/store.js";

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
    },
    {
      path: '/form/create',
      name: 'form-create',
      component: () => import('../views/Form/CreateFormView.vue')
    },
    {
      path: '/form/detail/:id',
      name: 'form-detail',
      component: () => import('../views/Form/DetailFormView.vue')
    },
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
