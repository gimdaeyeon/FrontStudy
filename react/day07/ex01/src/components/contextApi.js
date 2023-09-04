import { useContext, useEffect } from "react";
import AddState from "./addState";
import { Context } from "../reducer/context";

const ContextAPI = () => {

  const {state,dispatch} = useContext(Context);

  useEffect(()=>{
    console.log(state);
  },[state]);
  

  return (
    <>
      <div>
        <button>삭제</button>
      </div>
      <AddState />
    </>
  );
};

export default ContextAPI;
