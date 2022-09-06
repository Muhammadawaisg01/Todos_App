import React from "react";
import { ImSad2 } from "react-icons/im";
import "../App.css"

const NotMatch = () => {
    return (
        <div className="notmatch">
            <ImSad2 size={100} />
            <h1>
                Error 404: No match for this page
            </h1>
        </div>
    )
}

export default NotMatch
