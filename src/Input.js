import React from 'react';


function Input(props) {

    let handleChange = (e) => {
        props.setTitle(e.target.value)
     }

     return(
        <div>
             <input
                 name="tittle"
                 placeholder="Press enter to add todo"
                 value={props.title}
                 onChange={handleChange}
             />
        </div>
     )
 
};


export default Input;