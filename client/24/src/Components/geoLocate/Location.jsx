import React from 'react';
import { usePosition } from 'use-position';

const Location = () => {
    const watch = true;
    const {
      latitude,
      longitude,
    } = usePosition(watch);
    
    return (
      <div className="location">
          <h3>You Be Here</h3>
        <h5 className="changePlease">latitude: {latitude}</h5>
        <h5 className="changePlease">longitude: {longitude}</h5>
      </div>
    );
};

  export default Location;