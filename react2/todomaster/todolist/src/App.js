import "./App.css";
import Layout from "./components/Layout";
import MainPage from "./pages/main";
import TodoPage from "./pages/todo";
import router from "./routes/routing";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

function App() {
  return (
    <RouterProvider router={router}  />
    // <BrowserRouter>
    //   {/* HTML5를 지원하는 브라우저의 URL의 변화를 감지 */}
    //   <Routes>
    //     {/* 하위에 있는 Route 컴포넌트 중 url과 path가 일치하는 컴포넌트만 보여주는 역할 */}
    //     <Route element={<Layout/>} >
    //       <Route path="/" element={<MainPage />} />
    //       <Route path="/todo/:todoId" element={<TodoPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    /*
      BrowserRouter (URL 감지) - > Routes(하위에 route 중에 경로에 맞는 컴포넌트를 보여주는 역할)
      outlet --> routes에 의해 가지고 와진 컴ㅍ포넌트를 outlet으로 가지고 올 수 있다.
    */
  );
}

export default App;
