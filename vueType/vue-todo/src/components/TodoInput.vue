<template>
  <div>
    <label for="todo-input"></label>
    <input id="todo-input" type="text">
    <button @clcik="addTodo" type="button">add</button>
  </div>
</template>

<script setup lang="ts">

function addTodo(){
  console.log('hello');
}

</script>

<style scoped>

</style>