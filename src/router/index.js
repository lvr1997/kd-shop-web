import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/index.vue'
import Login from '../views/login/index.vue'
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
          name: 'Home',
          component: Home,
        },
        {
          path: '/goods/list',
          name: 'List',
          component: () => import('../views/goods/list.vue')
        },
        {
          path: '/goods/detail',
          name: 'Detail',
          component: () => import('../views/goods/detail.vue')
        },
        {
          path: '/goods/publish',
          name: 'Publish',
          component: () => import('../views/goods/publish.vue')
        },
        {
          path: '/user/shop',
          name: 'Shop',
          component: () => import('../views/user/shop.vue')
        },
        {
          path: '/user/info',
          name: 'Info',
          component: () => import('../views/user/info.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})

//路由守卫
// router.beforeEach((to, from) => {
//   if(!isAuthenticated && to.name !== 'Login') {
//     return { name: 'Login' }
//   }
// })

export default router
