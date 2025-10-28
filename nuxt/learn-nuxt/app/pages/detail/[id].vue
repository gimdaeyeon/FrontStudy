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

useHead({
  title: `Shopping Item Detail - ${product.value.name}`,
  meta: [
    {name: 'description', content: `이 상품은 ${product.value.name}입니다.`},
    {property: 'og:title', content: '상품 상세 페이지'},
    {property: 'og:description', content: '상품의 상세 정보를 확인해보세요'},
    {property: 'og:image', content: product.value.imageUrl},
  ],
})

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