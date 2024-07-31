<template>
  <form action="" @submit.prevent="submitForm">
    <div>
      <label for="userId">ID</label>
      <input type="text" id="userId" v-model="username" />
    </div>
    <div>
      <label for="password">PW</label>
      <input type="text" id="passoword" v-model="password" />
    </div>
    <button type="submit">로그인</button>
  </form>
</template>

<script>
import axios from "axios";
import {ref} from 'vue';

export default {
  setup(){
    const username = ref('');
    const password = ref('');

    const submitForm= ()=>{
      axios.post('https://jsonplaceholder.typicode.com/users',{
        username:username.value,
        password: password.value
      })
      .then(console.log);
    }

    return {username,password,submitForm}
  }
};
</script>

<style scoped></style>
