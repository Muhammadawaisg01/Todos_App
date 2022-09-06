import React from "react"
import { useState } from "react"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { NavLink } from "react-router-dom"
import "../App.css"

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const links = [
        {
            id: 1,
            path: "/",
            text: "Home",
        },
        {
            id: 2,
            path: "/about",
            text: "about",
        },
    ]
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }
    return (
        <nav className="nav">
            <nav className="navBar">
                <button onClick={handleToggle}>
                    {navbarOpen ? (
                        <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
                    ) : (
                        <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                    )}
                </button>
            </nav>
            <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
                {links.map(link => {
                    return <li key={link.id}>
                        <NavLink to={link.path} activeClassName="active-link" exact>
                            {link.text}
                        </NavLink> </li>
                })}
            </ul>
        </nav >
    )
}
export default Navbar
