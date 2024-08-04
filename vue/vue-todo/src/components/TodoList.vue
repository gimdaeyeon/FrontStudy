<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" :key="todoItem.item" class="shadow">
        <i
          class="fa-solid fa-check checkBtn"
          :class="{ checkBtnCompleted: todoItem.completed }"
          @click="toggleComplete(todoItem,index)"
        ></i>
        <span :class="{ textCompleted: todoItem.completed }">{{
          todoItem.item
        }}</span>
        <span class="removeBtn" @click="removeTodo(todoItem, index)">
          <i class="fa-solid fa-trash-can"></i>
        </span>
      </li>
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
      // this.todoItems.push(localStorage.key(i));
      this.todoItems.push(
        JSON.parse(localStorage.getItem(localStorage.key(i)))
      );
    }
  },
  methods: {
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleComplete(todoItem) {
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item,JSON.stringify(todoItem)); 
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 10px;
  cursor: pointer;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: red;
  cursor: pointer;
}
</style>
