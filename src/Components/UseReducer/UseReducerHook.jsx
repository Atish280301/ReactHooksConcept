import React, { useReducer } from 'react';
import UseReducerHook1 from './UseReducerHook1';
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};
const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <div>
            <h1 className="H1">useReducer Hook In React JS</h1>
            <p className="P">
                Syntax = useReducer(reducer function,  initial state); we call dispatch() in our code when we want to change state. We already have a reducer set up to do the legwork of changing the state. We just need to be able to trigger how to change it.
            </p>
            <p className="P">
                The useReducer hook in React is a more powerful alternative to useState when dealing with complex state logic in your components. It accepts a reducer function and an initial state, and returns the current state and a dispatch function to update the state based on actions dispatched to the reducer.
            </p>
            <div className='USH'>
                <p className='P'>Count: {state.count}</p>
                <button className='BTN' onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
                <button className='BTN' onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            </div>
            <UseReducerHook1 />
        </div>
    );
}
export default UseReducerHook;