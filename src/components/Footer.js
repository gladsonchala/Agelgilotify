import React from 'react';

function Footer() {
  return (
    <footer style={{ background: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
      <p style={{ margin: 0, fontSize: '14px' }}>
        &copy; {new Date().getFullYear()} Agelgilotify. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;