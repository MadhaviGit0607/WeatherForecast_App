import React from 'react';
import { useParams } from 'react-router-dom';

const WeatherPage = () => {
  const { city } = useParams();

  return (
    <div>
      <h1>Weather Details</h1>
      <weatherDetails city={city} />
    </div>
  );
};

export default WeatherPage;
