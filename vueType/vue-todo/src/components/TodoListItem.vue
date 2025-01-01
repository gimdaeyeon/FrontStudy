<template>
  <li>
    <span @click="toggleItem" class="item" :class="{complete:todoItem.done}">{{ index }}. {{ todoItem.title }}</span>
    <button @click="removeItem">삭제</button>
  </li>
</template>

<script setup lang="ts">
import {PropType} from "vue";
import {Todo} from "@/types/todoTypes";

const props = defineProps({
  todoItem: {
    type: Object as PropType<Todo>,
    required: true
  },
  index: {
    type: Number,
  }
});

const emit = defineEmits(['remove', 'toggle']);

function removeItem() {
  emit('remove', props.index);

}

function toggleItem() {
  emit('toggle', props.todoItem, props.index);
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