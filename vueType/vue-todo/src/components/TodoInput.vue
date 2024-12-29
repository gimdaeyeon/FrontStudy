<template>
  <div>
    <label for="todo-input">
      <input id="todo-input" @keydown.enter="addTodo" type="text" :value="item" @input="handleInput" />
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
  console.log('클릭');
  emit('add');
}

function handleInput(e:InputEvent){
  const eventTarget = e.target as HTMLInputElement
  emit('input',eventTarget.value);
}

</script>

<style scoped>

</style>