import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <h5 className="rounded mx-auto d-block text-center m-4">Excellence Interview - Task 1 </h5>
      <div className="container">
        <div className="row">
          <div className="col-sm text-white bg-primary  p-4 .justify-content-sm-center rounded " style={{ width: '28rem' }}>
            <h1 className="col-xs-1 text-center"> Todo List </h1>
            <TodoList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
