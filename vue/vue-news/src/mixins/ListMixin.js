// mixin
import {useStore} from "vuex";
import {useRoute} from "vue-router";

export default {
//     재사용할 컴포넌트 옵션 & 로직
    created(){
        const store = useStore();
        store.commit('startSpinner');
        store.dispatch('fetchList',useRoute().name)
            .then(() => store.commit('endSpinner'));
    }
}


