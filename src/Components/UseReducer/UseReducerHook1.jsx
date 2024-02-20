import React, { useReducer } from "react";
const reducer = (state, action) => {
    switch (action.type) {
        case 'Toggle' : 
            return !state;
        default : 
            return state;
    }
}
const UseReducerHook1 = () => {
    const [isToggled, dispatch] = useReducer(reducer, false);
    return (
        <>
            <div className="USH">
                <p style={{"margin" : "10px"}}>{ isToggled ? 'Toggled On' : 'Toggled Off'}</p>
                <button onClick={() => dispatch({ type: 'Toggle' })}>Toggle</button>
            </div>
        </>
    );
}
export default UseReducerHook1;