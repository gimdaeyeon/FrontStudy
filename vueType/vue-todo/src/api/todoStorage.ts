import {Todo} from "@/types/todoTypes";

const STORAGE_KEY = 'vue-todo-ts-v1'

const storage = {
    save(todoItems: Todo[]){
        const parsed = JSON.stringify(todoItems)
        localStorage.setItem(STORAGE_KEY,parsed);
    },
    fetch():Todo[] {
        const todoItems = localStorage.getItem(STORAGE_KEY) || '[]';
        return JSON.parse(todoItems);
    },
}

export default storage;
