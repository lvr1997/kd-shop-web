import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/index.vue'
import Login from '../views/login/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import('../views/goods/detail.vue')
    }
  ]
})

//路由守卫
// router.beforeEach((to, from) => {
//   if(!isAuthenticated && to.name !== 'Login') {
//     return { name: 'Login' }
//   }
// })

export default router
