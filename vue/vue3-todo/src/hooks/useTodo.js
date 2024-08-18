import { ref} from "vue";

function useTodo(){

    const todoItems = ref([]);


    function fetchTodos() {
        const result = [];
        for (let i = 0; i < localStorage.length; i++) {
            const todoItem = localStorage.key(i);
            result.push(todoItem);
        }
        return result;
    }

    // 라이프 사이클 API


    function addTodoItem(todo) {
        todoItems.value.push(todo);
        localStorage.setItem(todo, todo);
    }


    return {todoItems,fetchTodos,addTodoItem}
}

export {useTodo}