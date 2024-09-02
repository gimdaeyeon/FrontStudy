import {createRouter, createWebHistory} from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
          path: '/',
          redirect: '/login'
        },
        {
            path:'/login',
            component: ()=>import('@/view/LoginPage.vue'),
        },
        {
            path:'/signup',
            component: ()=>import('@/view/SignupPage.vue'),
        },
    ]
});