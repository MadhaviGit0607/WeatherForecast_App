import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const WEATHER_API = 'https://api.openweathermap.org/data/2.5/weather';

const WeatherPage = () => {
  const { cityId } = useParams();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`${WEATHER_API}?id=${cityId}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
        const data = await response.json();
        setWeather(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [cityId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Weather for {weather.name}</h2>
      <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
      <p>Weather: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
      <p>Pressure: {weather.main.pressure} hPa</p>
      {/* Add more weather details as needed */}
    </div>
  );
};

export default WeatherPage;
