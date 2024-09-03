<template>
  <form @submit.prevent="submitForm" >
    <div>
      <label for="loginId">id: </label>
      <input id="loginId" type="text" v-model="loginId">
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="password">
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <input id="nickname" type="text" v-model="nickname">
    </div>
    <button>회원가입</button>
    <p>{{logMessage}}</p>
  </form>
</template>

<script setup>
import {ref} from "vue";
import {registerUser} from "@/api";

const loginId = ref('');
const password = ref('');
const nickname = ref('');
const logMessage = ref('');

 const submitForm = async ()=>{
  const userData = {
    loginId:loginId.value,
    password:password.value,
    nickname:nickname.value
  }
  const {data} = await registerUser(userData);
  console.log(data.loginId);
  logMessage.value = `${data.loginId}님이 가입되었습니다.`
   initForm();
}

const initForm = ()=>{
  loginId.value = ''
  password.value = ''
  nickname.value = ''
}


</script>

<style lang="scss" scoped>

</style>