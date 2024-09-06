import {createStore} from "vuex";


export const store = createStore({
    state:{
        username:'',
    },

    getters:{
      isLogin(state){
          return state.username!=='';
      }
    },
    mutations:{
        setUserName(state,username){
            state.username = username;
        },
        clearUserName(state){
            state.username='';
        }
    }
})