import React, { Component } from "react";

class inputTodo extends Component{
    state = {
        title : "",
        // email : "",
        // password: ""
    };
    handleEditing = () => {
        console.log("editing mode activated");
    }
    onChange = e => { 
    this.setState({
        [e.target.name] : e.target.value 
    })
    }
    handleSubmit = e =>{
        e.preventDefault();
        if(this.state.title.trim()){
            this.props.addTodoProps(this.state.title) 
            this.setState({ title:"" })
        } else{
            alert("Enter item correctly"); 
        }
        // console.log(this.state.title); 
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input type = "text" placeholder = "...TodoInputName" value = {this.state.title} 
                name="title"
                onChange={this.onChange}
                className="input-text"
                />
                <div onDoubleClick={this.handleEditing} ></div>
                <br/>
                {/* <input type = "email" placeholder="...TodoInputEmail" value={this.state.email} 
                name="email" 
                onChange={this.onChange} 
                />
                <br/>
                <input type = "password" placeholder = "...TodoInputPass" value={this.state.password} 
                name="password"
                onChange={this.onChange}
                /> */}
                <br/>
                <button className="input-submit"> Submit </button> 
            </form>
        )
    }
}


export default inputTodo