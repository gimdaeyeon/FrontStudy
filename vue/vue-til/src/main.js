import { createApp } from 'vue'
import App from './App.vue'
import {router} from "@/routes";
// import {store} from "@/store/vuex";
import {createPinia} from "pinia";

const pinia = createPinia();
createApp(App)
    .use(router)
    // .use(store) // vuex 사용
    .use(pinia) // pinia 사용
    .mount('#app')
