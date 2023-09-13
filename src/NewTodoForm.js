import React, {useState} from 'react';
import {v4 as uuid} from "uuid";

const NewTodoForm = ({addTodo}) => {
    // sets the values of the input to an empty string (only see placeholder value)
    const INITIAL_STATE = {
        todoName: ""
    }
    // set state of formData to what's in INITIAL_STATE
    const [formData, setFormData] = useState(INITIAL_STATE);
    // when input value changes, handleChange() is called. The value of the input is found in event.target.value and state is updated by adding name:value of input to the existing formData object
    const handleChange = (event) => {
        const {name, value} = event.target;
        // resets in-state formData to an object with the existing data as well as adding what's changed in the input of the form
        setFormData(formData => ({
            ...formData, 
            [name]: value
        }))
    }

     // handleSubmit() is called when the form is submitted.
    const handleSubmit = (event) => {
        // prevent page from reloading
        event.preventDefault();
        // call the addTodo function from BoxList component with what's in the formData object (todoName) as well as the id of the new todo passed in 
        addTodo({...formData, id: uuid()})
        // reset input field to an empty string so just the place holder shows
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