import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    // Login successful, you can redirect to another page or perform additional actions
  } catch (error) {
    // Handle login error
    console.log(error);
  }
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // Login successful, you can redirect to another page or perform additional actions
    } catch (error) {
      // Handle login error
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '5px' }}
          />
        </div>
        <button
          type="submit"
          style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            background: '#333',
            color: '#fff',
            border: 'none',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;