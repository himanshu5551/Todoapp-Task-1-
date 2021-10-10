import React, { useState, useEffect, useRef} from 'react';


function TodoForm(props) {
    let [Input, setInput] = useState("");

    let inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    })
    let forOnChange = (event) => {
        setInput(event.target.value);
        
    };

    let forSubmit = (event) => {
        event.preventDefault();
        setInput('');
        props.onSubmit({
           id:Math.floor(Math.random() * 10000),
           text: Input
        });
    };
    
    return (
        <>
            <form className="todo_form" onSubmit={forSubmit}>
                <input type="text" placeholder="type your text here..." value={Input} name="text" className="todo_input" autoComplete="off" onChange={forOnChange} ref={inputRef} />
                <button className="todo_button"> Add Todo </button>
            </form>
          
        </>
    )
}

export default TodoForm
