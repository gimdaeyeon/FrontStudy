<template>
  <div>
    <ul>
      <li v-for="todoItem in todoItems" :key="todoItem">{{ todoItem }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoItems: [],
    };
  },
  created() {
    if (localStorage.length <= 0) return;

    for (let i = 0; i < localStorage.length; i++) {
      this.todoItems.push(localStorage.key(i));
    }
  },
};
</script>

<style lang="scss" scoped></style>
