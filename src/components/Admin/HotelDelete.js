import React from 'react';

function HotelDelete({ hotel, deleteHotel }) {
  const handleDelete = () => {
    deleteHotel(hotel.id);
  };

  return (
    <div>
      <h2>Delete Hotel</h2>
      <p>Are you sure you want to delete {hotel.name}?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default HotelDelete;
