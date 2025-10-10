<template>
  <div class="app">
    <main>
      <div>
        <input type="text">
      </div>
      <ul>
        <li v-for="product in products" :key="product.id" class="item flex">
          <img class="product-image" :src="product.imageUrl" :alt="product.name">
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
    </main>
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
.flex {
  display: flex;
  justify-content: center;
}

.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}

.product-image {
  width: 400px;
  height: 250px;
}

.app {
  position: relative;
}

.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}

.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>