import Layout from '~/components/layouts/index.vue';

const routes = [
    { 
      path: '/', 
      name: 'Layout',
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: '/home',
          name: 'FrontHome',
          component: () => import(`~/pages/front/Home.vue`),
          meta: {
            title: 'Welcome'
          }
        },
      ]
    },
    { path: '/:pathMatch(.*)*', name: '404', component: () => import(`~/pages/error/404.vue`) }

]

export default routes