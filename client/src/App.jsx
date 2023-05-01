import React, { useState, useEffect } from "react";

function App() {
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
        <div className="todo">
          <p>Task</p>
        </div>
        <div className="todo">
          <p>Task</p>
        </div>
        <div className="todo">
          <p>Task</p>
        </div>
      </div>
    </div>
  );
}

export default App;
