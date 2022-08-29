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
  }
  setUpdate = (updatedTitle , id) => {
    this.setState({
      todos : this.state.todos.map( todo => {
        if(todo.id === id){
            todo.title = updatedTitle;
        }
        return todo
      }),
    })
    // console.log(updatedTitle  , id ) 
  }
  // componentDidMount(){ 
  //   fetch("https://jsonplaceholder.typicode.com/todos?_limit=10") 
  //   .then(response => response.json()) 
  //   .then(data => this.setState({ todos : data })) ; 
  //   // const e = localStorage.getItem("TodoItem");
  // }
  componentDidMount() {
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos
      })
    }
  }
  componentDidUpdate(prevProp, prevState){  
    if( prevState.todos !== this.state.todos ) { 
        const temp = JSON.stringify(this.state.todos) ; 
        localStorage.setItem("todos", temp);
        console.log(temp) ;
    }
  }
  componentWillUnmount(){
    console.log("Cleaning up. ....") ; 
  }
  state = {
        "todos": [],
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
        setUpdateProps = {this.setUpdate}
      />
      </div>
    </div>
    );
}
}
export default TodoContainer
