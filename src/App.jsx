import React from "react";
import './App.css';
import UseStateHook from "./Components/UseStateHook/UseStateHook";
import Intro from "./Components/Intro/Intro";
import UseEffectHook from "./Components/UseEffectHook/UseEffectHook";
const App = () => {
  return (
    <div>
      <Intro />
      <hr />
      <UseStateHook />
      <hr />
      <UseEffectHook />
      <hr />
    </div>
  );
}
export default App;