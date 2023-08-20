import React from "react"
import './App.css';

function App() {
  return (
    <div className="App">
       <div className="container">
        <h1>Todo List App</h1>

          <form className="todoForm">
            <input type='text' />
            <button>Add</button>
          </form>

          <ul className="todoList">
            <li className="singleTodo">
                <span  className="todoText">Learn React</span>
                <button>Edit</button>
                <button>Delete</button>            
            </li>
          </ul>
       </div>
    </div>
  );
}

export default App;
