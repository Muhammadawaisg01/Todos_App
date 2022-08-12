import React from "react"

class TodoItem extends React.Component{
    render(){
        return (
            <li> <input type="checkbox" /> {this.props.todo.title} </li>
        )
    }
}

function TodoItem1(props){
    return <li> <input type="checkbox" /> {props.todo.title} </li>
}

export default TodoItem