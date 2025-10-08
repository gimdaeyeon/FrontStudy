<template>
  <div>
    <p>메인 페이지 입니다.</p>
    <div>
      <ProductList/>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

// const {data: products} = await useAsyncData('products', async () => {
//   const response = await axios.get('http://localhost:3000/products');
//   console.log(response);
//   return response.data;
// });


</script>

<style scoped>

</style>