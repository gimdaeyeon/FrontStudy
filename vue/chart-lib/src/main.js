import { createApp } from 'vue'
import App from './App.vue'
import ChartPlugin from "@/plugin/ChartPlugin";

createApp(App)
    .use(ChartPlugin)
    .mount('#app');
