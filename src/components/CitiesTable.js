import React, { Component } from 'react';
import { fetchCities } from '../services/api';
import './CitiesTable.css';

class CitiesTable extends Component {
  state = {
    cities: [],
    search: '',
    error: null,
  };

  fetchCities = async (query) => {
    try {
      const data = await fetchCities(query);
      this.setState({ cities: data, error: null });
    } catch (error) {
      console.error('Failed to fetch cities:', error);
      this.setState({ error: 'Failed to fetch cities. Please try again later.' });
    }
  };

  handleInputChange = async (event) => {
    const query = event.target.value;
    this.setState({ search: query });

    if (query.length > 2) {
      this.fetchCities(query);
    } else {
      this.setState({ cities: [] });
    }
  };

  render() {
    const { cities, search, error } = this.state;

    return (
      <div className="cities-table-container">
        <input
          type="text"
          placeholder="Search cities..."
          value={search}
          onChange={this.handleInputChange}
        />
        {error && <div className="error-message">{error}</div>}
        <table className="cities-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {cities.map((city) => (
              <tr
                key={city.geonameid}
                onClick={() => this.props.onSelectCity(city)}
              >
                <td>{city.name}</td>
                <td>{city.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CitiesTable;
