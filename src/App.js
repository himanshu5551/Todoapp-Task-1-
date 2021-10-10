import React from 'react';
import './App.css';

import TodoList from './components/TodoList';

function App() {
  return (
    <>
    <h1 className="heading_top">Excellence Interview - Task 1 </h1>
    <div className="todo_app">
      <h1 className="headingtodolist"> Todo List </h1>
      <TodoList />
    </div>
    </>
  );
}

export default App;
