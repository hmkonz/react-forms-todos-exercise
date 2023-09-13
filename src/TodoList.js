import React, {useState} from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid} from 'uuid';

const TodoList = () => {
    // set state (todos) initially to an empty array
    const [todos, setTodos] = useState([]);
    // 'addTodo' is a function that's passed down to 'form' which is called when submit form. Adds a new todo to 'todos' state
    const addTodo = ({todoName}) => {
        // reset state (todos) by creating a new array with all the existing todos in 'todos' as well as a new object with the id and form input value of todoName of new todo
        setTodos(todos => [...todos, {id:uuid(), todoName}])
    }
  
    // 'id' passed in to remove() is the id of the todo to be removed
    const remove = id => { 
        // filter() interates over the in-state 'todos' array and passes in each id through the callback function. When the id of the todo being looped over todo.id !== id (id of todo to be deleted) returns false (means todo.id===id), that 'todo' element from the array is not added to the new array created. SetTodos is now passed that new array and changes the stored state of 'todos' to this new array without the todo that was deleted.
            setTodos(todos => todos.filter(todo => todo.id !== id));
        }
    
    return (
            <div>
                {/* render NewTodoForm with the addTodo function passed in so addTodo can be called when form is submitted */}
                <NewTodoForm addTodo={addTodo} />
                {/* iterate over each todo in the todos array and render the Todo component with the values of what's in state in 'formData' passed in  */}
                <ul>{todos.map(todo => ( 
                    <Todo 
                        key={todo.id}
                        id={todo.id} 
                        todoName={todo.todoName}
                        handleRemove={remove} 
                    />
                    ))} 
                </ul> 
            </div>    
        
        )
    }
    
    export default TodoList;
 

