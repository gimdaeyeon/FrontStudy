import {useReducer,useCallback} from "react";
import { reducer } from "../reducer";

const Reducer = () => {
  const initialState = 0;
  const [number, dispatch] = useReducer(reducer,initialState);

  const onIncrement = useCallback(()=>{
    dispatch({
      type:'INCREMENT',
    })
  },[]);
  
  const onDecrement = useCallback(()=>{
    dispatch({
      type:'DECREMENT',
    })
  },[]);


  return (
    <div>
      <p>{number}</p>      
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

export default Reducer;

/*
useReducer(내가 만든 reducer로직, 밖에서 로직을 관리할 변수)
==> reducer(state, action) -- state에 이 변수 값을 전달해주고
변수를 스테이트로 변환

리턴 값으로
[변환 받을 스테이트명, dispatch]
dipatch = 전달 매개체 action값(reducer에서 데이터) 전달
 */



