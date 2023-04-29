import React from "react"

function ToDo (props) {
    const todo = props.todo

    return (
        <div>
            {todo.map((task) => (
                <div className="todo" key={task.id}>
                <p>{task.text}</p> 
                </div>
            ))}
        </div>
    )
}

export default ToDo