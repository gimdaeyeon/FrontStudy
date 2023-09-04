import { useState,useRef } from "react";

const AddState = ({onClickEvent,stateId,resetEvent}) => {

  const [name, setName] = useState('');
  // const 사용자변수 =  useRef(null) 
  // 리액트에서 사용하는 일종의 빈공간
  // 여기안에는 html태그들도 담을 수 있다
  // 내가 담고싶은 곳에가서 ref={사용자변수}를 하게되면
  // 사용자변수.current 안에 해당 태그가 담기게 된다.

  const nameInput = useRef(null);

  const onChangeInput = (e)=>{
    setName(e.target.value);
    // useState의 변수를 바꿔주는 함수는 비동기 함수이다.

    // console.log(name);
    // 따라서 여기서 콘솔을 찍을 때는 지금 현재 바뀐 값이 지정이 되지 않는다.
  }
  
  const onAddStateHandler = ()=>{
    onClickEvent(++stateId, name);
    setName('');
    nameInput.current.focus();

  }

  // input안에 작성된 내용 최기화
  const onResetHandler = ()=>{
    setName('');
    nameInput.current.focus();

    // nameInput.current.sytle.display = 'none';
    // nameInput.current = domselector.(input);
  }

  // 전체 리스트 삭제
// const onResetHandler = ()=>{
//   resetEvent();
//   stateId = 0;
// }

const onEnterAddState = (e)=>{
  if(e.key === 'Enter'){
    onClickEvent(++stateId, name);
    setName('');
    alert(`${name}이/가 추가되었습니다`)
  }

}



  return (
    <>
      <input 
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        // 이벤트 객체를 받기 위해서는
        // 이벤트 함수속성 ={실행함수명}으로 실행해야한다.
        
        // 단, 이벤트객체 함수를 받지 않고 두가지 이상의 함수를 실행하고자 할 때는
        // 이벤트함수속성 = {()=>{함수1(), 함수2() } }
        // 으로 실행해야한다.

        onChange={onChangeInput}
        // onChange={()=>onChangeInput()}
        ref={nameInput}
        onKeyUp={onEnterAddState}
      />
      <button onClick={onAddStateHandler}>추가</button>
      <button onClick={onResetHandler} >초기화</button>
    </>
  );
};

export default AddState;
