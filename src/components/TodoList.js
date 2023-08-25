import React from "react"


function TodoList({todos, handleDelete, handleEdit}){
    return(

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

    )
}


export default TodoList