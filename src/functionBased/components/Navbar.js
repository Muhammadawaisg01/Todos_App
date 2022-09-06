import React from "react"
import { useState } from "react"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const Navbar = () => {
    const links = [
        {
            id: 1,
            path: "/",
            text: "Home",
        },
        {
            id: 2,
            path: "/about",
            text: "About",
        }
    ]
    return (
        <nav className="nav">
            <ul>
                {links.map(link => {
                    return <li key={link.id}> {link.text} </li>
                })}
            </ul>
        </nav>
    )
}
export default Navbar
