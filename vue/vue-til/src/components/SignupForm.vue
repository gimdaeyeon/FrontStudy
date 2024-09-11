<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="loginId" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <button :disabled="isUserValid" class="btn">회원 가입</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {registerUser} from "@/api/auth";

const loginId = ref('');
const password = ref('');
const nickname = ref('');
const logMessage = ref('');

const isUserValid = computed(()=>{
  return loginId.value && password.value &&nickname.value;
})


const submitForm = async () => {
  const userData = {
    loginId: loginId.value,
    password: password.value,
    nickname: nickname.value
  }
  const {data} = await registerUser(userData);
  console.log(data.loginId);
  logMessage.value = `${data.loginId}님이 가입되었습니다.`
  initForm();
}

const initForm = () => {
  loginId.value = ''
  password.value = ''
  nickname.value = ''
}


</script>

<style lang="scss" scoped>

</style>