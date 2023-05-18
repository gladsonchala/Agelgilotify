import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const handleSignup = async (e) => {
  e.preventDefault();

  try {
    // Create user with email and password
    const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);

    // Add additional user data to the database
    const userData = {
      name: name, // Replace 'name' with the variable holding the user's name
      isAdmin: false, // Set 'isAdmin' to false by default
    };

    // Store user data in the database
    await firebase.database().ref('users/' + user.uid).set(userData);

    // Signup successful, you can redirect to another page or perform additional actions
  } catch (error) {
    // Handle signup error
    console.log(error);
  }
};

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Create user with email and password
      const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);

      // Add additional user data to the database
      const userData = {
        name: name,
        isAdmin: false,
      };

      // Store user data in the database
      await firebase.database().ref('users/' + user.uid).set(userData);

      // Signup successful, you can redirect to another page or perform additional actions
    } catch (error) {
      // Handle signup error
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Signup</h2>
      <form onSubmit={handleSignup}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '5px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '5px' }} />
        </div>
        <button type="submit" style={{ display: 'block', width: '100%', padding: '10px', background: '#333', color: '#fff', border: 'none' }}>Signup</button>
      </form>
    </div>
  );
}
export default Signup;