<template>
  <div>
    <header>
      <h1>Vue Todo with Typescript</h1>
    </header>
    <main>
      <TodoInput :item="todoText"
                 @input="updateTodoText"
                 @add="addTodoItem"
      />
      <div>
        <ul>
          <TodoListItem v-for="(todoItem,i) in todoItems" :key="i"
                        :todoItem="todoItem"
          />
        </ul>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import TodoInput from "@/components/TodoInput.vue";
import {onMounted, ref} from "vue";
import TodoListItem from "@/components/TodoListItem.vue";
import storage from "@/api/todoStorage";

const todoText = ref('');
const todoItems = ref<any>([]) ;

// onMounted(()=>{
//
// });


function updateTodoText(text: string) {
  todoText.value = text;
}

function addTodoItem() {
  const value = todoText.value;
  // localStorage.setItem(value, value);
  todoItems.value.push(value);
  storage.save(todoItems.value);
  initTodoText();
}

function initTodoText(){
  todoText.value = '';
}

function fetchTodoItems(){
  todoItems.value = storage.fetch();
}

</script>

<style scoped>

</style>