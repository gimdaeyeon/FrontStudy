<template>
  <div class="list-wrapper">
    <ul>
      <li v-for="cartItem in cartItems" :key="cartItem.id" class="list-item">
        <img class="thumbnail"
             :src="cartItem.imageUrl" alt=""
        >
        <div class="description">
          <p>{{cartItem.name}}</p>
          <span>{{cartItem.price}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {storeToRefs} from "pinia";

const cartStore = useCartStore();
const {cartItems} = storeToRefs(cartStore);
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>