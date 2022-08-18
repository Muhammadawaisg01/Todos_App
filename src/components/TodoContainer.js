import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import { v4 as uuidv4 } from "uuid";
import InputTodo from "./InputTodo"
import "../App.css"

class TodoContainer extends React.Component {
  handleChange = id => {
    console.log("Clicked  ",id) ;
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed ; 
        }
        return todo ; 
      })
    });
  }
  delTodo = id => {
    // console.log("Deletion  ",id) ; 
      this.setState({
        todos: [
          ...this.state.todos.filter( todo => { 
            return todo.id !== id ; 
          })
        ]
      }) ;
  }
  addTodoItem = item => {
    const newTodo = {
      id : uuidv4(),
      title:item,
      completed:false,
    };
    this.setState({
      todos:[...this.state.todos, newTodo]
    });
    console.log(item);
  };
  state = {
        "todos": [
          {
            id: uuidv4(),
            title: "Setup development environment",
            completed: false
          },
          {
            id: uuidv4(),
            title: "Develop website and add content",
            completed: false
          },
          {
            id: uuidv4(),
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
    
    <div className="container">
      <div className="inner">
      <Header />
      <InputTodo addTodoProps={this.addTodoItem} /> 
      <TodosList 
        todos = {this.state.todos} 
        handleChangeProps= {this.handleChange} 
        deleteTodoProps  = {this.delTodo}
      />
      </div>
    </div>
    );
}
}
export default TodoContainer
