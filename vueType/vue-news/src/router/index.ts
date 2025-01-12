import {createRouter, createWebHistory} from "vue-router";
import NewsView from "@/views/NewsView.vue";
import AskView from "@/views/AskView.vue";
import JobsView from "@/views/JobsView.vue";
import UserView from "@/views/UserView.vue";
import ItemView from "@/views/ItemView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            name: 'news',
            path: '/news',
            component: NewsView,
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
        },
        {
            path: '/user/:userName',
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
export default router;



