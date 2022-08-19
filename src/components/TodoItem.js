import React from "react"
import styles from"./TodoItem.module.css"

class TodoItem extends React.Component { 
    state = {
        editing : false,
    }
    handleEditing = () => {
        this.setState({
            editing:true,
        })
        console.log("editing mode activated   ");
    }
    handleUpdatedDone = event => {
        if (event.key === "Enter" ) {
          this.setState({ editing: false })
        }
      }
    completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        // color:"rgb(150, 32, 32)",
        textDecoration: "line-through",
    }
    render() { 
        let viewMode = {}
        let editMode = {}
        if(this.state.editing){
            viewMode.display ="none"
        }else{
            editMode.display ="none"
        }
    const {id, title, completed} = this.props.todo ; 
        return (
        <li 
            className = {styles.item}> 
        <div onDoubleClick = {this.handleEditing} 
        style={viewMode}
        > 
        <input type="checkbox"  
            checked  = {completed} 
            className={styles.checkbox}
            onChange = { () => { 
                this.props.handleChangeProps(id) 
                }
            // onChange ={() => {
            //     console.log("CLICKED") ; 
            // }}
            } 
            />
            <button onClick ={() => this.props.deleteTodoProps(id)} > 
                Delete
            </button> 
            <span style={completed ? this.completedStyle : null} > 
                {title} 
            </span> 
            </div> 
            <input type="text" className={styles.textInput}
            style={editMode}
            value={title}
            onChange={ e =>{
                this.props.setUpdateProps(e.target.value , id ) ; 
                // console.log(e.target.value , id) 
            }}
            onKeyDown={this.handleUpdatedDone}
            />
        </li> 
        )
    }
}

// function TodoItem(props) { 
//     const state = {
//         editing : false,
//     }
//     const handleEditing = () => { 
//         console.log("editing mode activated");
//     }
//     const completedStyle = {
//         fontStyle: "italic",
//         color: "#595959",
//         opacity: 0.4,
//         // color:"rgb(150, 32, 32)",
//         textDecoration: "line-through",
//     }
//     const {id, title, completed } = props.todo ;
    
//     return( <li 
//         className = {styles.item}> 
//     <div onDoubleClick = {handleEditing}>
//     <input type="checkbox"  
//         checked = {completed} 
//         className={styles.checkbox}
//         onChange = { function() { 
//             props.handleChangeProps(id) 
//             }
//         // onChange ={() => {
//         //     console.log("CLICKED") ; 
//         // }}
//         } 
//         />
//         <button  onClick ={() => props.deleteTodoProps(id)} > 
//             Delete
//         </button> 
//         <span style={completed ? completedStyle : null} > 
//             {title} 
//         </span>
//         </div>
//         <input type="text" className={styles.textInput} />
//     </li>)
// }

export default TodoItem

