import Vue from 'vue';
import VueRouter from 'vue-router';
// import NotFound from '@/views/NotFound.vue';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('@/views/Dashboard.vue'),
    },
    // {
    // path: '/dashboard',
    // path: '/payment/:page',
    // name: 'paymentPage',
    // component: Payment,
    // children: [
    // {path:''},{},
    // ]
    // },
    {
      path: '/payment/add/:category',
      name: 'addToCosts',
      component: () => import('@/components/AddPaymentForm.vue'),
    },
    {
      // path: '/notfound',
      path: '*',
      name: 'notfound',
      // component: NotFound,
      component: () => import('@/views/NotFound.vue'),
    },
  ],
});

// const user = true;

// router.beforeEach((to, from, next) => {
//   if (!user && to.name !== 'notfound') next({ name: 'nofound' });
//   else next();
// });

const titles = {
  dashboard: 'Dashboard',
  notfound: 'No found',
};

router.afterEach((to) => {
  document.title = titles[to.name];
});

export default router;
