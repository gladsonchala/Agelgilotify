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
    <div>
      <h2>Edit Hotel</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Hotel Name:
          <input
            type="text"
            name="name"
            value={updatedHotel.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={updatedHotel.location}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Price Range:
          <input
            type="text"
            name="priceRange"
            value={updatedHotel.priceRange}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Update Hotel</button>
      </form>
    </div>
  );
}

export default HotelEdit;
