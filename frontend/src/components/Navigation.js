import React from 'react';

export default function Navigation({ setCurrentView }) {
  const openWhatsApp = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => setCurrentView('home')}>
        <span>🐾</span>
        <span>TeddyPups</span>
      </div>
      <div className="nav-links">
        <button onClick={() => setCurrentView('home')}>Home</button>
        <button onClick={() => setCurrentView('puppies')}>Puppies</button>
        <button onClick={() => setCurrentView('how-it-works')}>How it works</button>
        <button onClick={() => setCurrentView('faq')}>FAQ</button>
        <button onClick={() => setCurrentView('contact')}>Visit & contact</button>
        <button onClick={() => setCurrentView('happy-families')}>Happy families</button>
      </div>
      <button className="btn-whatsapp" onClick={openWhatsApp}>
        WhatsApp us
      </button>
    </nav>
  );
}