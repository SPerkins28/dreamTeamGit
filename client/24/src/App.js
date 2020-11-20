import React from 'react';
import './App.css';
import NasaPhoto from "./Componets/NASA/NasaPhoto"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Location from './Components/geoLocate/Location';
import Restaurants from './Components/Restaurants/Restaurants';
import React from 'react';
import Weather from './WeatherApi/Weather';

function App() {
  return (
    <div className="App">
    <Location />
        <NasaPhoto />
        <hr/>
        <Weather />
        <hr/>
          <h1>Restaurants Near You</h1>
          <br/>
        <Restaurants />
    </div>
  );
}

export default App;
