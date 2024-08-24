import {createRouter, createWebHistory} from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from "@/views/UserView.vue";
import ItemView from "@/views/ItemView.vue";
import createListView from "@/views/CreateListView";


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
            name: 'news',
            component: createListView('NewsView') ,
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListView('AskView'),

        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
        },
        {
            path: '/user/:id',
            name: 'user',
            component: UserView,
        },
        {
            path: '/item',
            name:'item',
            component: ItemView,
        },
    ]
});






