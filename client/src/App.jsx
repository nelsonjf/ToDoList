// React essentials
import React, { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodos] = useState('')

  // Displaying the todos
  useEffect(() => {
    GetTodos()
  }, [])

  const GetTodos = () => {
      fetch("https://todoserver-8pqw.onrender.com/todo")
        .then(res => res.json())
        .then(data => setTodos(data))
        .catch(err => console.error("Error: ", err))
  }

  // Mark a todo as complete
  const todoDone = async id => {
    const data = await fetch("https://todoserver-8pqw.onrender.com/todo/done/" + id).then(res => res.json())

      setTodos(todos => todos.map(todo => {
        if (todo._id === data._id) {
          todo.done = data.done
        }

        return todo
      }))
  }

  // Detele a todo
  const deleteTodo = async id => {
    const data = await fetch("https://todoserver-8pqw.onrender.com/todo/delete/" + id, {method: "DELETE"}).then(res => res.json())

    setTodos(todos => todos.filter(todo => todo._id !== data._id))
  }

  // Make a new todo
  const addTodo = async () => {
    const data = await fetch("https://todoserver-8pqw.onrender.com/todo/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        todo: newTodo
      })
    }).then(res => res.json())
  
    setTodos([...todos, data])
    setNewTodos("")
  }

  // Checks if input is empty or not
  function inputCheck () {
    if (newTodo == '') {
      return
    }
    addTodo()
  }

  // HTML for the application
  return (
    <div className="App">
      <h1>Welcome, User</h1>

      {/* New todo form */}
      <div className="new-todo">
        <form onSubmit={(e) => {e.preventDefault()}}>
          <input 
            className="textbox" 
            type="text" 
            placeholder="Enter new Todo here" 
            onChange={e => setNewTodos(e.target.value,)}
            value={newTodo}/>
          <input 
            className="submit" 
            type="button" 
            value="Submit" 
            onClick={inputCheck}/>
        </form>
      </div>

      {/* List of Todos */}
      <div className="todo-list">
        <h2>To Do List:</h2>
        {todos.map(todo => (
          <div className={"todo " + (todo.done ? "is-done" : "")} key={todo._id}>
            <div>
              <p>{todo.todo}</p>
              <button className="done" onClick={() => todoDone(todo._id)}>
                 Done
              </button>
              <button className="delete" onClick={() => deleteTodo(todo._id)}>
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