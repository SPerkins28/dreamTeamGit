import React from 'react';
import './App.css';
import Location from './geoLocate/Location';
import Weather from './WeatherApi/Weather';

function App() {
  return (
    <div className="App">
      
          
        <Location />
        <Weather />
    </div>
  );
}

export default App;
