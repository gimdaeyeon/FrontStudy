<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitLoginForm" class="form">
        <div>
          <label for="loginId">id: </label>
          <input id="loginId" type="text" v-model="loginId">
          <p class="validation-text">
            <span class="warning" v-if="!isLoginIdValid &&loginId">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password">
        </div>
        <button :disabled="!isLoginIdValid ||!password" class="btn">로그인</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>

</template>

<script setup>
import {computed, ref} from "vue";
import {loginUser} from "@/api";

const loginId = ref('');
const password = ref('');
const logMessage = ref('');

const isLoginIdValid = computed(() => {
  return loginId.value;
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

<style>
.btn {
  color: white;
}
</style>