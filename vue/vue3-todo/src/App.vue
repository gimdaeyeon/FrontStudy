<template>
  <TodoHeader/>
  <TodoInput/>
<!--  TodoList-->
</template>

<script>

import TodoHeader from "@/components/TodoHeader.vue";
import TodoInput from "@/components/TodoInput.vue";

export default {
  components: {
    TodoInput,
    TodoHeader,

  }

}
</script>

<style lang="scss" scoped>

</style>