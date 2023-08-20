import React from "react"
import './App.css';

import Footer from './components/footer'

function App() {
  return (
    <div className="App">
       <div className="container">
        <h1>Todo List App</h1>

          <form className="todoForm">
            <input type='text' 
                    placeholder="Add a new task"
            />
            <button>Add</button>
          </form>

          <ul className="todoList">
            <li className="singleTodo">
                <span  className="todoText">Learn React</span>
                <button data-testid="edit-button">Edit</button>
                <button data-testid='delete-button'>Delete</button>            
            </li>
          </ul>
       </div>

       <Footer  />
    </div>
  );
}

export default App;
