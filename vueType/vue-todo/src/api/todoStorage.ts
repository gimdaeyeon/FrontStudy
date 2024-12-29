const STORAGE_KEY = 'vue-todo-ts-v1'

const storage = {
    save(todoItems: any[]){
        const parsed = JSON.stringify(todoItems)
        localStorage.setItem(STORAGE_KEY,parsed);
    },
    fetch() {
        const todoItems = localStorage.getItem(STORAGE_KEY) || '[]';
        return JSON.parse(todoItems);
    },
}

export default storage;
