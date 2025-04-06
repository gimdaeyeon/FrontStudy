import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import React, {useReducer} from "react";
import Notfound from "./pages/Notfound";
import Button from "./components/Button";
import Header from "./components/Header";
import Edit from "./pages/Edit";

const mockData = [
    {
        id: 1,
        createdDate: new Date().getTime(),
        emotionId: 1,
        content: "1번 일기 내용",
    },
    {
        id: 2,
        createdDate: new Date().getTime(),
        emotionId: 2,
        content: "2번 일기 내용",
    },
]

function reducer(state,action){
    return state;
}


function App() {
    const [data, dispatch] = useReducer(reducer,mockData);
    return (
        <>
            <Header title={"Header"}
                leftChild={<Button text={"<"}/>}
                rightChild={<Button text={">"}/>}
            />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/diary/:id" element={<Diary/>}/>
                <Route path="/edit/:id" element={<Edit/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>
        </>
    )
}

export default App
