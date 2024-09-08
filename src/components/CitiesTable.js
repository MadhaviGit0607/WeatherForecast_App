// src/CitiesTable.js
import React, { useState, useEffect } from 'react';

const CITIES_API = 'https://public.opendatasoft.com/explore/dataset/geonames-all-cities-with-a-population-1000/api/?disjunctive.cou_name_en&sort=name';

const CitiesTable = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const limit = 50;

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${CITIES_API}&start=${offset}&limit=${limit}`);
        const data = await response.json();
        setCities(prevCities => [...prevCities, ...data.records]);
        setHasMore(data.records.length === limit);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchCities();
  }, [offset]);

  

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 && hasMore && !loading) {
        setOffset(prevOffset => prevOffset + limit);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const filteredCities = cities.filter(city => 
    city.fields.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search cities..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {error && <div>Error: {error.message}</div>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Timezone</th>
          </tr>
        </thead>
        <tbody>
          {filteredCities.map(city => (
            <tr key={city.fields.geonameid}>
              <td><a href={`/weather/${city.fields.geonameid}`}>{city.fields.name}</a></td>
              <td>{city.fields.cou_name_en}</td>
              <td>{city.fields.timezone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default CitiesTable;
