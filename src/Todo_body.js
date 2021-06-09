import React, { useState } from 'react';


function TodoBody(props) {

    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');
    const [editTodos, setEditTodos] = useState('s');

    
    let todoList = document.getElementsByClassName('todoList');
    let tmp = '';
    
    let handleChange = (e) => {
       setTitle(e.target.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        
        setData(
           [
            title,
            ...data
           ]
        );
        
        setTitle('');
    }

    let delate = (e, index) => {
        tmp = data;
        tmp.splice(index, 1)
        setData( [...tmp] )
    }

    let editTodo = (index, el) => {
        tmp = todoList[index];
        todoList[index].innerHTML = `<input id="editedInput" type='text' value="${el}" />`;
        document.getElementById('editedInput').addEventListener('change', (e) => (updateTodo(e)))
    }

    let updateTodo = (e) => {
        setTitle('sdsfdsa');
        
        console.log(title)
    }

    return(
        <div className="todo-body">
            
            <h2 className='title'>Todo({data.length}) </h2>
            <form onSubmit={handleSubmit} className="form" >
                <input
                    className="input"
                    name="tittle"
                    placeholder="Press enter to add todo"
                    value={title}
                    onChange={handleChange}
                />

                <button type="submit" className='add-btn' >Add Todo</button>
            </form>

            <ul className="todos">

                {data.map((el, index) => 
                    <li className="todoList" key={index} onDoubleClick={() => {editTodo(index,el)}}>
                        <div className="content">
                        <input type="checkbox" className="checkbox" />
                        {el}
                        </div>
                        <button className onClick={(e) => {delate(e, index)}}>X</button>
                    </li> )}

            </ul>
        </div>
    )
}

export default TodoBody;