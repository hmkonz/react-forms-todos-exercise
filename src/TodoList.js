import React, {useState} from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid} from 'uuid';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    // 'addTodo' is a function that's passed down to 'form' which is called when submit form adds a new todo to 'todos' state
    const addTodo = ({todoName}) => {
        // returns new array with all the existing 'todos' as well as a new object with an id and task name of new todo
        setTodos(todos => [...todos, {id:uuid(), todoName}])
    }
  
    // 'id' passed in to remove() is the id of the todo to be removed
    const remove = id => { 
        // filter() interates over the in-state 'todos' array and passes in each id through the callback function. When todo.id !== id returns false (means todo.id===id), that 'todo' element from the array is not added to the new array created. SetTodos is now passed that new array and changes the stored state of 'todos' to this new array.
            setTodos(todos => todos.filter(todo => todo.id !== id));
        }
    
    return (
            <div>
                <NewTodoForm addTodo={addTodo} />
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
 

