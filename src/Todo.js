import React from "react";

// pass the values of id and todoName as well as the handleRemove function from TodoList to the Todo component
const Todo = ({id, todoName, handleRemove}) => {
    // the id passed in to handleRemove is the id of the todo to be deleted
    const remove = () => handleRemove(id)

    return (
        <div>
            {/* display the new todo (the value of the form input todoname) in an <li> */}
            <li>{todoName}</li>
            {/*add a button with each new todo created that whcn clicked will remove the todo  */}
            <button onClick={remove}>X</button>
        </div>
        
    )
}

export default Todo;