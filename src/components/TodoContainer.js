import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"

class TodoContainer extends React.Component {
    state = {
        "todos": [
          {
            id: 1,
            title: "Setup development environment",
            completed: true
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
//     return (
//       <React.Fragment>
//             <React.Fragment>
//                 <h1>Hello from Create React App</h1>
//                 <p>I am in a React Component!</p>
//             </React.Fragment>
//         <h1>Hello from Create React App</h1>
//         <p>I am in a React Component!</p>
//       </React.Fragment>
//     )
//   }
return (
    // <ul>
    //   {this.state.todos.map(todo => (
    //     <li>{todo.title}</li>
    //   ))}
    // </ul>
    <div>
      <Header />
      <TodosList todos={this.state.todos} />
    </div>
    );
}
}
export default TodoContainer