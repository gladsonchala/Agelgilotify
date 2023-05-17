import React, { useState } from 'react';

function AdminDashboard() {
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
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={handleAddHotel}>Add Hotel</button>
      <ul>
        {hotels.map((hotel, index) => (
          <li key={index}>
            <div>
              <h3>{hotel.name}</h3>
              <p>Location: {hotel.location}</p>
              <p>Price Range: {hotel.priceRange}</p>
              <button onClick={() => handleDeleteHotel(index)}>Delete Hotel</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
