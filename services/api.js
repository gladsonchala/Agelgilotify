import { database } from './firebase';

// Retrieve hotels from the database
export const getHotels = () => {
  return database.ref('hotels').once('value').then((snapshot) => {
    const hotels = [];
    snapshot.forEach((childSnapshot) => {
      const hotel = childSnapshot.val();
      hotels.push(hotel);
    });
    return hotels;
  });
};

// Add a new hotel to the database
export const addHotel = (hotel) => {
  return database.ref('hotels').push(hotel);
};

// Update an existing hotel in the database
export const updateHotel = (hotelId, updates) => {
  return database.ref(`hotels/${hotelId}`).update(updates);
};

// Delete a hotel from the database
export const deleteHotel = (hotelId) => {
  return database.ref(`hotels/${hotelId}`).remove();
};
