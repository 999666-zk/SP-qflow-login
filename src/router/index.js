import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    // 默认是pc
    { path: '/', name: 'root', redirect: '/login' },
    {
        path: '/loginadmin',
        name: 'LoginAdmin',
        meta: { title: 'loginadmin' },
        component: () => import(/* webpackChunkName: "LoginPage" */ '../views/LoginPage/LoginPage.vue')
    },
    {
        path: '/login',
        name: 'LoginPage',
        meta: { title: 'login' },
        component: () => import(/* webpackChunkName: "LoginPageAdmin" */ '../views/LoginPage/LoginPageAdmin.vue')
    },
    {
        path: '/register',
        name: 'Register',
        meta: { title: 'register' },
        component: () => import(/* webpackChunkName: "Register" */ '../views/Register/Register.vue')
    },
    {
        path: '/content',
        name: 'Content',
        meta: { title: 'Content' },
        component: () => import(/* webpackChunkName: "Content" */ '../views/PortalContent/Content.vue')
    },
    {
        path: '/nodata',
        name: 'Nodata',
        meta: { title: 'Nodata' },
        component: () => import(/* webpackChunkName: "nonedata" */ '../views/PortalContent/nonedata.vue')
    },
    {
        path: '/printview',
        name: 'PrintView',
        meta: { title: 'PrintView' },
        component: () => import(/* webpackChunkName: "PrintView" */ '../views/PrintView.vue')
    },
    {
        path: '/registering',
        name: 'Registering',
        meta: { title: 'Registering' },
        component: () => import(/* webpackChunkName: "Registering" */ '../views/Register/Registering.vue')
    },
    {
        path: '/registrationsuccess',
        name: 'RegistrationSuccess',
        meta: { title: 'RegistrationSuccess' },
        component: () => import(/* webpackChunkName: "RegisterSuccess" */ '../views/Register/RegisterSuccess.vue')
    },
    {
        path: '/repassword',
        name: 'Repassword',
        meta: { title: 'Repassword' },
        component: () => import(/* webpackChunkName: "RePassWordView" */ '../views/RePassWord/RePassWordView.vue')
    },
    // 测试
    {
        path: '/demos',
        name: 'Demo',
        meta: { title: 'Demo' },
        component: () => import(/* webpackChunkName: "demo" */ '../components/DragVerify.vue')
    },
    {
        path: '/test',
        name: 'test',
        meta: { title: 'test' },
        component: () => import(/* webpackChunkName: "RePassword" */ '../views/RePassword.vue')
    },
    // mobile
    {
        path: '/m',
        name: 'mobile',
        component: () => import(/* webpackChunkName: "M_Mobile" */ '../views/Mobile/index.vue'),
        children: [
            {
                path: 'login',
                component: () => import(/* webpackChunkName: "M_LoginPage" */ '../views/Mobile/LoginPage/index.vue'),
                meta: { title: '404' }
            }
        ]
    },

    {
        path: '/404',
        component: () => import(/* webpackChunkName: "404" */ '../views/StatusView/404View.vue'),
        meta: { title: '404' }
    },
    {
        path: '/403',
        component: () => import(/* webpackChunkName: "403" */ '../views/StatusView/403View.vue'),
        meta: { title: '403' }
    },
    {
        path: '*',
        redirect: '/404'
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
