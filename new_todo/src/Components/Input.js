import React from 'react';

const Input = (props) => {

    let rendomId = 0;

    let handleChange = (e) => {
        props.setInput(e.target.value)
    }

    let handleSubmit = () => {
        props.setData([
            ...props.data,
            {checked: false, text: props.input, editing: false, id: Math.floor( Math.random() * 1000)}
        ])
    }

    
    return(
        <div>

            <input 
                type="text"
                placeholder="Enter Todo"
                value={props.input}
                onChange={e => {handleChange(e)}}
            />
            <button onClick={handleSubmit} >Add</button>

        </div>
    )
};

export default Input;