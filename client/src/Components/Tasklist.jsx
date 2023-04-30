import React, {useState, useEffect} from "react"
import ToDo from "./ToDo"
import New from "./New"

function Tasklist () {
    return (
        <div>
            <h1>Task List</h1>
            <New />
            <ToDo />
        </div>
    )
}

export default Tasklist