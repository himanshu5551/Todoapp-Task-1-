import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { TiTick } from 'react-icons/ti';
function Todo({ todos, completeTodo, removetodo, updatetodo }) {
    let [Todo, setTodo] = useState({
        id: null,
        value: ''
    });
    
    let submitupdate = value =>{
        updatetodo(Todo.id, value)
        setTodo({
            id:null,
            value:''
        })
    }
    if(Todo.id){
        
        return( 
        <div>
        <TodoForm Todo={Todo} onSubmit={submitupdate}/>
        </div>
        );
    }
    return todos.map((todo, index) => (
        <>
        <div key={index} className={todo.isComplete ? "todo_rowcomplete" : "todo_row"}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
               
                <span class="tooltiptext">click on text to mark as complete</span>
               
            </div>
            <div className="icons">
                <AiOutlineDelete onClick={() => removetodo(todo.id)} className='delete_icon'  title="Delete item" />
                <FiEdit onClick={()=>setTodo({ id: todo.id, value: todo.text })} className='edit_icon' title="Edit item" />
                
            </div>
            <TiTick  className='tick_icon'/>
        </div>
        
         </>
    ))
}

export default Todo
