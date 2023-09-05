import TodoForm from "../components/todoForm";
import TodoList from "../components/todoList";
import TodoTitle from "../components/todoTitle";
import { useState,useCallback } from 'react';
import { useDispatch,useSelector } from "react-redux";

// 컴포넌트의 시작명은 대문자 (이유는 훅 함수가 사용되기 위해서)
const Todo = ()=>{

  const dispatch = useDispatch();
  const state = useSelector((state)=>state.todo);

  // const onAddHandler = useCallback((id,todo)=>{
  //   setState([...state,{id: id, Todo: todo}]);

  // },[state]);
  
  // const onRemoveHandler = useCallback((id)=>{
  //   const removeState = state.filter((item)=>item.id !== id);
  //   setState(removeState);
  // },[state]);

  return (
    <>
    <TodoTitle state={state}/>
    <TodoForm 
    // onAddHandler={onAddHandler}
    id={state.length>0 && state[state.length-1].id}
    />
    {state.map((v)=>(
      <TodoList
        key={v.id}
        item={v}
      />

    ))}
    </>
  );
}

export default Todo;

