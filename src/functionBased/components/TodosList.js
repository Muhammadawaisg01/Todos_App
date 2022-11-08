import React from "react"
import TodoItem from "./TodoItem"

const TodosList = (props) => {
    const { todos, handleChangeProps, deleteTodoProps, setUpdateProps } = props

    const { _id, title, completed } = todos
    return (
        <ul>
            {todos.map((todo) => {
                // console.log('todos', todo)
                { let asss = 10 }

                return (
                    <>
                        <TodoItem key={_id} todo={todo}
                            handleChangeProps={handleChangeProps}
                            deleteTodoProps={deleteTodoProps}
                            setUpdateProps={setUpdateProps}
                        />
                    </>
                )
            })}
        </ul>
    )
}
export default TodosList