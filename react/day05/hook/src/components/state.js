import { useState } from "react";
import AddState from "./addState";

const State = () => {
  // const[변수명, 변수 값을 바꿔줄 함수명] = useState(변수의 기본값)
  // setState("값")-->변수의 값이 바뀜
  const[state, setState] = useState(`첫번째 시작하는 state`);

  // const onChangeText = ()=>{
  //     setState(`두번째 시작하는 state`);
  // }

  // state의 불변성 (state의 값이 객체나 배열일 때)

  /*
    const obj1 ={}
    const obj2 ={}

    obj === obj2  (T/F ?)
    const obj3 = obj // obj3와 obj가 같은 참조 값을 가진다.

    따라서, obj가 가지고 있는 객체값이 변경되면 obj3도 같은 객체를 가지기 때문에
    값이 변경된다. 즉, 원본 데이터의 훼손, 이러한 훼손은 예상치 못한 오류와 버그를
    일으킬 가능서이 크다 (참조 오류)

    <얕은 복사의 에러를 해결하기 위해 깊은 복사를 실현>

    1. spread operator (...)
    2. const a = state -->  a의 변조과정 --> setState(a)
    3. immerJs와 같은 라이브러리를 이용 (리덕스)

    const[state, setState] = [
      {
        id : 1,
        name : "길동이"
      },
      {
        id : 2,
        name : "말동이"
      },
      {
        id : 3,
        name : "개동이"
      },
    ]

    해당 객체가 state의 값이라면
    이 배열에 id : 4, name: "신민석"이라는 객체의 값을 추가하려면 어떻게 해야할까?
    단 렌더링이 일어나한다.

    1. setState([...state,{id : 4, name: "신민석"}]);

    2. const arr = state;
        arr.push = {id : 4, name: "신민석"};
        setState(arr);
   */

        const [userList, setUserList] = useState([
          {
            id : 1,
            name : "길동이"
          },
          {
            id : 2,
            name : "말동이"
          },
          {
            id : 3,
            name : "개동이"
          }
        ]);

        const onClickEvent = (isValue, nameValue) =>{
          setUserList([...userList,{id:isValue,name:nameValue}])
        };

/*
***
백엔드에서 받아오는 데이터의 형식의 대부분은 배열인 경우가 많다
따라서 이러한 배열들을 화면에 보여주기 위해 사용하는 함수
==> 배열일 경우에만 사용가능

1. map
[반복문, 한줄 씩 읽어오는 것]
=> 주로 배열의 길이마큼 반복할 때 사용

ex1)
배열명.map((결과값 변수명) =>(실행문))

ex2)
userList.map((v) => console.log(v.id))  //1,2,3

ex3) Html 반복의 경우
userList.map((v) =>(
  <div>
      <div><div>
  <div>
))


2. find/findIndex
  [검색, 조건에 맞는 데이터를 읽어오는 것]
  => 주로 배열 내에서 조건식을 만족하는 값/인덱스를 찾아올 때 사용

  ex)
  배열명.find((결과값 변수명)=>조건식)

  ex)
  userList.find((v)=>v.id===1).name // 김대연

  ex)
  userList.findIndex((v)=> v.id ===1 ) // 0 (객체 반환x 인덱스번호 반환)
  userList[0].name

3. filter
  [거름망, 조건에 맞는 데이터를 제외하고 읽어오는 것]
  => 삭제 시에 백엔드에서 받아온 데이터가 있음.

  ex)
  배열명.filter((결과값 변수명)=> 조건식)


*/


  return (
    <>
      {userList.map((v)=>(
          <div>
              {v.id}.{v.name} 
              <button>삭제</button>
            </div>
          ))}

          <AddState 
            onClickEvent={onClickEvent}
            stateId = {userList.length>0 && userList[userList.length-1].id}
          />
      </>
  );
};

export default State;