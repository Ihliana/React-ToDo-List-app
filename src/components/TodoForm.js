import React from "react"
//This component represents a form used for adding or editing a todo item

const TodoForm = ({handleSubmit, todo, editId, handleInput}) => {
    return(

        //A form element 
        <form className="todoForm" onSubmit={handleSubmit}>

            {/* An input field for entering the task text. */}
            <input type='text' 
                    placeholder="Add a new task"
                    onChange={handleInput}
                    value={todo}  //binds the input value to the 'todo' prop
            />

            {/* A submit button with dynamic text based on whether an edit is in progress */}
            <button type='submit'>{editId ? "Edit" : "Add"}</button>
      </form>
    )
}


export default TodoForm