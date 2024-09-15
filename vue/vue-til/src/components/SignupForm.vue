<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="loginId"/>
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="password" v-model="password"/>
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname"/>
        </div>
        <button :disabled="!isUserValid" class="btn">회원 가입</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {registerUser} from "@/api/auth";
import {useRouter} from "vue-router";

const loginId = ref('');
const password = ref('');
const nickname = ref('');
const logMessage = ref('');
const router = useRouter();

const isUserValid = computed(() => {
  return loginId.value && password.value && nickname.value;
})


const submitForm = async () => {
  const userData = {
    loginId: loginId.value,
    password: password.value,
    nickname: nickname.value
  }
  try {
    await registerUser(userData);
    router.push('/login');
  } catch (error) {
    logMessage.value = error.response.data.message;
  }
}


</script>

<style lang="scss" scoped>

</style>