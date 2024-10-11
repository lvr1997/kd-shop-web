import Layout from '~/components/layouts/index.vue';
import Login from '~/pages/Login.vue';

const routes = [
    { 
      path: '/', 
      name: 'Layout',
      redirect: '/admin',
      component: Layout,
      children: [
        {
          path: '/admin',
          name: 'Home',
          component: () => import(`~/pages/admin/Home.vue`),
          meta: {
            title: 'Welcome'
          }
        },
        {
          path: '/front',
          name: 'FrontHome',
          component: () => import(`~/pages/front/Home.vue`),
          meta: {
            title: 'Welcome'
          }
        }
      ]
    },
    { path: '/login', name: 'Login', component: Login },
    { path: '/:pathMatch(.*)*', name: '404', component: () => import(`~/pages/error/404.vue`) }

]

export default routes