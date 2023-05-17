import React from 'react';

function HotelList({ hotels, deleteHotel }) {
  return (
    <div>
      <h2>Hotel List</h2>
      <ul>
        {hotels.map((hotel, index) => (
          <li key={index}>
            <div>
              <h3>{hotel.name}</h3>
              <p>Location: {hotel.location}</p>
              <p>Price Range: {hotel.priceRange}</p>
              <button onClick={() => deleteHotel(index)}>Delete Hotel</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HotelList;
