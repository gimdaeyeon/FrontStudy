import styled from "styled-components";
import { useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { INSERT_TODO } from "../reducer/todo";

const TodoForm = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todo);
  /*
  rootReducer 설정 (reducer들을 combine)
  => 리덕스 설정에서 store에 매개변수로 전달 (저장소에 저장)
  => Provider에 store를 전달

  => useSelector( () 결과값으로 reducer에서 만든 모든 state들이 전달되고
  그 중에서 하위선택자를 이용해 내가 원하는 reducer의 state를 가지고 올 수 있다

  */


  const [todo, setTodo] = useState("");
  const input = useRef(null);

  const onChangeTodo = useCallback(
    (e) => {
      setTodo(e.target.value);
    },
    [setTodo]
  );

  // onAddState 구현하기
  const onAddState = useCallback(() => {
    dispatch({
      type: INSERT_TODO,
      data: {
        id: state.length > 0 ? state[state.length - 1].id + 1 : 1,
        todo: todo,
      },
    });
    setTodo("");
    input.current.focus();
  }, [dispatch, state, todo]);

  return (
    <div>
      <Todoaddinput
        type="text"
        placeholder="할 일을 적어주세요"
        onChange={onChangeTodo}
        value={todo}
        ref={input}
      />
      <TodoButton onClick={onAddState}>추가</TodoButton>
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
