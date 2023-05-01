import React, { useState, useEffect } from "react";

const API_BASE = "http://localhost:4000"

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodos] = useState('')

  useEffect(() => {
    GetTodos()
    console.log(todos)
  }, [])

  const GetTodos = () => {
      fetch(API_BASE + "/todo")
        .then(res => res.json())
        .then(data => setTodos(data))
        .catch(err => console.error("Error: ", err))
  }

  return (
    <div className="App">
      <h1>Welcome, User</h1>

      <div className="new-todo">
        <form>
          <input type="text" placeholder="Enter new Todo here" />
          <input type="submit" value="Submit" />
        </form>
      </div>

      <div className="todo-list">
        <h2>To Do List:</h2>
        {todos.map(todo => (
          <div className="todo" key={todo.id}>
            <p>{todo.todo}</p>
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