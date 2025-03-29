import React from 'react';
import './List.css';
import TodoItem from "./TodoItem.jsx";

const List = ({todos, onChangeDone, onRemoveTodo}) => {
    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <input placeholder="검색어를 입력하세요"/>
            <div className="todos_wrapper">
                { todos.map(todo=>(<TodoItem
                    key={todo.id}
                    todo={todo}
                    onChangeDone={onChangeDone}
                    onRemoveTodo={onRemoveTodo}
                />)) }
            </div>
        </div>
    );
};

export default List;