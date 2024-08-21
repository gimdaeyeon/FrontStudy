import {createRouter, createWebHistory} from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from "@/views/UserView.vue";
import ItemView from "@/views/ItemView.vue";


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            // url 주소
            path: '/news',
            // url 주소로 갔을 때 표시될  컴포넌트
            component: NewsView,
        },
        {
            path: '/ask',
            component: AskView,

        },
        {
            path: '/jobs',
            component: JobsView,
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item',
            component: ItemView,
        },
    ]
});






