import React , {useState, useEffect } from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import { v4 as uuidv4 } from "uuid";
import InputTodo from "./InputTodo"
import "../App.css"

const TodoContainer = () => { 
  const [todos, setTodos ] = useState(getInitialTodos() ) ; 
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
    setTodos( prevTodo => { 
      prevTodo.map( todo => { 
        if(todo.id === id) { 
            todo.title = updatedTitle 
        } 
        return todo ; 
      })
    });
  }
  
  useEffect(() => { 
    console.log("test run") 
    const temp = localStorage.getItem("todos") ; 
    const loadedTodos = JSON.parse(temp) ; 
    if(loadedTodos) { 
      setTodos(loadedTodos)
    }
  },[] ) 

  useEffect(() => {
    // storing todos items
    console.log("Todos changes")
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos] ) 

  function getInitialTodos() { 
    console.log("Getting Initial Todos") ; 
    const temp = localStorage.getItem("todos") 
    const savedTodos = JSON.parse(temp) ; 
    return savedTodos || [] ; 
  } 
  return ( 
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

export default TodoContainer
