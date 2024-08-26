import {createRouter, createWebHistory} from 'vue-router';
import UserView from "@/views/UserView.vue";
import ItemView from "@/views/ItemView.vue";
// import createListView from "@/views/CreateListView";
import NewsView from "@/views/NewsView.vue";
import AskView from "@/views/AskView.vue";
import JobsView from "@/views/JobsView.vue";
import {listNavigator} from "@/router/listNavigator";
import {useStore} from "vuex";


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
            // component: createListView() ,
            component: NewsView ,
            beforeEnter: listNavigator,
        },
        {
            path: '/ask',
            name: 'ask',
            // component: createListView(),
            component: AskView,
            beforeEnter:listNavigator
        },
        {
            path: '/jobs',
            name: 'jobs',
            // component: createListView(),
            component: JobsView,
            beforeEnter:listNavigator
        },
        {
            path: '/user/:id',
            name: 'user',
            component: UserView,
            beforeEnter:(to,from,next)=>{
                const store = useStore();
                store.commit('startSpinner');
                store.dispatch('fetchUser',to.params.id)
                    .then(()=>store.commit('endSpinner'));
                next();
            }
        },
        {
            path: '/item',
            name:'item',
            component: ItemView,
        },
    ]
});






