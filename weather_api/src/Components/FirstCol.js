import React, { useEffect, useState } from 'react';
import '../App.scss';
import HourlyBtn from './HourlyBtn';

import {GetData} from './GetAPI';
import  {CurrentTime} from './CurrentTime';


const FirstCol = () => {

  const [data, setData] = useState();

    
  let APIkey = 'b90d5851d1184aff9356323979e96021';
  let cityname = 'tbilisi';
  let url = "https://api.weatherbit.io/v2.0/current?city=Tbilisi&key=b90d5851d1184aff9356323979e96021&include=minutely";

 useEffect( () => {
    const GetData = async (url, name) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    setData(data)
}
 }, [] )

  GetData(url);
  console.log( "data from st" + data)

return(

  <div className="col-4">

    <div className="city-detail">
      <div className="city-name">
        <h4> {CurrentTime()} </h4>
        <h2>  </h2>
      </div>

    <div className="temperature-detail">
      <div className="main-temperature">
        <img src="http://openweathermap.org/img/wn/10d@2x.png" />
        <h2> </h2>
      </div>
      <div className='feels-like'>
        <h6> feel like </h6>
        <h6> </h6>
        <h6>  </h6>
      </div>
      <div className="row mt-1 detail">
        <div className="col-6">
          <ul className="ul">
            <li>
                m/s NNW
            </li>
            <li>
              humidity: %
            </li>
            <li>
               m/s NNW
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="ul">
            <li>
               m/s NNW
            </li>
            <li>
              humidity: %
            </li>
            <li>
               m/s NNW
            </li>
          </ul>
        </div>
      </div>
    </div>

      <HourlyBtn />

    </div>

  </div>
)

};

export default FirstCol;