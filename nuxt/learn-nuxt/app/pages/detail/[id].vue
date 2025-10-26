<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
            class="product-image"
            :src="product.imageUrl"
            :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button @click="addToCart">카트에 담기</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {getImageUrl} from "../../util/index.js";
import {useRoute, useRouter} from "nuxt/app";
import {useCartStore} from "../../stores/cart.js";
import {useApi} from "../../composables/useApi.js";

useHead({
  title: 'Shopping Item Detail',
  meta: [
    {name: 'description', content: '이 상품은 ~~입니다.'}
  ],
})
const {createCartItem, fetchProductById} = useApi();
const route = useRoute();
const router = useRouter();
const cartStore = useCartStore();
const {id} = route.params;

const {data: product} = await useAsyncData(`product:${id}`, async () => {
  const result = await fetchProductById(id);
  result.data.imageUrl = getImageUrl(id);
  return result.data;
});

async function addToCart() {
  const response = await createCartItem(product.value);
  console.log(response);
  cartStore.addCartItem(product.value);
  await router.push(`/cart`);
}


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