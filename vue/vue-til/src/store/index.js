import {createStore} from "vuex";


export const store = createStore({
    state:{
        username:'',
        token:'',
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
        },
        setToken(state,token){
            state.token = token;
        }

    }
})