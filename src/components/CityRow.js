import React from 'react';

const CityRow = ({ city, onClick }) => {
    const handleClick = () => {
        onClick(city.fields.name);
    };

    const handleContextMenu = (e) => {
        e.preventDefault();
        window.open(`/weather/${city.fields.name}`, '_blank');
    };

    return (
        <tr>
            <td onClick={handleClick} onContextMenu={handleContextMenu}>{city.fields.name}</td>
            <td>{city.fields.cou_name_en}</td>
            <td>{city.fields.timezone}</td>
        </tr>
    );
};

export default CityRow;
