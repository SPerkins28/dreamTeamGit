import React from 'react';
import './App.css';
import NasaPhoto from "./Components/NASA/NasaPhoto"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Location from './Components/geoLocate/Location';
import Restaurants from './Components/Restaurants/Restaurants';
import Weather from './Components/WeatherApi/Weather';

function App() {
  return (
    <div className="App">
      <Location className="locationText" />
      <br/>
      <Weather />
      <br/>
      <NasaPhoto />
      <br/>
      <Restaurants />
    </div>
  );
}

export default App;
