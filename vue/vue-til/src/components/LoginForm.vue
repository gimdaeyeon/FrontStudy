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
          <input id="password" type="password" v-model="password">
        </div>
        <button :disabled="!isLoginIdValid ||!password" class="btn">로그인</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>

</template>

<script setup>
import {computed, ref} from "vue";
import {useRouter} from "vue-router";
// import {useStore} from "vuex";
import {useAuth} from "@/store/pinia/auth";

const loginId = ref('');
const password = ref('');
const logMessage = ref('');
const router = useRouter();
const auth = useAuth();
// const store = useStore();

const isLoginIdValid = computed(() => {
  return loginId.value;
});

async function submitLoginForm() {
  try {
    const userData = {
      loginId: loginId.value,
      password: password.value
    }

    // await store.dispatch('login',userData);
    await auth.login(userData);
    router.push('/main');
  } catch (error) {
    console.log(error)
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