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
    <button :disabled="!isUserValid">로그인</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script setup>
import {computed, ref} from "vue";
import {loginUser} from "@/api";

const loginId = ref('');
const password = ref('');
const logMessage = ref('');

const isUserValid = computed(()=>{
  return loginId.value && password.value;
})

async function submitLoginForm() {
  try {
    const userData = {
      loginId: loginId.value,
      password: password.value
    }

    const {data} = await loginUser(userData);
    console.log(data.user.loginId);
    logMessage.value = `${data.user.loginId}님 환영합니다.`
  } catch (error) {
    logMessage.value = error.response.data.message;
  } finally {
    initForm();
  }
}

function initForm() {
  loginId.value = '';
  password.value = '';
}
</script>

<style lang="scss" scoped>

</style>