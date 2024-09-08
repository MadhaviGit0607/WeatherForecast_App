import React from 'react';

const CityRow = ({ city, onSelectCity }) => (
  <tr onClick={() => onSelectCity(city.name)}>
    <td>{city.name}</td>
    <td>{city.country}</td>
  </tr>
);


export default CityRow;
