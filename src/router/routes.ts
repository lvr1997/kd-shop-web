import Layout from '~/components/layouts/index.vue';
import Login from '~/pages/Login.vue';

const routes = [
    { path: '/login', name: 'Login', component: Login },
    { 
        path: '/admin', 
        name: 'Layout',
        redirect: '/home',
        component: Layout,
        children: [
          {
            path: 'home',
            name: 'Home',
            component: () => import(`~/pages/admin/Home.vue`),
            meta: {
              title: 'Welcome'
            }
          }
        ]
    },
    { 
        path: '/front', 
        name: 'Layout',
        redirect: '/home',
        component: Layout,
        children: [
          {
            path: 'home',
            name: 'Home',
            component: () => import(`~/pages/front/Home.vue`),
            meta: {
              title: 'Welcome'
            }
          }
        ]
    },
    { path: '/:pathMatch(.*)*', name: '404', component: () => import(`~/pages/error/404.vue`) }

]

export default routes