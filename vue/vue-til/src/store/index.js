import {createStore} from "vuex";
import {getAuthFromCookie, getUserFromCookie, saveAuthToCookie, saveUserToCookie} from "@/utils/cookies";
import {loginUser} from "@/api";


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
    },
    actions:{
        async login({commit},userData){
            const {data} = await loginUser(userData);
            commit('setToken',data.token);
            commit('setUserName',data.user.loginId);
            saveAuthToCookie(data.token);
            saveUserToCookie(data.user.loginId);
            return data;
        }
    }
})