import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../layout/index.vue';
import Home from '../views/home/index.vue';
import Login from '../views/user/login.vue';
import Register from "../views/user/register.vue";

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
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../views/admin/index.vue'),
      redirect: '/admin/dashboard',
      children: [
        {
          path: '/admin/dashboard',
          name: 'Dashboard',
          component: () => import('../views/admin/components/Dashboard.vue'),
          meta: {
            title: 'Dashboard'
          }
        },
        {
          path: '/admin/users',
          name: 'userManage',
          component: () => import('../views/admin/components/Users.vue'),
          meta: {
            title: 'User Manage'
          }
        },
        {
          path: '/admin/profile',
          name: 'UserProfile',
          component: () => import('../views/admin/components/UserProfile.vue'),
          meta: {
            title: 'User Profile'
          }
        },
        {
          path: '/admin/goods',
          name: 'GoodsManage',
          component: () => import('../views/admin/components/Goods.vue'),
          meta: {
            title: 'Goods Manage'
          }
        },
        {
          path: '/admin/order',
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
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
