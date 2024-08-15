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

const state = {
    todoItems:storage.fetch(),
};

const getters={
    storedTodoItems(state){
        return state.todoItems
    }

}

const mutations={
    addOneItem(state,todoItem){
        let obj={completed: false, item: todoItem};
        localStorage.setItem(todoItem,JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    removeOneItem(state, todoObj){
        localStorage.removeItem(todoObj.todoItem.item);
        state.todoItems.splice(todoObj.index, 1);
    },
    toggleOneItem(state,todoObj){
        state.todoItems[todoObj.index].completed =
            !state.todoItems[todoObj.index].completed;
        localStorage.removeItem(todoObj.todoItem.item);
        localStorage.setItem(todoObj.todoItem.item,JSON.stringify(todoObj.todoItem));
    },
    clearAllItems(state){
        localStorage.clear();
        state.todoItems = [];
    },
}

export default {
    state,
    getters,
    mutations,
}