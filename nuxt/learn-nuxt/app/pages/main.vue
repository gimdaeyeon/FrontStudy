<template>
  <div>
    <p>메인 페이지 입니다.</p>
  </div>
</template>

<script setup>
import axios from "axios";
import {onMounted} from "vue";

onMounted(async ()=>{
  const response = await axios.get('http://localhost:3000/products');
  console.log(response);
})

</script>

<style scoped>

</style>