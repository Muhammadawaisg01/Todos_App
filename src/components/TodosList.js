import React from "react";
import TodoItem from "./TodoItem"

class TodosList extends React.Component{
    render(){
        return(
            <ul>
                {this.props.todos.map(todo => (
                    // <li key={todo.id}> todo={todo}</li>
                    <TodoItem key={todo.id} todo={todo}/>
                ))}
            </ul>
        )
    }
}

export default TodosList