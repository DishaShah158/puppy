import React from 'react';

export default function GoneHomeView({ setCurrentView }) {
  const goneHomePuppies = [
    { name: "Ace", breed: "Pomeranian, boy", loc: "TEDDYPUPS", img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=85" },
    { name: "Leo", breed: "Poodle, boy", loc: "TEDDYPUPS", img: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&q=85" },
    { name: "Mia", breed: "Maltipoo, girl", loc: "DUBAI SHOWROOM", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=85" },
    { name: "Pomeranian", breed: "Boy", loc: "TEDDYPUPS", img: "https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=400&q=85" },
    { name: "Ollie", breed: "Pomsky, boy", loc: "TEDDYPUPS", img: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&q=85" },
    { name: "Bruno", breed: "Maltipoo, boy", loc: "DUBAI SHOWROOM", img: "https://images.unsplash.com/photo-1537151608804-ea2aa1427189?auto=format&fit=crop&w=400&q=85" },
    { name: "Charlie", breed: "Maltese, boy", loc: "TEDDYPUPS", img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=85" },
    { name: "Daisy", breed: "Pomeranian, girl", loc: "DUBAI SHOWROOM", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=85" }
  ];

  const fallbackImage =
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=85";

  return (
    <main className="fade-in gh-page-container">
      <div className="gh-page-header">
        <h1 className="font-serif">Gone home </h1>
        <p>Every puppy here has already joined a loving family. Looking for one just like them? Tell us — we'll help you find your match.</p>
        <button className="btn-primary" onClick={() => setCurrentView('puppies')}>
          See available puppies
        </button>
      </div>

      <div className="ticket-grid">
        {goneHomePuppies.map((pup, idx) => (
          <div key={idx} className="ticket-card">
            <div className="ticket-main">
              <img
                src={pup.img}
                alt={pup.name}
                className="ticket-img"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = fallbackImage;
                }}
              />
              <div className="ticket-info">
                <span className="ticket-top-text">one home</span>
                <h3 className="ticket-name">{pup.name}</h3>
                <span className="ticket-breed">{pup.breed}</span>
                <div className="ticket-route">
                  <span>{pup.loc}</span>
                  <span>HOME ♥</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}