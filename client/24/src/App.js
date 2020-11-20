import './App.css';
import Location from './Components/geoLocate/Location';
import Restaurants from './Components/Restaurants/Restaurants';
import React from 'react';
import Weather from './WeatherApi/Weather';

function App() {
  return (
    <div className="App">
        <Location />
      <div></div>
        <hr/>
        <div>
          <h1>Restaurants Near You</h1>
          <br/>
        </div>
        <Restaurants />
      
      x
          
        <Location />
        <Weather />
    </div>
  );
}

export default App;
