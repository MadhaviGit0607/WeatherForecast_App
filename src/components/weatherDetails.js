import React, { useEffect, useState } from 'react';
import { fetchWeather } from '../services/api';
import sunnyImg from '../assets/sunny.png';
import rainyImg from '../assets/rainy.png';
import cloudyImg from '../assets/cloudy.png';
import './WeatherDetails.css';

const WeatherDetails = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeather(city);
        setWeatherData(data);
      } catch (error) {
        setError('Failed to fetch weather data');
      }
    };

    if (city) {
      getWeather();
    }
  }, [city]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const weatherCondition = weatherData.weather[0].main;
  let weatherImage;

  switch (weatherCondition) {
    case 'Clear':
      weatherImage = sunnyImg;
      break;
    case 'Clouds':
      weatherImage = cloudyImg;
      break;
    case 'Rain':
      weatherImage = rainyImg;
      break;
    default:
      weatherImage = cloudyImg; // Fallback image
  }

  return (
    <div className="weather-details">
      <h2>{weatherData.name}</h2>
      <img src={weatherImage} alt={weatherCondition} className="weather-icon" />
      <p>Temperature: {weatherData.main.temp} °C</p>
      <p>Humidity: {weatherData.main.humidity} %</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDetails;
