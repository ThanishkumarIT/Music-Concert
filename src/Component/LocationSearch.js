import React, { useState } from 'react';
import axios from 'axios';

const LocationSearch = () => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=YOUR_API_KEY`
      );

      // Assuming the first result is the most relevant
      const firstResult = response.data.results[0];

      setLocation({
        address: firstResult.formatted_address,
        coordinates: firstResult.geometry.location,
      });
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter location"
      />
      <button onClick={handleSearch}>Search</button>

      {location && (
        <div>
          <h2>Location Details:</h2>
          <p>Address: {location.address}</p>
          <p>Coordinates: {location.coordinates.lat}, {location.coordinates.lng}</p>
        </div>
      )}
    </div>
  );
};

export default LocationSearch;