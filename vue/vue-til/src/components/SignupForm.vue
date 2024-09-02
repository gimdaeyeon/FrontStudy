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
    <button>login</button>
  </form>
</template>

<script setup>
import {ref} from "vue";

const loginId = ref('');
const password = ref('');
const nickname = ref('');

const submitForm = ()=>{
  console.log('폼 제출')
}


</script>

<style lang="scss" scoped>

</style>