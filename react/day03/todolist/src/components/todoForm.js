import styled from "styled-components";

const TodoForm = ()=>{
  return (
    <div>
        <Todoaddinput type="text" placeholder="할 일을 적어주세요"/>
        <TodoButton>추가</TodoButton>
    </div>
  );
}

export default TodoForm;

const Todoaddinput = styled.input`
  border-radius: 5px;
  width  :500px ;
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

