import React from 'react';

export default function Footer({ setCurrentView }) {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo" onClick={() => setCurrentView('home')}>
            <span>🐾</span>
            <span>TeddyPups</span>
          </div>
          <p>Premium teacup puppies in Dubai. From our ethical global breeders right into your arms.</p>
        </div>
        
        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <button onClick={() => setCurrentView('home')}>Home</button>
          <button onClick={() => setCurrentView('puppies')}>Available Puppies</button>
          <button onClick={() => setCurrentView('how-it-works')}>How it works</button>
          <button onClick={() => setCurrentView('faq')}>FAQ</button>
          <button onClick={() => setCurrentView('happy-families')}>Happy Families</button>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Get in Touch</h4>
          <p>WhatsApp: 1234567890</p>
          <p> Dubai</p>
        </div>

      </div>
      
      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TeddyPups. All rights reserved.</p>
      </div>
    </footer>
  );
}