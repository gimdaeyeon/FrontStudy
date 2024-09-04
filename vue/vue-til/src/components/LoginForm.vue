<template>
  <form @submit.prevent="submitLoginForm">
    <div>
      <label for="loginId">id: </label>
      <input id="loginId" type="text" v-model="loginId">
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="password">
    </div>
    <button>로그인</button>
    <p>{{logMessage}}</p>
  </form>
</template>

<script setup>
import {ref} from "vue";
import {loginUser} from "@/api";

const loginId = ref('');
const password = ref('');
const logMessage = ref('');

async function submitLoginForm() {
  const userData = {
    loginId: loginId.value,
    password: password.value
  }

  const {data} = await loginUser(userData);
  console.log(data.user.loginId);
  logMessage.value = `${data.user.loginId}님 환영합니다.`
  initForm();
}

function initForm(){
  loginId.value = '';
  password.value = '';
}
</script>

<style lang="scss" scoped>

</style>