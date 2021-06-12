import React from 'react';

const Delete = (props) => {

    let handleDelete = () => {
        props.setData(props.data.filter(el => el.id !== props.id))
    }

    return(
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
};

export default Delete;