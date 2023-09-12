import React from "react";

const Todo = ({id, todoName, handleRemove}) => {
    const remove = () => handleRemove(id)

    return (
        <div>
            <li>{todoName}</li>
            <button onClick={remove}>X</button>
        </div>
        
    )
}

export default Todo;