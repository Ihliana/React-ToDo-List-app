import React from "react";

function TodoList({ todos, handleDelete, handleEdit, darkMode }) {
  const [isDone, setIsDone] = React.useState(false);

  function flippState() {
    setIsDone((prevState) => !prevState);
  }

  const doneStyles = {
    backgroundColor: isDone ? "green" : "orange",
    color: isDone ? "white" : "red",
    textDecoration: isDone ? "line-through" : "",
  };

  return (
    <ul className="todoList">
      {
        /* Map through each todo item in the 'todos' array */
        todos.map((todo) => (
          <li className={`singleTodo ${darkMode ? "dark" : ""}`} key={todo.id}>
            {/* Display the todo text */}
            <span className="todoText" key={todo.id}>
              {todo.todo}
            </span>

            <button style={doneStyles} onClick={flippState}>
              {isDone ? "Done" : "ready?"}
            </button>

            {/* Edit button */}
            <button
              data-testid={`edit-button-${todo.id}`}
              className={`edit-button ${darkMode ? "dark" : ""}`}
              onClick={() => handleEdit(todo.id)}
            >
              Edit
            </button>

            {/*Delete button */}
            <button
              data-testid={`delete-button-${todo.id}`}
              className="delete-button"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </li>
        ))
      }
    </ul>
  );
}

export default TodoList;
