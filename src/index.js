import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Bomb from "./state-drills/Bomb";
import HelloWorld from "./state-drills/HelloWorld";
import RouletteGun from "./state-drills/RouletteGun";

ReactDOM.render(
  <React.StrictMode>
    <HelloWorld />
    <RouletteGun bulletInChamber={8} />
    <Bomb />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
