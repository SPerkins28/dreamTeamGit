import './App.css';
import Location from './Components/geoLocate/Location';
import Restaurants from './Components/Restaurants/Restaurants';

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
      
    </div>
  );
}

export default App;
