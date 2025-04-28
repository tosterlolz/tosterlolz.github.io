import React from 'react';
import './App.css';

const Jumpscar: React.FC = () => {
  return (
    <div className="Jumpscar">
      <img src="/assets/mrau.jpg" alt="jumpscar" style={{ width: '100vw', height: '100vh', objectFit: 'cover', position: 'fixed', top: 0, left: 0, zIndex: 9999 }} />
    </div>
  );
};

export default Jumpscar;
