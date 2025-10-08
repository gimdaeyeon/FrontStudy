<template>
  <div>
    {{products}}
  </div>
</template>

<script setup>

import axios from "axios";

const {data: products} = await useAsyncData('products', async () => {
  const response = await axios.get('http://localhost:3000/products');
  console.log(response);
  return response.data;
});

</script>

<style scoped>

</style>