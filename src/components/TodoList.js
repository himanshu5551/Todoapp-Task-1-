import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    let [todos, settodos] = useState([]);
    let addtodo = todo => {
        let updatedTodos = [todo, ...todos]
        settodos(updatedTodos);
    };

    let updatetodo = (todoId, newValue) => {
        settodos(prev => prev.map(value => (value.id === todoId ? newValue : value)));
    }
    let removetodo = id => {
        let removearr = [...todos].filter(todo => todo.id !== id);
        settodos(removearr);
    };
    let completeTodo = id => {
        let newupdatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        settodos(newupdatedTodos);
    };

    return (
        <>
            <TodoForm onSubmit={addtodo} />
            <Todo todos={todos} completeTodo={completeTodo} removetodo={removetodo} updatetodo={updatetodo} />
        </>

    )
}
export default TodoList
