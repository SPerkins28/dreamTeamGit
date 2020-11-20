import React, {useState, useEffect} from 'react';
import {usePosition} from 'use-position';
import TempButton from './TempButton'
import './Weather.css'
import Conditions from './Weather/Conditions';

const Weather = () => {
    const {
        latitude,
        longitude,
    } = usePosition();

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}` 
        
    }
    
    const [fahrenheitWeather, setFahrenheitWeather] = useState([]);
    const [celsiusWeather, setCelsiusWeather] = useState([]);
    const [degreeType, setDegreeType] = useState('imperial');

    const getFahrenheit = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=4f8222f6dcf630b07c31a2f43d759446`,{
            method: 'GET',
            
        })
        .then(res => res.json())
        .then(res => setFahrenheitWeather(res))
    }
    const getCelsius = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=4f8222f6dcf630b07c31a2f43d759446`,{
            method: 'GET',
            
        })
        .then(res => res.json())
        .then(res => setCelsiusWeather(res))
    }
    
    useEffect(() => {
        if (!latitude || !longitude) return; 
        getFahrenheit();
        getCelsius();
    }, [latitude, longitude])
        
    return (
            <div className="location-box">
                <h1 className="display-1 jumbotron">Find Current Weather Conditions</h1>
                <div className="date">{dateBuilder(new Date())}</div>
                <TempButton degreeType = {degreeType} setDegreeType = {setDegreeType}/>
                <Conditions weather={degreeType === 'metric' ? celsiusWeather : fahrenheitWeather} />
            </div>
        )
}

export default Weather;