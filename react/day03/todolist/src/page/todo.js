import TodoForm from "../components/todoForm";
import TodoList from "../components/todoList";
import TodoTitle from "../components/todoTitle";

// 컴포넌트의 시작명은 대문자 (이유는 훅 함수가 사용되기 위해서)
const Todo = ()=>{
  return (
    <>
    <TodoTitle/>
    <TodoForm/>
    <TodoList/>
    </>
  );
}

export default Todo

