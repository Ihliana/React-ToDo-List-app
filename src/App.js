import React from "react"
import './App.css';

import Footer from './components/footer'

function App() {

  const [todo, setTodo] = React.useState("")
  const [todos, setTodos] = React.useState([])

  //handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    //check if the 'todo' input is not empty
    if(todo !== ""){
      //a new todo with a unique ID
      //add the new todo object to the 'todos' array
      setTodos([{id: `${todo}-${Date.now()}`, todo}, ...todos])
    }

  }


  //function to handle input changes
  const handleInput = (e) => {
    //update the 'todo' state with the value entered in the input field
    setTodo(e.target.value)
  }


  //function to handle todo deletion
  const handleDelete = (id) => {
    //filter out the todo with the given 'id' from the 'todos' array
    const delTodo = todos.filter((todo) => todo.id !== id)
    //update the 'todos' state with the filtered array
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
                    value={todo}
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
