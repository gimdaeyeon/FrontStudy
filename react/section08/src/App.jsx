import './App.css'
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import {createContext, useCallback, useReducer, useRef} from "react";

const mockData = [
    {
        id: 0,
        isDone: false,
        content: 'React 공부하기',
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: 'Vue 공부하기',
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: 'Spring 공부하기',
        date: new Date().getTime(),
    }
]

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return [action.data, ...state];
        case 'UPDATE':
            return state.map(i => i.id !== action.targetId ? i : {...i, isDone: !i.isDone});
        case 'DELETE':
            return state.filter(i => i.id !== action.targetId);
        default:
            return state;
    }
}

export const TodoContext = createContext();

function App() {
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = useCallback((content) => {
        dispatch({
            type: 'CREATE',
            data: {
                id: idRef.current++,
                isDone: false,
                content,
                date: new Date().getTime(),
            }
        })
    }, []);

    const onUpdate = useCallback((targetId) => {
        dispatch({
            type: 'UPDATE',
            targetId,
        });
    }, []);

    const onDelete = useCallback((targetId) => {
        dispatch({
            type: 'DELETE',
            targetId,
        });
    }, []);

    return (
        <div className="App">
            <Header/>
            <TodoContext.Provider value={{
                todos,
                onCreate,
                onUpdate,
                onDelete,
            }}>
                <Editor />
                <List />
            </TodoContext.Provider>
        </div>
    )
}

export default App
