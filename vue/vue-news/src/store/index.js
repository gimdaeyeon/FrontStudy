import {createStore} from 'vuex';
import mutations from "@/store/mutations";
import actions from "@/store/actions";

export const store = createStore({
    state: {
        news: [],
        jobs: [],
        asks: [],
        user:{},
        item:{},
        list:[],
        loadingStatus: false,
    },
    mutations,
    actions,
})

