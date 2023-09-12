import '@testing-library/jest-dom/extend-expect';
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

// smoke test
it("renders without crashing", function() {
    render (<TodoList />);
});

// snapshot test
it("matches snapshot", function() {
    const {asFragment} = render (<TodoList />);
    expect (asFragment()).toMatchSnapshot();
});


it("can add a new todo", function() {
    const {getByLabelText, queryByText, getByPlaceholderText} = render (<TodoList />);
    
    // get the input value of Task as well as the button from the form
    const todoNameInput = getByLabelText("Task:");
    const button = queryByText("Add a Task");
    
    // no todos added yet so confirm there isn't a todo and a button with an "X" which is added with every todo
    expect (queryByText("Do Laundry")).not.toBeInTheDocument();
    expect(queryByText("X")).not.toBeInTheDocument();

    // Add a todo (by mock filling out the form)
    // Mocks what will be filled out in the todoNameInput input of the form and updates the state of "todos"
    fireEvent.change(todoNameInput, {target: {value: "Do Laundry"}});
    //mocks submitting the button 
    fireEvent.click(button);

    // when todo is added, expect to see a todo with a button with an 'X" on it
    expect(queryByText("Do Laundry")).toBeInTheDocument();
    expect(queryByText("X")).toBeInTheDocument();

    // after todo is added, inputs are cleared and expect to see placeholders in inputs
    const todoNamePlaceholder = getByPlaceholderText("Enter a task");
    expect(todoNamePlaceholder).toBeInTheDocument();
});

it("can delete a todo", function() {
    const {queryByText, getByLabelText} = render (<TodoList />)

    // get the input value of Task as well as the button from the form
    const todoNameInput = getByLabelText("Task:");
    const button = queryByText("Add a Task");

    // add a todo (by mock filling out the form)
    fireEvent.change(todoNameInput, {target: {value: "Do Laundry"}});
    //mocks submitting the button 
    fireEvent.click(button);
    
    // click the remove button ('X') and the todo should be gone
    fireEvent.click(queryByText("X"));
    expect(queryByText("X")).not.toBeInTheDocument();
})

