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
                        :index="i"
                        @remove="removeItem"
                        @toggle="toggleTodoItemComplete"
          />
        </ul>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import TodoInput from "@/components/TodoInput.vue";
import {ref} from "vue";
import TodoListItem from "@/components/TodoListItem.vue";
import storage from "@/api/todoStorage";
import {Todo} from "@/types/todoTypes";

const todoText = ref('');
const todoItems = ref<Todo[]>([]);

fetchTodoItems();

function updateTodoText(text: string) {
  todoText.value = text;
}

function addTodoItem() {
  const todo: Todo = {
    title: todoText.value,
    done: false,
  };

  todoItems.value.push(todo);
  storage.save(todoItems.value);
  initTodoText();
}

function initTodoText() {
  todoText.value = '';
}

function fetchTodoItems(){
  todoItems.value = storage.fetch().sort((a,b)=>{
    if(a.title<b.title) return -1;
    if(a.title>b.title) return 1;
    return 0;
  });
}

function removeItem(index: number) {
  todoItems.value.splice(index, 1);
  storage.save(todoItems.value);
}

function toggleTodoItemComplete(todoItem:Todo,index: number) {
  todoItems.value.splice(index,1,{
    ...todoItem,
    done: !todoItem.done,
  });
  storage.save(todoItems.value);
}

</script>

<style scoped>

</style>