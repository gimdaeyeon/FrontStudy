import { useDispatch } from "react-redux";
import {  REMOVE_TODO } from "../reducer/todo";
import { useCallback } from "react";


const TodoList  = ({state})=>{

  const dispatch = useDispatch();

  const onRemoveClick = useCallback((e)=>{

    dispatch({
      type : REMOVE_TODO,
      data : {
        id : state.id,
      }
    })
  },[dispatch, state.id]);

  return (
    <div>
        {state.id}. {state.todo} 
        <button onClick={onRemoveClick}
          value={state.id}
        >완료</button>
    </div>
  );
}

export default TodoList;