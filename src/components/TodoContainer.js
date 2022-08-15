import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"

class TodoContainer extends React.Component {
  handleChange = id => {
    console.log("Clicked  ",id) ; 
  }  
  state = {
        "todos": [
          {
            id: 1,
            title: "Setup development environment",
            completed: false
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: false
          }
        ] ,
        todos1 : {
          Name  : "Muhammad Awais",
          age   : 21,
          // group : ["Pakistan"]
        }
       };
       render() {
return (
    // <ul>
    //   {this.state.todos.map(todo => (
    //     <li>{todo.title}</li>
    //   ))}
    // </ul>
    <div>
      <Header />
      <TodosList todos={this.state.todos} 
      handleChangeProps={this.handleChange} 
      />
    </div>
    );
}
}
export default TodoContainer
