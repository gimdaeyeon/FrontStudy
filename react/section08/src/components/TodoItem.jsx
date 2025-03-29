import React from 'react';
import './TodoItem.css'

const TodoItem = ({todo, onChangeDone, onRemoveTodo}) => {

    const changeDone = ()=>{
        onChangeDone(todo.id,!todo.isDone);
    }

    const onRemove = ()=>{
        onRemoveTodo(todo.id);
    }

    return (
        <div className="TodoItem">
            <input type="checkbox" checked={todo.isDone} onChange={changeDone}/>
            <div className="content">{todo.content}</div>
            <div className="date">{todo.date}</div>
            <button onClick={onRemove}>삭제</button>
        </div>
    );
};

export default TodoItem;