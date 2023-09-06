import "./App.css";
import Todo from "./page/todo";

// 개발자가 만든 컴포넌트들의 상위 파일
// url 명시 -- react- router -dom
// 화면에 App.js가 보여지는 것
// 정확히 말하면index.html이 보여지는데, index.js가  index.html의
// root 라는 <div>에 app.js의 return을 보여주는 것

function App() {
  return (
    <>
      <Todo />
    </>
  );
}

export default App;
