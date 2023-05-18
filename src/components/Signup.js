import React, { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // TODO: Implement signup functionality using email and password
    // You can use Firebase authentication or any other authentication method of your choice
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Signup</h2>
      <form onSubmit={handleSignup}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '5px' }} />
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