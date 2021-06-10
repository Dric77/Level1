import React, { useState } from 'react';
import Input from './Input';
import TodoList from './TodoList';


function TodoBody(props) {

    const [title, setTitle] = useState('');
    const [data, setData] = useState([]);
    const [editTodos, setEditTodos] = useState('s');

    
    let todoList = document.getElementsByClassName('todoList');
    let tmp = '';

    let handleSubmit = (e, index) => {
        e.preventDefault();
        
        setData(
           [
            {
                title: title,
                checked: false,
                id: index,
                isEditing: false
            },
            ...data
           ]
        );
        
        setTitle('');
    }

    let updateTodo = (e) => {
        // tmp = [...data];
        console.log("dcsa")
    }

    return(
        <div className="todo-body">
            
            <h2 className='title'>Todo({data.length}) </h2>
            <form onSubmit={handleSubmit} className="form" >
                <Input 
                    className="input" 
                    title={title} 
                    setTitle={setTitle}
                />
                <button type="submit" className='add-btn' >Add Todo</button>
            </form>
          
          <TodoList data={data} setData={setData}  />

        </div>
    )
}

export default TodoBody;