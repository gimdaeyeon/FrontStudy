<template>
  <div>
    <p>메인 페이지 입니다.</p>
    <div>
      {{products}}
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import {onMounted} from "vue";

const products = ref([]);

onMounted(async ()=>{
  const response = await axios.get('http://localhost:3000/products');
  console.log(response);
  products.value = response.data;
})

</script>

<style scoped>

</style>