<template>
  <li>
    <span @click="toggleComplete" class="item" :class="{complete:todoItem.done}">{{ index }}. {{ todoItem.title }}</span>
    <button @click="removeItem">삭제</button>
  </li>
</template>

<script setup lang="ts">
import {PropType} from "vue";
import {Todo} from "@/App.vue";

const props = defineProps({
  todoItem: {
    type: Object as PropType<Todo>,
    // required: true
  },
  index: {
    type: Number,
  }
});

const emit = defineEmits(['remove', 'complete']);

function removeItem() {
  emit('remove', props.index);
}

function toggleComplete() {
  emit('complete', props.index);
}


</script>

<style scoped>
.item {
  cursor: pointer;
}

.complete {
  text-decoration: line-through;
}

</style>