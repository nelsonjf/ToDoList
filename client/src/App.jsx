import React, { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodos] = useState('')

  useEffect(() => {
    GetTodos()
    console.log(todos)
  }, [])

  const GetTodos = () => {
      fetch("/todo")
        .then(res => res.json())
        .then(data => setTodos(data))
        .catch(err => console.error("Error: ", err))
  }


  return (
    <div className="App">
      <h1>Welcome, User</h1>

      <div className="new-todo">
        <form>
          <input className="textbox" type="text" placeholder="Enter new Todo here" />
          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>

      <div className="todo-list">
        <h2>To Do List:</h2>
        {todos.map(todo => (
          <div className="todo" key={todo._id}>
            <div>
              <p>{todo.todo}</p>
              <button className="done">
                 Done
              </button>
              <button className="delete">
                Delete
              </button>
            </div>
            <br/>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;

////////////////////////////////////////////////
// Potts, T (2021)                            //
// mern-todo [source code]                    //
// https://github.com/TylerPottsDev/mern-todo //
////////////////////////////////////////////////