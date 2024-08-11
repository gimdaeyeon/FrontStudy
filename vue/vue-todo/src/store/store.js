import { createStore } from "vuex";

const storage = {
  fetch() {
    const arr = [];

    if (localStorage.length <= 0) return;
    for (let i = 0; i < localStorage.length; i++) {
      // this.todoItems.push(localStorage.key(i));
      arr.push(
        JSON.parse(localStorage.getItem(localStorage.key(i)))
      );
    }
    return arr; 
  },
};

export const store = createStore({
  state: {
    todoItems: storage.fetch(),
  },
});
