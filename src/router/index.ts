import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/index.vue'
import Login from '../views/Login.vue'
import Admin from '@/views/admin/index.vue'
import Layout from '../layout/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView
        },
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/about/index.vue')
        },
        {
          path: '/publish',
          name: 'Publish',
          component: () => import('../views/goods/publish.vue')
        },
        {
          path: '/listing',
          name: 'Listing',
          component: () => import('../views/goods/listing.vue')
        },
        {
          path: '/checkout',
          name: 'Checkout',
          component: () => import('../views/checkout/checkout.vue')
        },
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})

export default router
