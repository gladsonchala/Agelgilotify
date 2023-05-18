import React, { useState } from 'react';

function AdminPanel() {
  const [hotels, setHotels] = useState([]);

  const handleAddHotel = () => {
    // Logic to add a new hotel to the list
    const newHotel = {
      name: 'New Hotel',
      location: 'New Location',
      priceRange: '100-500',
      photos: [],
    };
    setHotels([...hotels, newHotel]);
  };

  const handleDeleteHotel = (index) => {
    // Logic to delete a hotel from the list
    const updatedHotels = [...hotels];
    updatedHotels.splice(index, 1);
    setHotels(updatedHotels);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Admin Panel</h2>
      <button
        onClick={handleAddHotel}
        style={{ padding: '5px 10px', marginBottom: '10px' }}
      >
        Add Hotel
      </button>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {hotels.map((hotel, index) => (
          <li
            key={index}
            style={{
              background: '#f4f4f4',
              padding: '10px',
              marginBottom: '10px',
            }}
          >
            <div>
              <h3 style={{ marginBottom: '5px' }}>{hotel.name}</h3>
              <p style={{ margin: '0' }}>Location: {hotel.location}</p>
              <p style={{ margin: '0' }}>Price Range: {hotel.priceRange}</p>
              <button
                onClick={() => handleDeleteHotel(index)}
                style={{
                  padding: '5px 10px',
                  marginTop: '5px',
                }}
              >
                Delete Hotel
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;