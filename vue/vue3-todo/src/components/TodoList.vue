<template>
  <ul>
    <li v-for="(item,index) in items" :key="index" >{{item}}</li>
  </ul>
</template>

<script>
import {ref} from "vue";

export default {
  setup(){
    const items = ref([]);

    function fetchTodos(){
      for (let i = 0; i < localStorage.length; i++) {
        const todoItem = localStorage.key(i);
        items.value.push(todoItem);
      }
    }
    fetchTodos();

    return {items,fetchTodos}
  }
}
</script>

<style lang="scss" scoped>

</style>