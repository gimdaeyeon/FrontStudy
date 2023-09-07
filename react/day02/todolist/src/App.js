import "./App.css";
import Todo from "./page/todo";
import axios from 'axios';

// 개발자가 만든 컴포넌트들의 상위 파일
// url 명시 -- react- router -dom
// 화면에 App.js가 보여지는 것
// 정확히 말하면index.html이 보여지는데, index.js가  index.html의
// root 라는 <div>에 app.js의 return을 보여주는 것

// fetchTest();
// function fetchTest(){
//   fetch('http://openapi.seoul.go.kr:8088/786e44785864656334354e61496a76/json/TbAdpWaitAnimalView/1/3/')
//     .then(response => response.json())
//     .then(data => printData(data))
//     .catch(error => console.log('Error:', error));
// }

// axiosTest()
// function axiosTest(){
//   axios.get('http://openapi.seoul.go.kr:8088/786e44785864656334354e61496a76/json/TbAdpWaitAnimalView/1/3/')
//   .then(response => {
//     console.log('axios 사용');
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.log('Error:', error);
//   });
// }

// function printData(data){
//   console.log(data);
// }

function App() {
  return (
    <>
      <Todo />
    </>
  );
}

export default App;
