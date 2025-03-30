import React from 'react';
import './TodoItem.css'

const TodoItem = ({id,isDone,date, content, onChangeDone, onRemoveTodo}) => {

    const changeDone = ()=>{
        onChangeDone(id,!isDone);
    }

    const onRemove = ()=>{
        onRemoveTodo(id);
    }

    return (
        <div className="TodoItem">
            <input type="checkbox" checked={isDone} onChange={changeDone}/>
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onRemove}>삭제</button>
        </div>
    );
};

export default TodoItem;