import {createRouter, createWebHistory} from "vue-router";
import {store} from "@/store";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/main'
        },
        {
            path: '/login',
            component: () => import('@/views/LoginPage.vue'),
        },
        {
            path: '/signup',
            component: () => import('@/views/SignupPage.vue'),
        },
        {
            path: '/main',
            component: () => import('@/views/MainPage.vue'),
            meta: {auth: true},
        },
        {
            path: '/add',
            component: () => import('@/views/PostAddPage.vue'),
            meta: {auth: true},
        },
        {
            path: '/post/:id',
            component: () => import('@/views/PostEditPage.vue'),
            meta: {auth: true},
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/NotFoundPage.vue'),
        },
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.auth && !store.getters.isLogin) {
        console.log('인증이 필요합니다.');
        next('/login');
        return;
    }
    next();
});

export {router}