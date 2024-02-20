import React, { useRef } from "react";
const UseRefHook = () => {
    const name = useRef();
    const number = useRef();
    const SBMT = (e) => {
        e.preventDefault();
        let data1 = name.current.value;
        let data2 = parseInt(number.current.value);
        console.log(data1, data2);
    }
    return (
        <>
            <h1 className="H1">useRef Hook In React JS</h1>
            <p className="P">
                The useRef hook in React is used to create a mutable ref object whose .current property can hold a mutable value that persists across renders. It allows you to access DOM nodes or React elements directly within functional components, among other use cases.
            </p>
            <div className="USH">
                <input type="text" ref={name} />
                <input type="number" ref={number} />
                <button onClick={SBMT}>Submit</button>
            </div>
        </>
    );
}
export default UseRefHook;