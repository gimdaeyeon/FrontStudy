<template>
  <div>
    <input type="text" v-model="todoInput" @keyup.enter="addTodo">
    <button @click="addTodo"  >추가</button>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  setup(){
    //  data
    const todoInput = ref('');

    function addTodo(){
      const todo = todoInput.value;
      localStorage.setItem(todo,todo);
      todoInput.value = '';
    }

    return {todoInput,addTodo}
  }
}
</script>

<style scoped>

</style>