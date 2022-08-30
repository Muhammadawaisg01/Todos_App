import React, { useState } from "react" 

const InputTodo = (props) => { 
    const [title, setTitle] = useState("") ; 
    // const [inputText, setinputText] = useState( { 
    //     fname:"" , 
    //     lname:"" 
    // } ) 
    
    const onChange = e => { 
        setTitle (prevTitle => prevTitle = e.target.value ) 
    }

    const handleSubmit = (e) => {
        e.preventDefault() ; 
        if(title.trim()){
            props.addTodoProps(title) 
            setTitle("") ; 
        } else {
            alert("Enter Item correctly") ; 
        }
    }

    return ( 
    <form onSubmit = {handleSubmit} className = "form-container"> 
        <input 
        type="text"
        className = "input-text" 
        value={title}
        name = "title" 
        placeholder="...TodoInputName"
        onChange={onChange}
        />
        {/* <div onDoubleClick = {this.handleEditing} ></div>   */}
        <br/>
        <button className="input-submit"> Submit </button> 
    </form>
    )
  }

export default InputTodo