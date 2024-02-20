import React, { useState } from "react";
const UseStateHook2 = () => {
    const Array = [
        { id: 1, name: "name1", age: 22, },
        { id: 2, name: "name2", age: 33, },
        { id: 3, name: "name3", age: 44, },
    ];
    const [mYArray, SetMyArray] = useState(Array);
    const Clear = () => {
        SetMyArray ([]);
    }
    return (
        <>
            <div style={{"display":"flex", "justifyContent":"center", "alignItems":"center"}}>
                {
                    mYArray.map((item, index) => {
                        return (
                            <div key={index} style={{"margin":"10px"}}>
                                <p>{item.name}---{item.age}</p>
                                <br />
                            </div>
                        );
                    }) 
                }
            </div>
            <button onClick={Clear} style={{"display":"block","margin":"0 auto"}}>clear</button>
        </>
    );
}
export default UseStateHook2;