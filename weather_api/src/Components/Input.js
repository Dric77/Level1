import React, { useState } from "react";
import '../App.scss';

const Input = () => {
    
    const [input, setInput] = useState('Tbilisi')

    let handleChange = (e) => {
          setInput(e.target.value)
    }

    return(
            <input
                className="search-input" 
                placeholder="enter city"
                value={input}
                onChange={handleChange}
            />
    )
};

export default Input;