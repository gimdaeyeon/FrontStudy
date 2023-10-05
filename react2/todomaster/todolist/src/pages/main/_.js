import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('todoId'));

  const navigate = useNavigate(); 


  const onClickNavigateTodo = ()=>{
    // window.location.href = '/todo/3';
    // navigate(\-1);   // 이전화면으로 이동
    // navigate('/todo/3');
    setSearchParams({
      todoId:3,
      page: 5
    });
  }


  return (
    // <></>
    <React.Fragment>
      {/* 태그명이 없는 태그를 Fragment라고 부른다. 
      만약 해당 Fragment에 속성을 줄 경우 React.Fragment를 명시해준다.*/}
      <div>main</div>
      <div>:)</div>
      <button onClick={onClickNavigateTodo} >TodoPage로 이동</button>
      <a href="/todo/4">TodoPage</a>
      <p/>
      <Link to='/todo/6' >TodoPage</Link>
    </React.Fragment>
  );
};

export default MainPage;
