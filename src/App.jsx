import React from "react";
import './App.css';
import UseStateHook from "./Components/UseStateHook/UseStateHook";
import Intro from "./Components/Intro/Intro";
import UseEffectHook from "./Components/UseEffectHook/UseEffectHook";
import UseReduerHook from "./Components/UseReducer/UseReducerHook";
import UseRefHook from "./Components/UseRefHook/UseRefHook";
import UseCallback from "./Components/UseCallBack/UseCallback";
import HistoryF from "./Components/HistoryF/HistoryF";
import LocationS from "./Components/Location/LocationS";
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
      <Intro />
      <hr />
      <UseStateHook />
      <hr />
      <UseEffectHook />
      <hr />
      <UseReduerHook />
      <hr />
      <UseRefHook />
      <hr />
      <UseCallback />
      <hr />
      <HistoryF />
      <hr />
      <LocationS />
    </div>
    </Router>
  );
}
export default App;