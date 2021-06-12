import React, { useState } from  'react';
import Input from './Input';
import TodoList from './TodoList';

const TodoBody = () => {

    const [input, setInput] = useState('');
    const [data, setData] = useState([]);

    return(
        <div className="todo-body">

          <Input
            setInput={setInput}
            input={input}
            data={data}
            setData={setData}
        />

        <TodoList 
            data={data}
            setData={setData}
        />

        </div>
    )
};

export default TodoBody;