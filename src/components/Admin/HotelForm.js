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
    <div>
      <h2>Add Hotel</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Hotel Name:
          <input
            type="text"
            name="name"
            value={hotelData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={hotelData.location}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Price Range:
          <input
            type="text"
            name="priceRange"
            value={hotelData.priceRange}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Hotel Photos:
          <input
            type="file"
            name="photos"
            multiple
            onChange={handlePhotoUpload}
            required
          />
        </label>
        <button type="submit">Add Hotel</button>
      </form>
    </div>
  );
}

export default HotelForm;
