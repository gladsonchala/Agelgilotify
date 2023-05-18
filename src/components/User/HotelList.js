import React from 'react';

function HotelList({ hotels }) {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Hotels</h2>
      {hotels.map((hotel) => (
        <div
          key={hotel.id}
          style={{
            marginBottom: '20px',
            padding: '20px',
            background: '#f8f8f8',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}
        >
          <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{hotel.name}</h3>
          <p style={{ marginBottom: '5px' }}>Location: {hotel.location}</p>
          <p style={{ marginBottom: '5px' }}>Price Range: {hotel.priceRange}</p>
          {/* Render additional hotel details as needed */}
        </div>
      ))}
    </div>
  );
}

export default HotelList;