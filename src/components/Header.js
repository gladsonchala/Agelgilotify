import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ background: '#333', color: '#fff', padding: '10px' }}>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center' }}>
          <li style={{ margin: '0 10px' }}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/signup" style={{ color: '#fff', textDecoration: 'none' }}>Signup</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/admin" style={{ color: '#fff', textDecoration: 'none' }}>Admin</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;