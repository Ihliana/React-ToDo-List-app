import React from "react"


function TodoList({todos, handleDelete, handleEdit, darkMode}){
    return(

        <ul className="todoList">
        {
            /* Map through each todo item in the 'todos' array */
          todos.map((todo) => (
            <li className={`singleTodo ${darkMode ? 'dark': ""}`} key={todo.id}>

                    {/* Display the todo text */}
                <span  className="todoText" key={todo.id}>{todo.todo}</span>

                    {/* Edit button */}
                <button data-testid={`edit-button-${todo.id}`} className={`edit-button ${darkMode ? 'dark': ""}`} onClick={() => handleEdit(todo.id)}>Edit</button>

                    {/*Delete button */}
                <button data-testid={`delete-button-${todo.id}`} className="delete-button" onClick={() => handleDelete(todo.id)}>Delete</button>            
            </li>

          ))
        }
      </ul>

    )
}


export default TodoList