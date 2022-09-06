import React from "react"
import { Link, Outlet } from "react-router-dom"
import About from "./About"

export const BookList = () => {
    return (
        <>
            <h1>Book List</h1>
            <Link to="/books/1">Book 1</Link>
            <Link to="/books/2">Book 2</Link>
            <Link to="/books/newbook">New Book</Link>
            <Outlet context={{}} />
        </>
    )
}
