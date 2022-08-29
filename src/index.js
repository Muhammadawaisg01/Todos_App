import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from "./functionBased/components/TodoContainer"

const element = <h1>Hello from Create React App element</h1>

// ReactDOM.render(element, document.getElementById("root"));

ReactDOM.render(
 <React.StrictMode> 
< TodoContainer  />
 </React.StrictMode>
, document.getElementById("root"));

