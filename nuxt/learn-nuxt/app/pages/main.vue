<template>
  <div>
    <p>메인 페이지 입니다.</p>
    <div>
      <div>
        <ul>
          <li v-for="product in products" :key="product.id">
            <img :src="product.imageUrl" :alt="product.name">
            <p>{{ product.name }}</p>
            <p>{{ product.price }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const {data: products} = await useAsyncData('products', async () => {
  const response = await axios.get('http://localhost:3000/products');
  console.log(response);
  return response.data.map(item => ({
    ...item,
    imageUrl: `https://picsum.photos/id/${Math.floor(
        Math.random() * 30
    )}/640/480`,
  }));
});


</script>

<style scoped>

</style>