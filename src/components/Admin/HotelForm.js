import React, { useState } from 'react';

function HotelForm({ addHotel }) {
  const [hotelData, setHotelData] = useState({
    name: '',
    location: '',
    priceRange: '',
    photos: [],
  });

  const handleInputChange = (e) => {
    setHotelData({ ...hotelData, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setHotelData({ ...hotelData, photos: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHotel(hotelData);
    setHotelData({ name: '', location: '', priceRange: '', photos: [] });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Add Hotel</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Hotel Name:
          <input
            type="text"
            name="name"
            value={hotelData.name}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '5px' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Location:
          <input
            type="text"
            name="location"
            value={hotelData.location}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '5px' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Price Range:
          <input
            type="text"
            name="priceRange"
            value={hotelData.priceRange}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '5px' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Hotel Photos:
          <input
            type="file"
            name="photos"
            multiple
            onChange={handlePhotoUpload}
            required
            style={{ width: '100%', padding: '5px' }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: '8px 16px',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Add Hotel
        </button>
      </form>
    </div>
  );
}

export default HotelForm;