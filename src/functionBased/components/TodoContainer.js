import React , {useState, useEffect } from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import { v4 as uuidv4 } from "uuid";
import InputTodo from "./InputTodo"
import "../App.css"

const TodoContainer = () => { 
  const [todos, setTodos ] = useState([]) ; 
    // {
    //   id: uuidv4(),
    //   title : "" ,
    //   completed : false
    // });
    // const [id, title, completed] = [todos.id, todos.title, todos.completed] ; 
    
  const handleChange = id => { 
    console.log("Clicked  " , id ) ; 
    setTodos( prevTodos =>  { 
      prevTodos.map(todo => { 
          if( todo.id === id ) { 
            return { 
              ...todo , completed : !todo.completed ,
            } 
        }
          return todo ; 
        }) 
    });
  }

  const delTodo = id => {
    setTodos( [
      ...todos.filter( item => { 
        return id !== item.id 
      } ) 
    ]
    )
  }
  const addTodoItem = (item_title) => {
    const new_todo = { 
      id : uuidv4(),
      title : item_title,
      completed : false
    }
    setTodos(
      [ ...todos, new_todo ] 
    ) 
  } 
  const setUpdate = ( updatedTitle, id ) => { 
    setTodos( prevTodo =>{
      prevTodo.map( todo =>{
        if(todo.id === id) { 
            todo.title = updatedTitle 
        } 
        return todo ; 
      })
    });
  }
  
  useEffect(() => {
    console.log("test run") 
  }) 

  return ( 
    // <ul> 
    //   {todos.map(todo =>{
    //     <li> {todo.title} </li>  
    //   }
    //   )} 
    // </ul>
    <div className ="container">
      <div className = "inner">
        <Header/>
        <InputTodo addTodoProps={addTodoItem} /> 
        <TodosList
        todos = {todos} 
        handleChangeProps = {handleChange} 
        deleteTodoProps  = {delTodo} 
        setUpdateProps = {setUpdate} 
        />
      </div>
    </div>
  )

} // Component Closing Bracket

// class TodoContainer extends React.Component {
//   handleChange = id => {
//     console.log("Clicked  ",id) ; 
//     this.setState({
//       todos: this.state.todos.map(todo => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed ; 
//         }
//         return todo ; 
//       })
//     });
//   }
//   delTodo = id => {
//     // console.log("Deletion  ",id) ; 
//       this.setState({
//         todos: [
//           ...this.state.todos.filter( todo => { 
//             return todo.id !== id ; 
//           })
//         ]
//       }) ; 
//   }
//   addTodoItem = item => {
//     const newTodo = {
//       id : uuidv4(),
//       title:item,
//       completed:false,
//     };
//     this.setState({
//       todos:[...this.state.todos, newTodo]
//     });
//     console.log(item);
//   }
//   setUpdate = (updatedTitle , id) => { 
//     this.setState({
//       todos : this.state.todos.map( todo => { 
//         if(todo.id === id){ 
//             todo.title = updatedTitle;
//         }
//         return todo
//       }),
//     })
//     // console.log(updatedTitle  , id ) 
//   }
//   // componentDidMount(){ 
//   //   fetch("https://jsonplaceholder.typicode.com/todos?_limit=10") 
//   //   .then(response => response.json()) 
//   //   .then(data => this.setState({ todos : data })) ; 
//   //   // const e = localStorage.getItem("TodoItem");
//   // }
//   componentDidMount() {
//     const temp = localStorage.getItem("todos")
//     const loadedTodos = JSON.parse(temp)
//     if (loadedTodos) {
//       this.setState({
//         todos: loadedTodos
//       })
//     }
//   }
//   componentDidUpdate(prevProp, prevState){  
//     if( prevState.todos !== this.state.todos ) { 
//         const temp = JSON.stringify(this.state.todos) ; 
//         localStorage.setItem("todos", temp);
//         console.log(temp) ;
//     }
//   }
//   componentWillUnmount(){
//     console.log("Cleaning up. ....") ; 
//   }
//   state = {
//         "todos": [],
//        };
//   render() {
//     return (
//     // <ul>
//     //   {this.state.todos.map(todo => (
//     //     <li>{todo.title}</li>
//     //   ))}
//     // </ul>
    
//     <div className="container">
//       <div className="inner">
//       <Header />
//       <InputTodo addTodoProps={this.addTodoItem} /> 
//       <TodosList 
//         todos = {this.state.todos} 
//         handleChangeProps= {this.handleChange} 
//         deleteTodoProps  = {this.delTodo}
//         setUpdateProps = {this.setUpdate}
//       />
//       </div>
//     </div>
//     );
// }
// }
export default TodoContainer
