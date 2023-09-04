import styled from "styled-components";
import { useState, useCallback } from "react";

const TodoForm = ({ onAddHandler, id }) => {
  const [todo, setTodo] = useState("");

  const onAddState = useCallback(() => {
    onAddHandler(++id, todo);
    setTodo("");
  }, [id, onAddHandler, todo]);

  const onChangeTodo = useCallback((e) => {
    setTodo(e.target.value);
  },[setTodo]);

  // 엔터키 이벤트
// const onAddKeypress = useCallback((e) => {
//   if(e.code==='Enter'){
//     onAddHandler(++id, todo);
//     setTodo("");
//   }
// }, [id, onAddHandler, todo]);

  return (
    <div>
      <Todoaddinput 
      type="text" 
      placeholder="할 일을 적어주세요" 
      onChange={onChangeTodo}
      value={todo}
      // onKeyUp={onAddKeypress}
      />
      <TodoButton onClick={onAddState}
        
      >추가</TodoButton>
    </div>
  );
};

export default TodoForm;

const Todoaddinput = styled.input`
  border-radius: 5px;
  width: 500px;
  font-size: 32px;
  position: relative;
  padding-left: 20px;
`;

const TodoButton = styled.button`
  border-radius: 5px;
  width: 53px;
  height: 43px;
  position: absolute;
  cursor: pointer;
`;
