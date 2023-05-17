import React from 'react';

function HotelList({ hotels }) {
  return (
    <div>
      <h2>Hotels</h2>
      {hotels.map((hotel) => (
        <div key={hotel.id}>
          <h3>{hotel.name}</h3>
          <p>Location: {hotel.location}</p>
          <p>Price Range: {hotel.priceRange}</p>
          {/* Render additional hotel details as needed */}
        </div>
      ))}
    </div>
  );
}

export default HotelList;
