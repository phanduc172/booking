import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router';

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history',
});

const publicPages = ['/introduce', '/login', '/bookingroom'];

router.beforeEach((to, from, next) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const authRequired = !publicPages.includes(to.path) && !to.path.startsWith('/bookingroom/');

    if (authRequired && !user) {
        return next('/login');
    }
    next();
});


export default router;
