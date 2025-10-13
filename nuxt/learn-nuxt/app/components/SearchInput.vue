<template>
  <div>
    <input type="text" v-model="searchKeyword" @input="e=>searchKeyword = e.target.value">
    <button>search</button>
  </div>
</template>

<script setup>

defineProps({
  searchKeyword:{
    type:String,
    default:'',
  }
});

const searchKeyword = defineModel();

</script>

<style scoped>

</style>