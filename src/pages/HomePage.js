import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CitiesTable from '../components/CitiesTable';

const HomePage = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const navigate = useNavigate();
  
  const handleSelectCity = (city) => {
    setSelectedCity(city);
    navigate(`/weather/${encodeURIComponent(city)}`);
  };

  return (
    <div>
      <h1>City Weather Search</h1>
      <CitiesTable onSelectCity={handleSelectCity} />
      {selectedCity && <p>Selected City: {selectedCity}</p>}
    </div>
  );
};

export default HomePage;
