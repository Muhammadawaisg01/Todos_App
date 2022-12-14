import React, { useState, useEffect } from "react"
import styles from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa"

const TodoItem = props => {
    const { handleChangeProps, deleteTodoProps, setUpdateProps, todo } = props;

    const { _id, title, completed } = todo

    console.log(title)

    const [editing, setEditing] = useState(false)

    const handleEditing = () => {
        setEditing(true)
    }

    const handleUpdatedDone = event => {
        if (event.key === "Enter") {
            setEditing(false)
        }
    }

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    let viewMode = {}
    let editMode = {}

    if (editing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }
    useEffect(() => {
        console.log(_id)
        return () => {
            console.log("Cleaning up...")
        }
    }, [])

    return (
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={completed}
                    onChange={() => handleChangeProps(_id)}
                />
                <button onClick={() => deleteTodoProps(_id)} >
                    <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
                </button>
                <span style={completed ? completedStyle : null}> {title} </span> {/* if condition, if completed = true then mark the line on the text */}
            </div>
            <input
                type="text"
                style={editMode}
                className={styles.textInput}
                value={title}
                onChange={e => {
                    setUpdateProps(e.target.value, _id);
                }}
                onKeyDown={handleUpdatedDone}
            />
        </li>
    )
}

export default TodoItem