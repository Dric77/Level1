import React from 'react';


const HourlyBtn = () => {

    let handleModal = () => {
        console.log('opened modal')
    }
    
    return(
        <button onClick={handleModal} >Hourly Frocast</button>
    )
};

export default HourlyBtn;