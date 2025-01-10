<template>
  <h1>vue-news</h1>
</template>

<script setup lang="ts">

import {useNewsStore} from "@/store/news.ts";

const {fetchNews} = useNewsStore();

fetchNews();
</script>

<style scoped>

</style>