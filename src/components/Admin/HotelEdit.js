import React, { useState } from 'react';

function HotelEdit({ hotel, updateHotel }) {
  const [updatedHotel, setUpdatedHotel] = useState({
    name: hotel.name,
    location: hotel.location,
    priceRange: hotel.priceRange,
  });

  const handleInputChange = (e) => {
    setUpdatedHotel({ ...updatedHotel, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateHotel(updatedHotel);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Edit Hotel</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Hotel Name:
          <input
            type="text"
            name="name"
            value={updatedHotel.name}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Location:
          <input
            type="text"
            name="location"
            value={updatedHotel.location}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Price Range:
          <input
            type="text"
            name="priceRange"
            value={updatedHotel.priceRange}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: '8px 16px',
            backgroundColor: '#2196f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Update Hotel
        </button>
      </form>
    </div>
  );
}

export default HotelEdit;