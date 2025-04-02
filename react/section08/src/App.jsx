import './App.css'
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import {useRef, useState} from "react";
import Exam from "./components/Exam.jsx";

const mockData = [
    {
        id: 0,
        isDone: false,
        content: 'React 공부하기',
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: 'Vue 공부하기',
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: 'Spring 공부하기',
        date: new Date().getTime(),
    }
]

function App() {
    const [todos, setTodos] = useState(mockData);
    const idRef = useRef(3);

    const onCreate = (content) => {
        const newTodo = {
            id: idRef.current++,
            isDone: false,
            content,
            date: new Date().getTime(),
        }
        setTodos([newTodo, ...todos]);
    }
    const onUpdate = (targetId) => {
        setTodos(todos.map(todo =>
            todo.id === targetId
                ? {...todo, isDone: !todo.isDone}
                : todo
        ));
    }

    const onDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div className="App">
            <Exam/>
            {/*<Header/>*/}
            {/*<Editor*/}
            {/*    onCreate={onCreate}*/}
            {/*/>*/}
            {/*<List todos={todos}*/}
            {/*      onUpdate={onUpdate}*/}
            {/*      onDelete={onDelete}*/}
            {/*/>*/}
        </div>
    )
}

export default App
