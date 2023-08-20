import React from "react"
import './App.css';

import Footer from './components/footer'

function App() {

  const [todo, setTodo] = React.useState("")
  const [todos, setTodos] = React.useState([])


  const handleSubmit = (e) => {
    e.preventDefault()

    if(todo !== ""){
      setTodos([{id: `${todo}-${Date.now()}`, todo}, ...todos])
    }

  }

  const handleInput = (e) => {
    setTodo(e.target.value)
  }


  const handleDelete = (id) => {
    const delTodo = todos.filter((todo) => todo.id !== id)
    setTodos([...delTodo])

  }

  return (
    <div className="App">
       <div className="container">
        <h1>Todo List App</h1>

          <form className="todoForm" onSubmit={handleSubmit}>
            <input type='text' 
                    placeholder="Add a new task"
                    onChange={handleInput}
            />
            <button type='submit'>Add</button>
          </form>

          <ul className="todoList">
            {
              todos.map((todo) => (
                <li className="singleTodo" key={todo.id}>
                    <span  className="todoText" key={todo.id}>{todo.todo}</span>
                    <button data-testid="edit-button">Edit</button>
                    <button data-testid='delete-button' onClick={() => handleDelete(todo.id)}>Delete</button>            
                </li>

              ))
            }
          </ul>
       </div>

       <Footer  />
    </div>
  );
}

export default App;
