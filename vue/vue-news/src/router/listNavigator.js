import {useStore} from "vuex";

export const listNavigator = (to, from, next)=>{
    const store = useStore();
    store.commit('startSpinner');
    store.dispatch('fetchList',to.name)
        .then(() => {
            store.commit('endSpinner');
            next();
        });
}