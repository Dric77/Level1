import React from 'react';

const Searchbtn = () => {

    let handleClick = () => {
        console.log('clicked search')
    }

    return(
        <button className="search-btn" onClick={handleClick}>
            Search
        </button>
    )
};

export default Searchbtn;