<template>
  <div>
    <label for="todo-input"></label>
    <input id="todo-input" type="text" :value="item" @input="handleInput" />
    <button @clcik="addTodo" type="button">add</button>
  </div>
</template>

<script setup lang="ts">

const props = defineProps(['item']);
const emit = defineEmits(['input']);

function addTodo(){
  console.log(props.item);
}

function handleInput(e:any){
  emit('input',e.target.value);
}

</script>

<style scoped>

</style>