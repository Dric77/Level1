import React from 'react';


const Checkbox = (props) => {

    let handleClick = () => {   
        props.setData(props.data.map((item) => {
            if(item.id === props.id) {
                return{
                    ...item, checked: !item.checked
                }
            }
            return item;
        }))
    }

    return(
        <div>
            <input
                type='checkbox'
                checked={props.data.checked}
                onClick={handleClick}
            />
        </div>
    )
};

export default Checkbox;