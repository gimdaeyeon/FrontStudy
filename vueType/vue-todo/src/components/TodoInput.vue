<template>
  <div>
    <label for="todo-input">
      <input id="todo-input" :value="item" type="text" @input="handleInput" @keydown.enter="addTodo"/>
    </label>
    <button @click="addTodo" type="button">add</button>
  </div>
</template>

<script setup lang="ts">

import {VueEvent} from "@/types";

const props = defineProps({
  item:{
    type:String,
    required: true
  }
});
console.log(props);
const emit = defineEmits(['input','add']);

function addTodo(){
  emit('add');
}

function handleInput(e:VueEvent.Input<HTMLInputElement>){
  // const a : VueEvent.Input = {
  //   target
  // };

  // const eventTarget = e.target as HTMLInputElement
  emit('input',e.target.value);
}

</script>

<style scoped>

</style>