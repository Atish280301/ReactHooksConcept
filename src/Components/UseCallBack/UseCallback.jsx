import React, { useCallback, useState } from "react";
const UseCallback = () => {
    const [count, SetCount] = useState(0);
    // This function will be memoized and won't change unless count changes
    const HandleClick = useCallback(() => {
        SetCount(count + 1);
    }, [count]);

    //Example2
    const [Selectedtem, SetSelectedItem] = useState(null);
    const HandleItem = useCallback ((item) => {
        SetSelectedItem(item);
    }, []);
    const items = ["Apple", "Car", "Fan"];
    return (
        <>
            <h1 className="H1">UseCallBack Hook</h1>
            <p className="P">
                In React, the useCallback hook is used to memoize functions. It returns a memoized version of the callback function that only changes if one of the dependencies has changed. This is useful for optimizing performance in cases where a component re-renders frequently due to its parent re-rendering. This function will be memoized and won't change unless count changes.
            </p>
            <div className="USH">
                <p>Count: {count}</p>
                <button className="BTN" onClick={HandleClick}>click</button>
            </div>
            <div className="USH">
                <p style={{"margin" : "10px"}}>Selected Item: {Selectedtem}</p>
                <div className="USH">
                    {
                        items.map((item, index) => (
                            <button key={index} onClick={() => HandleItem(item)}>
                                {item}
                            </button>
                        ))
                    }
                </div>
            </div>
        </>
    );
}
export default UseCallback;