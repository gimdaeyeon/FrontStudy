<template>
  <div>
    <h1>상세 페이지</h1>
    <div>
      {{product}}
      <img :src="`https://picsum.photos/id/${id}/640/480`" :alt="product.name">
      <p>name: {{product.name}}</p>
      <p>price: {{product.price}}</p>
    </div>
  </div>
</template>

<script setup>
import {fetchProductById} from "../../api/index.js";

const route = useRoute();

const {id} = route.params;

const {data:product} = await useAsyncData(`product:${id}`, async () => {
  const result = await fetchProductById(id);
  return result.data;
});

</script>

<style scoped>

</style>