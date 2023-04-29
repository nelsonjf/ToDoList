import React, {useState} from "react"
import ToDo from "./ToDo"
import New from "./New"

function Tasklist () {
    const [todo, setTodo] = useState([
        { text: 'task one', id: 1 },
        { text: 'task two', id: 2 },
    ])

    return (
        <div>
            <h1>Task List</h1>
            <New />
            <ToDo todo={todo}/>
        </div>
    )
}

export default Tasklist