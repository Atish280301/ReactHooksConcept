import React from "react";
import './App.css';
import UseStateHook from "./Components/UseStateHook/UseStateHook";
import Intro from "./Components/Intro/Intro";
const App = () => {
  return (
    <div>
      <Intro />
      <hr />
      <UseStateHook />
      <hr />
    </div>
  );
}
export default App;