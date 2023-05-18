import React, { useState } from 'react';

function SearchBar({ handleSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(city);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '10px'
          }}
        />
        <button
          type="submit"
          style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            background: '#333',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;