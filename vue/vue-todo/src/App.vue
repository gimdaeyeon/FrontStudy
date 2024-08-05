<template>
  <div>
    <TodoHeader />
    <TodoInput @addTodoItem="addOneItem" />
    <TodoList :propsdata="todoItems" 
    @removeItem="removeOneItem" @toggleItem="toggleOneItem" />
    <TodoFooter @clearAll="clearAllItems" />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  components: {
    TodoHeader,
    TodoList,
    TodoInput,
    TodoFooter,
  },
  data() {
    return {
      todoItems: []
    }
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
  methods:{
    addOneItem(todoItem){
      let obj={completed: false, item: todoItem};
      localStorage.setItem(todoItem,JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem,index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(todoItem,index){
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item,JSON.stringify(todoItem)); 
    },
    clearAllItems(){
      localStorage.clear();
      this.todoItems = [];
    }
  }
};
</script>

<style>
  body{
    text-align: center;
    background-color: #f6f6f6;
  }

  input{
    border-style: groove;
    width: 200px;
  }

  button{
    border-style: groove;
  }

  .shadow{
    box-shadow: 5px 10px 10px rgba(0, 0, 0,0.03);
  }

</style>
