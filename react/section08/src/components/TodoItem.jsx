import React from 'react';
import './TodoItem.css'

const TodoItem = ({id,isDone,date, content, onUpdate, onDelete}) => {

    const onChangeCheck = ()=>{
        onUpdate(id);
    }

    const onCLickDeleteButton = ()=>{
        onDelete(id);
    }

    return (
        <div className="TodoItem">
            <input type="checkbox" checked={isDone} onChange={onChangeCheck}/>
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onCLickDeleteButton}>삭제</button>
        </div>
    );
};

export default TodoItem;