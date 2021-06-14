import React from 'react';
import './App.scss';

//import functions
import {CurrentTime} from './Components/CurrentTime';
import {WeekForecast} from './Components/WeekForecast';

//import components
import Input from './Components/Input';
import Searchbtn from './Components/Searchbtn';
import FirstCol from './Components/FirstCol';


function App() {      

  return (
    <div className="App">
      <header>
        <Input />
        <Searchbtn />
      </header>
      <div className="row" >
        
        <FirstCol />


        <div className="col-4 day-forecast">
          <h2>4 Day Forecast</h2>
           <ul className="ul">
             <li>day 1</li>
             <li>day 2</li>
             <li>day 3</li>
             <li>day 4</li>
           </ul>
        </div>

        <div className="col-4">
          <div className="city-detail">
            <h6 className='current-time'> {CurrentTime()} </h6>
            <h4> country name </h4>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
