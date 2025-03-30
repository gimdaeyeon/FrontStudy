import React, {useState} from 'react';
import './List.css';
import TodoItem from "./TodoItem.jsx";

const List = ({todos, onChangeDone, onRemoveTodo}) => {
    const [search, setSearch] = useState('');

    const onChangeSearch = (e)=>{
        setSearch(e.target.value);
    }

    const getFilteredData = ()=>{
        if(!search){
            return todos;
        }
        return todos.filter(todo=>
            todo.content
                .toLowerCase()
                .includes(search.toLowerCase()));
    }

    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <input placeholder="검색어를 입력하세요" onChange={onChangeSearch} />
            <div className="todos_wrapper">
                { getFilteredData().map(todo=><TodoItem
                    key={todo.id}
                    {...todo}
                    onChangeDone={onChangeDone}
                    onRemoveTodo={onRemoveTodo}
                />) }
            </div>
        </div>
    );
};

export default List;