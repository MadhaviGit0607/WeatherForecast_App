const API_KEY = 'e31ebff5b65ca0696cbff1adcd49393f';
const API_URL = 'https://public.opendatasoft.com/explore/dataset/geonames-all-cities-with-a-population-1000/api/';

export const fetchCities = async (page = 1) => {
  try {
    const response = await fetch(`${API_URL}?page=${page}&apikey=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching city data:', error);
    throw error;
  }
};

export const fetchWeather = async (cityId) => {
    const apiKey = 'e31ebff5b65ca0696cbff1adcd49393f';
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  };
  
