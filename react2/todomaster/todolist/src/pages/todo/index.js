import React from "react";
import { useParams } from "react-router-dom";

const TodoPage = () => {

  const params = useParams();
  console.log(params);


  return (
    <>
      <div>Todo</div>
      <div>:)</div>
    </>
  );
};

export default TodoPage;
