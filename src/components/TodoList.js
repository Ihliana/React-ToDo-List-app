import React from "react"


function TodoList({todos, handleDelete, handleEdit}){
    return(

        <ul className="todoList">
        {
            /* Map through each todo item in the 'todos' array */
          todos.map((todo) => (
            <li className="singleTodo" key={todo.id}>

                    {/* Display the todo text */}
                <span  className="todoText" key={todo.id}>{todo.todo}</span>

                    {/* Edit button */}
                <button data-testid={`edit-button-${todo.id}`} onClick={() => handleEdit(todo.id)}>Edit</button>

                    {/*Delete button */}
                <button data-testid={`delete-button-${todo.id}`} onClick={() => handleDelete(todo.id)}>Delete</button>            
            </li>

          ))
        }
      </ul>

    )
}


export default TodoList