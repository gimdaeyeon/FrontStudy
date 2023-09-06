import { useState, useCallback } from 'react';
import { useRef } from 'react';

const TodoForm = ({state,onAddState}) => {

  const [todo, setTodo] = useState('');
  const newTodo = useRef(null);  

  const onChangeInput = useCallback(()=>{
      setTodo(newTodo.current.value);
  },[]);

  const onResetInput = useCallback(()=>{
    setTodo('');
    newTodo.current.focus();
  },[])

  const onAddHandler = useCallback(()=>{
      onAddState({
         id: state.length >0 ? state[state.length-1].id+1:1,
         todo: todo});
      setTodo('');
      newTodo.current.focus();
  },[onAddState, state, todo]);

  return (
    <div>
        <input
          ref={newTodo}
          value={todo}
          onChange={onChangeInput}
        />
        <button onClick={onAddHandler}>등록</button>
        <button onClick={onResetInput}>초기화</button>
    </div>
  );
};

export default TodoForm;    