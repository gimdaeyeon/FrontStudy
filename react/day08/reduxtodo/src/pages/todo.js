import TodoForm from "../components/todoForm";
import TodoList from "../components/todoList";
import TodoTitle from "../components/todoTitle";
import { useSelector } from "react-redux";

// 컴포넌트의 시작명은 대문자 (이유는 훅 함수가 사용되기 위해서)
const Todo = ()=>{

  const state = useSelector((state)=>state.todo);

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
        state={v}
      />

    ))}
    </>
  );
}

export default Todo;

