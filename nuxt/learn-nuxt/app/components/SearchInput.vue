<template>
  <div class="input-wrapper flex">
    <input type="text" class="search-input"
           v-model="searchKeyword" @input="e=>searchKeyword = e.target.value"
    >
    <button class="btn" @click="$emit('search')">search</button>
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
.input-wrapper {
  height: 40px;
  margin: 1rem 0;
}
.search-input {
  width: 200px;
  font-size: 1.2rem;
  font-weight: 500;
}
.btn {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>