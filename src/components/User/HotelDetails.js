import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

function HotelDetails({ hotel }) {
  const [hotelDetails, setHotelDetails] = useState(null);

  useEffect(() => {
    // Fetch hotel details from the database
    const fetchHotelDetails = async () => {
      try {
        const snapshot = await firebase.database().ref(`hotels/${hotel.id}`).once('value');
        const hotelData = snapshot.val();
        if (hotelData) {
          setHotelDetails(hotelData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchHotelDetails();
  }, [hotel.id]);

  if (!hotelDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>{hotelDetails.name}</h2>
      <p style={{ marginBottom: '10px' }}>Location: {hotelDetails.location}</p>
      <p style={{ marginBottom: '10px' }}>Price Range: {hotelDetails.priceRange}</p>
      <div>
        <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Photos:</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {hotelDetails.photos.map((photo) => (
            <img
              key={photo.id}
              src={photo.url}
              alt={`Photo of ${hotelDetails.name}`}
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