import { useState } from "react";

const AddState = ({onClickEvent,stateId,resetEvent}) => {

  const [name, setName] = useState('');

  const onChangeInput = (e)=>{
    setName(e.target.value);
    // useState의 변수를 바꿔주는 함수는 비동기 함수이다.
    console.log(name);
    // 따라서 여기서 콘솔을 찍을 때는 지금 현재 바뀐 값이 지정이 되지 않는다.
  }
  
  const onAddStateHandler = ()=>{
    onClickEvent(++stateId, name);
    setName('');

  }

const onResetHandler = ()=>{
  resetEvent();
  stateId = 0;
}


  return (
    <>
      <input 
        id="input"
        type="text"
        placeholder="이름을 입력하세요"
        onChange={onChangeInput}
        value={name}
      />
      <button onClick={onAddStateHandler}>추가</button>
      <button onClick={onResetHandler}>초기화</button>
    </>
  );
};

export default AddState;
