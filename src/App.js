import React from "react"
import './App.css';

import Footer from './components/footer'

function App() {

  const [todo, setTodo] = React.useState("")
  const [todos, setTodos] = React.useState([])
  const [editId, setEditId] = React.useState(0)

  //handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    //in case of editing
    if(editId){
      //define todo we are trying to edit
      const editTodo = todos.find((i) => i.id === editId)

      const updatedTodos = todos.map((t) => 
      t.id === editTodo.id 
      ? (t = {id: t.id, todo}) 
      : {id: t.id, todo: t.todo} )

      setTodos(updatedTodos)
      setEditId(0)
      setTodo("")
      return;
    }

    //check if the 'todo' input is not empty
    if(todo !== ""){
      //a new todo with a unique ID
      //add the new todo object to the 'todos' array
      setTodos([{id: `${todo}-${Date.now()}`, todo}, ...todos])
      setTodo("")
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


  //function to handle todo edit
  const handleEdit = (id) => {
      //find out the todo with the given 'id' from the 'todos' array
      const editTodo = todos.find((i) => i.id === id )
      setTodo(editTodo.todo)
      setEditId(id)
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
            <button type='submit'>{editId ? "Edit" : "Add"}</button>
          </form>

          <ul className="todoList">
            {
              todos.map((todo) => (
                <li className="singleTodo" key={todo.id}>
                    <span  className="todoText" key={todo.id}>{todo.todo}</span>
                    <button data-testid="edit-button" onClick={() => handleEdit(todo.id)}>Edit</button>
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
