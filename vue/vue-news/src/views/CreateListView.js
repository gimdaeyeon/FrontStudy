import ListView from "@/views/ListView.vue";
import {useStore} from "vuex";
import {h} from "vue";
import {useRoute} from "vue-router";

export default function createListView(){
    return {
    //     재사용할 인스턴스(컴포넌트) 욥션들이 들어갈 자리
        setup() {
            const store = useStore();
            store.commit('startSpinner');
            store.dispatch('fetchList',useRoute().name)
                .then(() => store.commit('endSpinner'));
        },
        render(){
            // h: 컴포넌트나 엘리먼트를 그려주는 vue api
            return h(ListView);
        }
    }
}