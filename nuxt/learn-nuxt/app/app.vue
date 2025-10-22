<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>

  </div>
</template>
<script setup lang="ts">
import {useCartStore} from "../.nuxt/imports";
import {callOnce} from "nuxt/app";


await callOnce(async () => {
  const cartStore = useCartStore();
  await cartStore.initCarts();
});
</script>