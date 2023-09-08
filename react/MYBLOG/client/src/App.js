import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Sign from './pages/sign';


// 강의 시간 1:33:00
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={"/"}  element={<Home/>}/>
          <Route path={"/login" } element={<Login/>}  />
          <Route path={"/sign"} element={<Sign/>}  />
        </Routes>
  </BrowserRouter>
  );
}

export default App;
