import React from "react"

// class TodoItem extends React.Component{
//     render(){
//         return (
//             <li> <input type="checkbox"  
//             checked={this.props.todo.completed} 
//             onChange = {() => this.props.handleChangeProps(this.props.todo.id)}

//             /> {this.props.todo.title} 
            
//             </li>
//         )
//     }
// }

function TodoItem(props){
    return <li> < input type="checkbox"  
        checked = {props.todo.completed} 
        onChange = { function() { 
            props.handleChangeProps(props.todo.id) 
            }
        // onChange ={() => {
        //     console.log("CLICKED") ; 
        // }}
        } 
        />
        <button  onClick ={() => props.deleteTodoProps(props.todo.id) } > 
            Delete
        </button> 
        {props.todo.title} 
    </li>
}

export default TodoItem