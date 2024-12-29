<template>
  <li>
    {{ todoItem }}
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  todoItem:{
    type:String,
  }
});
</script>

<style scoped>

</style>