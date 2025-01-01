<template>
  <div>
    <label for="todo-input">
      <input id="todo-input" :value="item" type="text" @input="handleInput" @keydown.enter="addTodo"/>
    </label>
    <button @click="addTodo" type="button">add</button>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  item:{
    type:String,
    required: true
  }
});
const emit = defineEmits(['input','add']);

function addTodo(){
  emit('add');
}

function handleInput(e:InputEvent){
  const eventTarget = e.target as HTMLInputElement
  emit('input',eventTarget.value);
}

</script>

<style scoped>

</style>