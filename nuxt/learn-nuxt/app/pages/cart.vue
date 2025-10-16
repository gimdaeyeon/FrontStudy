<template>
  <div>
    <h2>카트 페이지 입니다.</h2>
    <div>
      <ul>
        <li v-for="cartItem in cartItems" :key="cartItem.id">
          <img :src="cartItem.imageUrl" alt="">
          <p>{{cartItem.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {storeToRefs} from "pinia";

const route = useRoute();
const {id} = route.params;
const cartStore = useCartStore();
const {cartItems} = storeToRefs(cartStore);

</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>