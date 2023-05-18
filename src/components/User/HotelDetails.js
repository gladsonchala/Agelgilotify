import React from 'react';

function HotelDetails({ hotel }) {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>{hotel.name}</h2>
      <p style={{ marginBottom: '10px' }}>Location: {hotel.location}</p>
      <p style={{ marginBottom: '10px' }}>Price Range: {hotel.priceRange}</p>
      <div>
        <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Photos:</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {hotel.photos.map((photo) => (
            <img
              key={photo.id}
              src={photo.url}
              alt={`Photo of ${hotel.name}`}
              style={{ width: '200px', height: '150px', objectFit: 'cover', marginRight: '10px', marginBottom: '10px' }}
            />
          ))}
        </div>
      </div>
      {/* Render additional hotel details and functionalities as needed */}
    </div>
  );
}

export default HotelDetails;