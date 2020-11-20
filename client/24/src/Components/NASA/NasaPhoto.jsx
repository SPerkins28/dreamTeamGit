import React, { useState, useEffect } from 'react';
import { usePosition } from 'use-position';
import '../css/nasa.css'


const API_KEY = 'QWEYCV5whyJtwFLfFIXoBusAkfKjr2I0XTztLq0k';



const Nasa = () => {

    const [results, setResults] = useState([]);

    const {
        latitude,
        longitude,
    } = usePosition();
    


    const getPicture = () => {
        fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${longitude}&lat=${latitude}&date=2020-01-20&api_key=${API_KEY}` , {
            method: 'GET',
            // headers:{
            //      'Content-Type': 'application/json' 
            // }
        })
        .then(res => {setResults(res);console.log(res)})
    };
    useEffect(() => {
        if (!latitude || !longitude) return;
        getPicture();
    },[latitude,longitude])

    return (
        <div className="container">
            <h1>Satellite Picture</h1>
            <img alt='nasa sat' src={results.url} width='500px' height='500px'/>
        </div>
    )
}

export default Nasa;


