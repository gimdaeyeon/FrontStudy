import Viewer from "./components/Viewer.jsx";
import Controller from "./components/Controller.jsx";
import "./App.css"
import {useEffect, useState} from "react";

function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    useEffect(() => {
        console.log(`count: ${count}`);
        console.log(`input: ${input}`);
    }, [count,input]);
    // 의존성 배열
    // dependency array -> deps

    const onClickButton = (value)=>{
        setCount(count + value);
    }

    return (
        <div className="app">
            <h1>Simple Counter</h1>
            <section>
                <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
            </section>
            <section>
                <Viewer count={count}/>
            </section>
            <section>
                <Controller onClickButton={onClickButton}/>
            </section>
        </div>
    )
}

export default App
