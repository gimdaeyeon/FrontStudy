import TodoForm from "../components/todoForm";
import TodoList from "../components/todoList";
import TodoTitle from "../components/todoTitle";
import { useState, useCallback } from 'react';

/*
컴포넌트 랜더 함수의 기본형태
const 컴포넌트명 = () => {
  js, jsx문법(hook)

  return (
    html
  )
}

export default 밖에서 사용할 이름(컴포넌트 명)
*/
const Todo = ()=>{
  // 랜더함수 시작

  const [state, setState] = useState([
    {
      id :1,
      todo : '리액트 공부하기'
    },
    {
      id :2,
      todo : 'java 공부하기'
    },
    {
      id :3,
      todo : 'js 공부하기'
    },
  ]);

  const onAddState = useCallback((item)=>{
      setState([...state,{id: item.id, todo: item.todo}]);
  },[state]);

  const onRemoveState = useCallback((id)=>{
    setState(state.filter((item)=>item.id !== id));
  },[state]);

  return  (
    <>
      <TodoTitle number={state.length}/>
      <TodoForm
        state={state}
        onAddState={onAddState}
      />
      {state.map((v)=>(
        <TodoList 
          key={v.id}
          state={v}
          onRemoveState={onRemoveState}
          />
      ))}


    </>
  );

};

export default Todo;