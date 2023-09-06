
import { useCallback } from 'react';
const TodoList = ({state,onRemoveState}) => {


  const onRmoveHandler = useCallback((e)=>{
    onRemoveState(parseInt(e.target.value));
  },[onRemoveState]);

  return (
    <div>
      {state.id}. {state.todo}
      <button 
        value={state.id}
        onClick={onRmoveHandler}>완료</button>
    </div>
  );
};

export default TodoList;    