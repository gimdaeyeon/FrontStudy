<template>
  <TodoHeader/>
  <TodoInput/>
  <TodoList></TodoList>
</template>

<script>

import TodoHeader from "@/components/TodoHeader.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  components: {
    TodoList,
    TodoInput,
    TodoHeader,

  }

}
</script>

<style lang="scss" scoped>

</style>