import {createRouter,createWebHistory} from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';


export const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            // url 주소
            path:'/news',
            // url 주소로 갔을 때 표시될  컴포넌트
            component:NewsView,
        },
        {
            path:'/ask',
            component:AskView,
        },
        {
            path:'/jobs',
            component:JobsView,
        },
    ]
});






