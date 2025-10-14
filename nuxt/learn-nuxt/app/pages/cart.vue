<template>
  <div>
    <h2>카트 페이지 입니다.</h2>
  </div>
</template>

<script setup>
import {fetchProductById} from "../api/index.js";
import {getImageUrl} from "../util/index.js";

const route = useRoute();

const {id} = route.params;

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