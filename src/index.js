import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from "./functionBased/components/TodoContainer"
import { BrowserRouter } from "react-router-dom"
import App from "./functionBased/components/App";

// const element = <h1>Hello from Create React App element</h1>

// ReactDOM.render(element, document.getElementById("root"));

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            < App />
        </BrowserRouter>
    </React.StrictMode>
    , document.getElementById("root")); 
