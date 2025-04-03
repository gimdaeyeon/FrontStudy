import React, {useMemo, useState} from 'react';
import './List.css';
import TodoItem from "./TodoItem.jsx";

const List = ({todos, onUpdate, onDelete}) => {
    const [search, setSearch] = useState('');

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilteredData = () => {
        if (!search) {
            return todos;
        }
        return todos.filter(todo =>
            todo.content
                .toLowerCase()
                .includes(search.toLowerCase()));
    }

    const {totalCount, doneCount, notDoneCount} = useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter(todo => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return {
            totalCount,
            doneCount,
            notDoneCount,
        }
    }, [todos]);
    // 의존성 배열 : deps


    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <div>
                <div>total: {totalCount}</div>
                <div>done: {doneCount}</div>
                <div>notDone: {notDoneCount}</div>
            </div>
            <input placeholder="검색어를 입력하세요" onChange={onChangeSearch}/>
            <div className="todos_wrapper">
                {getFilteredData().map(todo => <TodoItem
                    key={todo.id}
                    {...todo}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />)}
            </div>
        </div>
    );
};

export default List;