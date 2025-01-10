<template>
  <ListItem :list="newsList" />
</template>

<script setup lang="ts">

import {useNewsStore} from "@/store/news.ts";
import ListItem from "@/components/ListItem.vue";
const {fetchNews, newsList} = useNewsStore();

fetchNews();


</script>

<style scoped>

</style>