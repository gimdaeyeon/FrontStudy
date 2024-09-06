<template>
  <header>
    <div>
      <router-link to="/" class="logo">
        TIL
      </router-link>
    </div>
    <div class="navigations">
      <template v-if="store.getters.isLogin">
        <span class="username">{{ username }}</span>
        <a href="javascript:;" type="button" @click="logoutUser" >LogOut</a>
      </template>
      <template v-else>
        <router-link to="/login">로그인</router-link>
        <router-link to="/signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script setup>

import {computed} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

const store = useStore();
const router = useRouter();
const username = computed(() => {
  return store.state.username;
});

function logoutUser(){
  store.commit('clearUserName');
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

a.router-link-exact-active {
  color: white;
  font-weight: bold;
}

.username{
  color: white;
}
</style>
