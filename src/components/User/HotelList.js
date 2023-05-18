import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

function HotelList() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Fetch hotels from the database
    const fetchHotels = async () => {
      try {
        const snapshot = await firebase.database().ref('hotels').once('value');
        const hotelsData = snapshot.val();
        if (hotelsData) {
          const hotelsArray = Object.keys(hotelsData).map((key) => ({
            id: key,
            ...hotelsData[key],
          }));
          setHotels(hotelsArray);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchHotels();
  }, []);

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
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
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