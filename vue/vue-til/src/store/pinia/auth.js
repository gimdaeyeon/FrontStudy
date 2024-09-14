import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {getAuthFromCookie, getUserFromCookie, saveAuthToCookie, saveUserToCookie} from "@/utils/cookies";
import {loginUser} from "@/api/auth";

export const useAuth = defineStore('auth',()=>{
    const username = ref(getUserFromCookie()||'');
    const token = ref(getAuthFromCookie()||'');

    const isLogin = computed(()=>username.value !=='');

    async function login(userData) {
        const {data} = await loginUser(userData);
        username.value = data.user.loginId;
        token.value = data.token;
        saveAuthToCookie(data.token);
        saveUserToCookie(data.user.loginId);
        return data;
    }

    return {
        username,
        token,
        isLogin,
        login,
    }
});