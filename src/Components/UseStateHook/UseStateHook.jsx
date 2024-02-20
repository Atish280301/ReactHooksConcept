import React, { useState } from "react";
import '../Styles/UseStateHook.css';
const UseStateHook = () => {
    const [num, setNum] = useState(0);
    const UP = () => {
        setNum(prevNum => prevNum + 1)
    }
    const DOWN = () => {
        setNum(prevNum => prevNum - 1)
    }
    return (
        <>
            <h1 className="H1">useState Hook In React JS</h1>
            <p className="P">
                The useState hook in React is a function that allows functional components to manage local state. It takes an initial state value as an argument and returns an array containing the current state value and a function to update that value.
            </p>
            <div className="USH">
                <button className="BTN" onClick={UP}>+</button>
                <h2>{num}</h2>
                <button className="BTN" onClick={DOWN}>-</button>
            </div>
        </>
    );
}
export default UseStateHook;