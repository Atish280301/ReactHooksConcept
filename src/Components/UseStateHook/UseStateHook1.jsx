import React, { useState } from "react";
const UseStateHook1 = () => {
    const [name, setName] = useState("Lipun Kumar Sahu");
    const Click = () => {
        let val1 = name;
        val1 === "Lipun Kumar Sahu" ? 
            setName("Atish Kumar Sahu") : setName("Lipun Kumar Sahu");
    }
    return (
        <>
            <div className="USH">
                <p>{name}</p>
                <button className="BTN" onClick={Click}>Click Me!</button>
            </div>
        </>
    );
}
export default UseStateHook1;