import React, {useState} from "react"
import ToDo from "./ToDo"

function Tasklist () {
    const [todo, setTodo] = useState([
        { text: 'task one', id: 1 },
        { text: 'task two', id: 2 },
    ])

    return (
        <div>
            <h1>Task List</h1>
            {todo.map((task) => (
                <div className="todo" key={task.id}>
                    <p>{task.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Tasklist