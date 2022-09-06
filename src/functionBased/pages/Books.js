import React from "react"
import { useParams } from "react-router-dom"


export const Book = () => {
    const { id } = useParams();
    return (
        <h1>Book {id}</h1>
    )
}
