<template>
  <ListItem :list="askList"/>
</template>

<script setup lang="ts">
import {useAskStore} from "@/store/asks.ts";
import ListItem from "@/components/ListItem.vue";

const {fetchAsks,askList} = useAskStore();
fetchAsks();
</script>

<style scoped>

</style>