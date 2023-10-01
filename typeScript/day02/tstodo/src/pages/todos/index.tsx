import { FC, useEffect, useState } from "react";
import TodoInput from "./component/Input/Input";
import TodoList from "./component/List/List";
import { Todo } from "types/api/todo.types";

type TodopageProps = {
  isactive? :boolean;
}


const TodosPage : FC <TodopageProps>= ({isactive}):JSX.Element => {

  // const [todos,setTodos]  = useState<Todo[]>([]);

  // useEffect(()=>{
  //   TodoApi.getListAll().then((res)=>{
  //       setTodos(res.data.data);
  //   }).catch((err)=>{
  //       console.error(err);
        
  //   })
  // })



  return (
    <>
      <TodoList />
      <TodoInput />
    </>
  );
};

export default TodosPage;
