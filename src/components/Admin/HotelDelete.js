import React from 'react';

function HotelDelete({ hotel, deleteHotel }) {
  const handleDelete = () => {
    deleteHotel(hotel.id);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Delete Hotel</h2>
      <p style={{ marginBottom: '10px' }}>Are you sure you want to delete {hotel.name}?</p>
      <button
        onClick={handleDelete}
        style={{
          padding: '8px 16px',
          backgroundColor: '#ff0000',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default HotelDelete;