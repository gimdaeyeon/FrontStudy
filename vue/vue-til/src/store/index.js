import {createStore} from "vuex";
import {getAuthFromCookie, getUserFromCookie} from "@/utils/cookies";


export const store = createStore({
    state:{
        username:getUserFromCookie()||'',
        token:getAuthFromCookie()||'',
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