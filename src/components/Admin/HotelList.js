import React from 'react';

function HotelList({ hotels, deleteHotel, editHotel }) {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Hotel List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {hotels.map((hotel, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <div style={{ backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '4px' }}>
              <h3 style={{ marginBottom: '5px' }}>{hotel.name}</h3>
              <p style={{ marginBottom: '5px' }}>Location: {hotel.location}</p>
              <p style={{ marginBottom: '10px' }}>Price Range: {hotel.priceRange}</p>
              <div>
                <button
                  onClick={() => editHotel(index)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#2196f3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginRight: '10px',
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteHotel(index)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HotelList;