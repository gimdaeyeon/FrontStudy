<template>
  <div>
    <transition-group name="list" tag="ul" >
      <li v-for="(todoItem, index) in this.storedTodoItems" :key="todoItem.item" class="shadow">
        <i
          class="fa-solid fa-check checkBtn"
          :class="{ checkBtnCompleted: todoItem.completed }"
          @click="toggleComplete({todoItem,index})"
        ></i>
        <span :class="{ textCompleted: todoItem.completed }">{{
          todoItem.item
        }}</span>
        <span class="removeBtn" @click="removeTodo({todoItem, index})">
          <i class="fa-solid fa-trash-can"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex';

export default {
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem',
      toggleComplete:'toggleOneItem'
    }),
  },
  computed:{
    ...mapGetters(['storedTodoItems']),
  }
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

.list-enter-active, .list-leave-active{
    transition: all 0.5s;
  }
  .list-enter-from, .list-leave-to{
    opacity: 0;
    transform: translateY(30px);
  }
</style>
