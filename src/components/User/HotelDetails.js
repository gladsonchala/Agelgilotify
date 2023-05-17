import React from 'react';

function HotelDetails({ hotel }) {
  return (
    <div>
      <h2>{hotel.name}</h2>
      <p>Location: {hotel.location}</p>
      <p>Price Range: {hotel.priceRange}</p>
      <div>
        <h3>Photos:</h3>
        {hotel.photos.map((photo) => (
          <img key={photo.id} src={photo.url} alt={`Photo of ${hotel.name}`} />
        ))}
      </div>
      {/* Render additional hotel details and functionalities as needed */}
    </div>
  );
}

export default HotelDetails;
