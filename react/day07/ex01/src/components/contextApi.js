import { useContext, useEffect,useCallback } from "react";
import AddState from "./addState";
import { Context, REMOVE_STATE } from "../reducer/context";
import { styled } from "styled-components";

const ContextAPI = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const onRemoveState = useCallback((id)=>{
    dispatch({
        type: REMOVE_STATE,
        id : id
    });
  },[state]); 

  return (
    <>
      {state.map((item) => (
        <div key={item.id}>
          {item.id}. {item.name}
          <DeleteButton onClick={()=>onRemoveState(item.id)}
            value={item.id}>
            삭제
            </DeleteButton>
        </div>
      ))}
      <AddState />
    </>
  );
};

export default ContextAPI;

const DeleteButton = styled.button`
  margin: 5px;
  background-color: skyblue;
  border-color: white;
  color: white;
  &:hover {
    background-color: red;
  }
`;
