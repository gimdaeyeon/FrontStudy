<template>
  <TodoHeader/>
  <TodoInput @add="addTodoItem" />
  <TodoList :todoItems="todoItems" @remove="removeTodoItem" />
</template>

<script>

import TodoHeader from "@/components/TodoHeader.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";
import {ref} from "vue";

export default {
  components: {
    TodoList,
    TodoInput,
    TodoHeader,
  },
  setup(){
    const todoItems = ref([]);

    function fetchTodos(){
      const result = [];
      for (let i = 0; i < localStorage.length; i++) {
        const todoItem = localStorage.key(i);
        result.push(todoItem);
      }
      return result;
    }
    todoItems.value = fetchTodos();

    function addTodoItem(todo){
      todoItems.value.push(todo);
      localStorage.setItem(todo,todo);
    }

    return {todoItems,addTodoItem}
  },
  methods:{
    removeTodoItem(item,index){
      this.todoItems.splice(index,1);
      localStorage.removeItem(item);
    }
  }

}
</script>

<style lang="scss" scoped>

</style>