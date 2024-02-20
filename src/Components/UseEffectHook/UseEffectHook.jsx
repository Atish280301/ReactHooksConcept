import React, { useEffect, useState } from "react";
const UseEffectHook = () => {
    const [val, setVal] = useState(0);
    const [val1, setVal1] = useState(0);
    useEffect(()=>{
        alert("You Clicked The Button!")
    },[val]); //[] is for only first time when you refresh the page
    useEffect (()=>{
        document.title = `Value IS ${val1}`;
    },[val1]);
    return (
        <>
            <h1 className="H1">useEffect Hook In React JS</h1>
            <p className="P">
                useEffect  is a hook provided by React, you tell React that your component needs to do something after render. React will remember the function you passed we'll refer to it as our effect, and call it later after performing the DOM updated. By default it runs both after the first render and after every update.The useEffect hook in React is a special addition to the component lifecycle. instead of thinking in terms of "mounting" and "updating" you might find it easier to think that effects happen after render. React gurantees the DOM has been updated by the time it runs the effects.
            </p>
            <h4 style={{"margin":"20px"}}>
                if you are familiar with react class lifecycle method you can think of useEffect hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
            </h4>
            <button onClick={() => setVal(val + 1)} className="BTN" style={{"display":"block", "margin" : "5px auto"}}>Click Here! {val}</button>
            <button onClick={() => setVal1(val1 + 1)} className="BTN" style={{"display":"block", "margin" : "5px auto"}}>Click Here! {val1}</button>
        </>
    );
}
export default UseEffectHook;