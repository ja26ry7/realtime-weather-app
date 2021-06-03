import React from "react";
import ReactDOM from "react-dom";
import WeatherApp from "./WeatherApp";
import "./styles.css";

function App() {
  return <WeatherApp />;
}
const o = { p: 42, q: true };
const { p, q } = o;

console.log(p); // 42
console.log(q); // true

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
