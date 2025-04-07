import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import React, {createContext, useReducer, useRef} from "react";
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

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return [action.data, ...state];
        case 'UPDATE':
            return state.map(item =>
                String(item.id) === String(action.data.id)
                    ? action.data
                    : item
            );
        case 'DELETE':
            return state.filter(item => String(item.id) !== String(action.id));
        default:
            return state;
    }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    // 새로운 일기 추가
    const onCreate = (emotionId, content) => {
        dispatch({
            type: 'CREATE',
            data: {
                id: idRef.current++,
                createdDate: new Date().getTime(),
                emotionId,
                content,
            }
        })
    }

    // 기존 일기 수정
    const onUpdate = (id, emotionId, content) => {
        dispatch({
            type: 'UPDATE',
            id, emotionId, content,
            createdDate: new Date().getTime(),
        })
    }
    // 기존 일기 삭제
    const onDelete = (id) => {
        dispatch({
            type: 'DELETE', id
        })
    }

    return (
        <>
            <Header title={"Header"}
                    leftChild={<Button text={"<"}/>}
                    rightChild={<Button text={">"}/>}
            />
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider value={{onCreate,onUpdate,onDelete}}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/new" element={<New/>}/>
                        <Route path="/diary/:id" element={<Diary/>}/>
                        <Route path="/edit/:id" element={<Edit/>}/>
                        <Route path="*" element={<Notfound/>}/>
                    </Routes>
                </DiaryDispatchContext.Provider>

            </DiaryStateContext.Provider>
        </>
    )
}

export default App
