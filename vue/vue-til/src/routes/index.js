import {createRouter, createWebHistory} from "vue-router";

export const router = createRouter({
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
        },
        {
            path: '/add',
            component: () => import('@/views/PostAddPage.vue'),
        },
        {
            path: '/post/:id',
            component: () => import('@/views/PostEditPage.vue'),
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/NotFoundPage.vue'),
        },
    ]
});