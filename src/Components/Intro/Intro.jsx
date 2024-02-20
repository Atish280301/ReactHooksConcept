import React from "react";
const Intro = () => {
    return (
        <>
            <h1 className="H1">React Hooks Concept</h1>
            <p className="P">
                React Hooks are functions that allow developers to use state and other React features in functional components. They enable the use of state and lifecycle features in functional components, reducing the need for class components.
                In React, a "hook" refers to a special function that allows you to use state and other React features in functional components. React hooks were introduced in React version 16.8 to enable functional components to manage state and side effects, which were traditionally the domain of class components.
            </p>
            <p className="P">
                A Hook is a special function that lets you "hook into" React Feature. for Example: useState is a Hook that lets you add react State to Function Components.
                If you write a function component and realize you need to add some state to it, previously you had to convert it to a class.
                now you can use a hook inside the existing function component.
                Hooks are the new feature introduced in the react 16.8 version. It allows you to use state and other react features without writing a class. Hooks are the functions which “hook into” react state and lifecycle features from function components.
                It doesn’t work inside classes. Hooks should always be used at the top level of the react functions. Node version 6 or above. NPM version 5.2 or above is the minimum requirement.
            </p>
            <h2 className="H2">Rules Of Using Hooks In React JS</h2>
            <ul>
                <li>Always Write It Inside The Component Or Function</li>
                <li>Component name must be PascalCase (First Letter Should Be UpperCase)</li>
                <li>We Can Directly Import Or We Can Directly Write It Using React.hookName</li>
                <li>Don't call Hooks inside loops, conditions or nested functions.</li>
            </ul>
        </>
    );
}
export default Intro;