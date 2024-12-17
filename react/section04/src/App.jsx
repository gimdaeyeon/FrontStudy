import './App.css'

import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button.jsx";

function App() {
    return (
        <>
            <Button text={"메일"} color={"red"}/>
            <Button text={"카페"} />
            <Button text={"블로그"} >
                <Header/>
            </Button>
        </>
    )
}

export default App
