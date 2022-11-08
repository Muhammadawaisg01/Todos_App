import React, { useState, useEffect } from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import { v4 as uuidv4 } from "uuid";
import InputTodo from "./InputTodo"
import "../App.css"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "../pages/About";
import NotMatch from "../pages/NotMatch";
import Navbar from "./Navbar";


const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/getAll", {
      method: 'GET'
    })
      .then(res => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          console.log(data, "      DATA");
          setTodos(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const handleChange = id => {
    console.log("Clicked  ", id);
    fetch(`http://localhost:3000/api/update/${id}`, {
      method: "PATCH",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ completed: true })
    })
    setTodos(todos.map(todo => {
      if (todo._id === id) {
        return {
          ...todo, completed: !todo.completed,
        }
      }
      return todo;
    })
    );
  }
  const delTodo = id => {
    console.log(id);
    fetch(`http://localhost:3000/api/delete/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      // body: 
    }).then(res => res.json().then((resp) => {
      console.warn("Warning_on_Deletion  ", resp);
    }))
    setTodos([
      ...todos.filter(item => {
        return id !== item._id
      })
    ]
    )
  }
  const setUpdate = (updatedTitle, id) => {
    console.log("I am ID IN UPDATE   ", id)
    fetch(`http://localhost:3000/api/update/${id}`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ title: updatedTitle })
    }).then(res => res.json())
    setTodos(
      todos.map(todo => {
        if (todo._id === id) {
          todo.title = updatedTitle
        }
        return todo;
      })
    )
  }
  const addTodoItem = (item_title) => {
    const new_todo = {
      // _id: uuidv4(),
      title: item_title,
      completed: false
    }
    fetch("http://localhost:3000/api/post", {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(new_todo)
    }).then(res => res.json()).then(resp => {
      if (resp) {
        console.log("NEW TODO saved successfully");
      }
    })
    setTodos(
      [...todos, new_todo]
    )
  }

  function getInitialTodos() {
    console.log("Getting Initial Todos");
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  // return (
  //   <div className="container">
  //     <div className="inner" >
  //       <Header />
  //       <InputTodo addTodoProps={addTodoItem} />
  //       <TodosList
  //         todos={todos}
  //         handleChangeProps={handleChange}
  //         deleteTodoProps={delTodo}
  //         setUpdateProps={setUpdate}
  //       />
  //     </div>
  //   </div>
  // )

  if (error) {
    return <div>Error: {error.message} </div>
  } else if (!isLoaded) {
    return <div> Loading...</div>
  } else {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={addTodoItem} />
          <TodosList
            todos={todos}
            handleChangeProps={handleChange}
            deleteTodoProps={delTodo}
            setUpdateProps={setUpdate}
          />
        </div>
      </div>
    )
  }

} // Component Closing Bracket

export default TodoContainer 
