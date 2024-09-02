import {createRouter, createWebHistory} from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/login'
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
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/NotFoundPage.vue'),
        },
    ]
});