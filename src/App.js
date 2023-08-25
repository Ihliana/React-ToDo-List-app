import React from "react"
import './App.css';

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
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

        <TodoForm 
                handleSubmit={handleSubmit}
                todo={todo}
                editId={editId}
                handleInput={handleInput}

        />
      
        <TodoList 
                todos={todos}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
        />
      
       </div>

       <Footer  />
    </div>
  );
}

export default App;
