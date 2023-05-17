// Validation functions

// Validate email format
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Validate password length
export const validatePassword = (password) => {
  return password.length >= 6;
};

// Validate hotel details form
export const validateHotelForm = (hotel) => {
  const errors = {};

  if (!hotel.name) {
    errors.name = 'Hotel name is required';
  }

  if (!hotel.location) {
    errors.location = 'Location is required';
  }

  if (!hotel.price) {
    errors.price = 'Price is required';
  } else if (hotel.price < 0) {
    errors.price = 'Price must be a positive number';
  }

  if (!hotel.description) {
    errors.description = 'Description is required';
  }

  return errors;
};
