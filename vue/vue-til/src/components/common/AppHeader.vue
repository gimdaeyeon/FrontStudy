<template>
  <header>
    <div>
      <router-link :to="logoLink" class="logo">
        TIL
<!--        <span v-if="store.getters.isLogin">by {{ store.state.username }}</span>-->
        <span v-if="auth.isLogin">by {{ auth.username }}</span>
      </router-link>
    </div>
    <div class="navigations">
      <template v-if="auth.isLogin">
        <a href="javascript:;" type="button" @click="logoutUser" >
          LogOut
        </a>
      </template>
      <template v-else>
        <router-link to="/login">로그인</router-link>
        <router-link to="/signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script setup>

// import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {deleteCookie} from "@/utils/cookies";
import {computed} from "vue";
import {useAuth} from "@/store/pinia/auth";

// const store = useStore();
const auth = useAuth();
const router = useRouter();

// const logoLink = computed(()=>store.getters.isLogin?'/main':'/login');
const logoLink = computed(()=>auth.isLogin?'/main':'/login');

function logoutUser(){
  // store.commit('clearUserName');
  // store.commit('clearToken');
  auth.username = '';
  auth.token = '';
  deleteCookie('til_auth');
  deleteCookie('til_user');
  router.push('/login');
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}

a {
  color: #dedede;
  font-size: 18px;
}

a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}

.logo > span {
  font-size: 14px;
  font-weight: normal;
}

.navigations a {
  margin-left: 10px;
}

.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}

.logout-button {
  font-size: 14px;
}

a.router-link-exact-active {
  color: white;
  font-weight: bold;
}

.username{
  color: white;
}
</style>
