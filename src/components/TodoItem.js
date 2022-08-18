import React from "react"
import styles from"./TodoItem.module.css"

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
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        color:"rgb(150, 32, 32)",
        // color:"black",
        textDecoration: "line-through",
      }
      const {id, title,completed } = props.todo;
    return <li className={styles.item}> 
    < input type="checkbox"  
        checked = {completed} 
        className={styles.checkbox}
        onChange = { function() { 
            props.handleChangeProps(id) 
            }
        // onChange ={() => {
        //     console.log("CLICKED") ; 
        // }}
        } 
        />
        <button  onClick ={() => props.deleteTodoProps(id) } > 
            Delete
        </button> 
        <span style={completed ? completedStyle : null} >
            {title} 
        </span>
    </li>
}

export default TodoItem