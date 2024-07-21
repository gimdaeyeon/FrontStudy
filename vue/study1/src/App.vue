<script setup>
  import {ref} from 'vue';

  const cnt = ref(0);
  const title =ref('vue start');
  // const isTrue = ref(true);

</script>

<template>
  <div>
      <h1>{{ title }}</h1>
      <p>{{ cnt }}</p>
      <button @click="cnt++">+</button>
      <button @click="cnt--">-</button>
      <input type="text" v-model="title" >
      <button :disabled="true">하하하하하하하</button>
  </div>
</template>

<style scoped>

</style>
