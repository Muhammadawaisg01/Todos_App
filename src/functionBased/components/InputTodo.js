import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"
import "../App.css"

const InputTodo = (props) => {
    const [title, setTitle] = useState("");
    // const [inputText, setinputText] = useState( { 
    //     fname:"" , 
    //     lname:"" 
    // } ) 

    const onChange = e => {
        setTitle(prevTitle => prevTitle = e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            props.addTodoProps(title)
            setTitle("");
        } else {
            alert("Enter Item correctly");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                type="text"
                className="input-text"
                value={title} // State for making it a controlled input 
                name="title"
                placeholder="Enter text..."
                onChange={onChange}
            />
            {/* <div onDoubleClick = {this.handleEditing} ></div>   */}
            <br />
            <button className="input-submit"> <FaPlusCircle /> </button>
        </form>
    )
}

export default InputTodo