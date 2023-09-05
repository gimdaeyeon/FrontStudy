import { useDispatch,useSelector } from "react-redux";
import { INSERT_TODO, REMOVE_TODO } from "../reducer/todo";
import { useCallback } from "react";


const TodoList  = ({item})=>{

  const dispatch = useDispatch();
  const state = useSelector((state)=>state.todo);

  const onRemoveClick = useCallback((e)=>{

    console.log(state);
    dispatch({
      type : REMOVE_TODO,
      data : {
        id : item.id,
      }
    })
  },[state]);

  return (
    <div>
        {item.id}. {item.todo} 
        <button onClick={onRemoveClick}
          value={state.id}
        >완료</button>
    </div>
  );
}

export default TodoList;