<template>
  <TodoHeader :appTitle="title"/>
  <TodoInput @add="addTodoItem"/>
  <TodoList :todoItems="todoItems" @remove="removeTodoItem"/>
</template>

<script>

import TodoHeader from "@/components/TodoHeader.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";
import {onBeforeMount, ref} from "vue";

export default {
  components: {
    TodoList,
    TodoInput,
    TodoHeader,
  },
  data() {
    return {
      title: '할일 앱'
    }
  },
  setup() {
    const todoItems = ref([]);

    function fetchTodos() {
      const result = [];
      for (let i = 0; i < localStorage.length; i++) {
        const todoItem = localStorage.key(i);
        result.push(todoItem);
      }
      return result;
    }

    // 라이프 사이클 API
    onBeforeMount(() => {
      todoItems.value = fetchTodos();
    })

    function addTodoItem(todo) {
      todoItems.value.push(todo);
      localStorage.setItem(todo, todo);
    }

    function removeTodoItem(item, index) {
      todoItems.value.splice(index, 1);
      localStorage.removeItem(item);
    }

    return {todoItems, addTodoItem, removeTodoItem}
  },
}
</script>

<style lang="scss" scoped>

</style>