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
      </div>
    </div>
  </div>
</template>

<script setup>
import {fetchProductById} from "../../api/index.js";
import {getImageUrl} from "../../util/index.js";

const route = useRoute();

const {id} = route.params;

const {data:product} = await useAsyncData(`product:${id}`, async () => {
  const result = await fetchProductById(id);
  result.data.imageUrl = getImageUrl(id);
  return result.data;
});


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