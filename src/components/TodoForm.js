import React from "react";
import "bulma/css/bulma.min.css";
//This component represents a form used for adding or editing a todo item

const TodoForm = ({ handleSubmit, todo, editId, handleInput, darkMode }) => {
  return (
    //A form element

    <form className="field is-grouped todoForm" onSubmit={handleSubmit}>
      <p className="control is-expanded">
        {/* An input field for entering the task text. */}
        <input
          className="input"
          type="text"
          value={todo} //binds the input value to the 'todo' prop
          onChange={handleInput}
          placeholder="Add a new task"
        />
      </p>
      <p className="control">
        {/* A submit button with dynamic text based on whether an edit is in progress */}

        <button
          className={`is-info button submit-button ${darkMode ? "dark" : ""}`}
        >
          {editId ? "Edit" : "Add"}
        </button>
      </p>
    </form>
  );
};

export default TodoForm;
