import styled from "styled-components";
import { useState, useCallback } from "react";

const TodoForm = ({ onAddHandler, id }) => {
  const [todo, setTodo] = useState("");

  // 추가 버튼을 클릭하면 todo안에 있는 내용과
  // 추가될 id값을 onAddHandler에 넘겨줘
  // 리스트를 추가하고 todo를 다시 빈 값으로 변경해주는 함수
  const onAddState = useCallback(() => {
    onAddHandler(++id, todo);
    setTodo("");
  }, [id, onAddHandler, todo]);

  // 인풋태그의 값이 바뀔 때마다 그 값으로
  // todo(state)의 값도 변경해주는 함수
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


