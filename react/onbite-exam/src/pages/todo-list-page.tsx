import TodoEditor from "@/components/todo-list/todo-editor.tsx";
import TodoItem from "@/components/todo-list/todo-item.tsx";

const dummyTodos = [
    {id:1, content:"할일1"},
    {id:2, content:"할일2"},
    {id:3, content:"할일3"},
]

export default function TodoListPage() {
    return (
        <div className="flex flex-col gap-5 p-5">
            <h1 className="font-bold text-2xl">Todo List</h1>
            <TodoEditor/>
            {dummyTodos.map(todo=>(
                <TodoItem key={todo.id} {...todo}/>
            ))}
        </div>
    )
}