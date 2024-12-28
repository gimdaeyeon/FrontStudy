<template>
  <div>
    <h1>Vue Todo with Typescript</h1>
    <h1>{{todoText}}</h1>
    <TodoInput :item="todoText" @input="updateTodoText"/>
  </div>
</template>

<script setup lang="ts">
import TodoInput from "@/components/TodoInput.vue";
import {ref} from "vue";

const todoText = ref('');

function updateTodoText(text:any){
  todoText.value = text;
}

</script>

<style scoped>

</style>