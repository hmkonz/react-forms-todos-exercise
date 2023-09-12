import React, {useState} from 'react';
import {v4 as uuid} from "uuid";

const NewTodoForm = ({addTodo}) => {
    const INITIAL_STATE = {
        todoName: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        // returns an object with the existing data as well as adding what's changed in the input of the form
        setFormData(formData => ({
            ...formData, 
            [name]: value
        }))
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        // include all todos in formData along with the id of the new todo
        addTodo({...formData, id: uuid()})
        // reset input fields to empty string so just place holder shows
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit = {handleSubmit}>
            <label htmlFor="todoName">Task:</label>
            <input
                id="todoName"
                type="text"
                name="todoName"
                placeholder="Enter a task"
                value={formData.todoName}
                onChange={handleChange}
            />
            <button>Add a Task</button>

        </form>
    )

}

export default NewTodoForm;