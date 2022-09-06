import TodoContainer from "./TodoContainer"
import React from "react"
import { Link, Route, Routes } from "react-router-dom"
import { BookList } from "../pages/BookList"
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import { Book } from "../pages/Books"


const App = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/books">Books</Link>
                    </li>
                    {/* <li>
                        <Link to="*">NotMatch</Link>
                    </li> */}
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<TodoContainer />} />
                <Route path="/about" element={<About />} />
                <Route path="/books">
                    <Route index element={<BookList />} />
                    <Route path=":id" element={<Book />} />
                    <Route path="new" element={<Book />} />
                </Route>
                <Route path="*" element={<NotMatch />} />
            </Routes >
            <Routes location="/books">
                <Route path="/books" element={<h1> Extra Content for books path</h1>} />
            </Routes>
        </>
    )
}
export default App