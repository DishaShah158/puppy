import React, { useState } from 'react';

export default function HowItWorksView() {
  const [wayToggle, setWayToggle] = useState('dubai');

  return (
    <main className="fade-in hiw-container">
      <div className="hiw-header">
        <h1 className="font-serif">How it works</h1>
        <p>Whether you choose to visit us locally or order a premium breed from overseas, TeddyPups is here to make the experience unforgettable.</p>
      </div>

      <div className="hiw-nav-pills">
        <button className="hiw-pill active">1. Two ways home</button>
        <button className="hiw-pill">2. Our premium puppy promise</button>
        <button className="hiw-pill">3. Delivery & collection</button>
        <button className="hiw-pill">4. Why choose us</button>
      </div>

      {/* Section 1: Two Ways Home */}
      <section className="hiw-section">
        <div className="hiw-section-top">
          <div>
            <p className="hiw-sub">choose your way</p>
            <h2 className="hiw-title font-serif">Two ways home</h2>
          </div>
          <div className="hiw-toggle">
            <button className={wayToggle === 'dubai' ? 'active' : ''} onClick={() => setWayToggle('dubai')}>
              In Dubai <small>meet in person</small>
            </button>
            <button className={wayToggle === 'imported' ? 'active' : ''} onClick={() => setWayToggle('imported')}>
              Imported <small>under expert request</small>
            </button>
          </div>
        </div>

        <div className="hiw-split">
          <div>
            {wayToggle === 'dubai' ? (
              <>
                <h3 className="font-serif">Meet your puppy in person</h3>
                <p>Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. We source healthy, well-socialized puppies from trusted local breeders, ensuring they're raised with care, proper nutrition, and veterinary checks.</p>
              </>
            ) : (
              <>
                <h3 className="font-serif">Global premium sourcing</h3>
                <p>Looking for a specific teacup breed? We work with the highest-rated ethical breeders internationally to bring your dream puppy safely to you. All import paperwork and travel logistics are fully handled by our expert team.</p>
              </>
            )}
          </div>
          <div className="hiw-illustration">
            🏢 🏙️ 🌇
          </div>
        </div>

        <div className="step-cards">
          <div className="step-card">
            <div className="step-icon" style={{color: '#f59e0b', backgroundColor: '#fef3c7'}}>🔍</div>
            <p className="step-num">Step 1</p>
            <h4>Explore our puppies</h4>
            <p>Browse our website to view the available puppies. Each listing includes photos, breed details, age, and health information.</p>
          </div>
          <div className="step-card">
            <div className="step-icon" style={{color: '#ef4444', backgroundColor: '#fee2e2'}}>❤️</div>
            <p className="step-num">Step 2</p>
            <h4>Choose your puppy</h4>
            <p>Once you find a puppy you love, open their profile for more information or to enquire further. You can also reach out to us directly.</p>
          </div>
          <div className="step-card">
            <div className="step-icon" style={{color: '#3b82f6', backgroundColor: '#dbeafe'}}>🐶</div>
            <p className="step-num">Step 3</p>
            <h4>Meet before you choose</h4>
            <p>Spend time bonding before making your decision in our safe and comfortable viewing rooms.</p>
          </div>
          <div className="step-card">
            <div className="step-icon" style={{color: '#10b981', backgroundColor: '#d1fae5'}}>🚚</div>
            <p className="step-num">Step 4</p>
            <h4>Pick-up or delivery</h4>
            <p>Pick up your puppy from us or have them delivered to your home within Dubai safely and reliably.</p>
          </div>
        </div>
      </section>

      {/* Section 2: Puppy Promise */}
      <section className="hiw-section">
        <div className="promise-box">
          <p className="hiw-sub">puppy passport</p>
          <h2 className="hiw-title font-serif">Our premium<br/>puppy promise</h2>
          
          <div className="promise-grid">
            <div className="promise-item">
              <div className="promise-icon">🏥</div>
              <h4 className="font-serif">Hand-selected breeders</h4>
              <p>We work only with breeders who uphold the highest ethical and health standards.</p>
            </div>
            <div className="promise-item">
              <div className="promise-icon">✈️</div>
              <h4 className="font-serif">Full transparency</h4>
              <p>Photos, videos, and health certificates are shared before your puppy travels.</p>
            </div>
            <div className="promise-item">
              <div className="promise-icon">🛡️</div>
              <h4 className="font-serif">Safe, stress-free delivery</h4>
              <p>We handle every detail of the import process, so your puppy arrives happy and healthy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Delivery */}
      <section className="hiw-section">
        <h2 className="hiw-title font-serif mb-4">Delivery &<br/>collection</h2>
        <p style={{maxWidth: '40rem', color: 'rgba(74, 59, 50, 0.8)', fontSize: '1.125rem', marginBottom: '2rem'}}>
          From a same-day visit in Downtown Dubai to a flight from Korea, every puppy travels comfortably and arrives safely.
        </p>

        <div className="delivery-grid">
          <div>
            <div className="del-item">
              <h4>Take your puppy home the same day</h4>
              <p>Local puppies are available immediately — visit, fall in love, and go home together.</p>
            </div>
            <div className="del-item">
              <h4>Delivery within Dubai</h4>
              <p>Prefer to stay home? We deliver your puppy to your door within Dubai, safely and comfortably.</p>
            </div>
            <div className="del-item">
              <h4>Safe international cargo</h4>
              <p>We handle all the paperwork and ensure comfortable travel so your puppy arrives happy.</p>
            </div>
            <div className="del-item">
              <h4>Worldwide delivery</h4>
              <p>Our trusted international cargo partners ensure your new furry friend travels safely, no matter the distance.</p>
            </div>
          </div>
          
          <div className="del-illustration">
             <span style={{fontWeight: 700, fontSize: '0.875rem', zIndex: 10, alignSelf: 'flex-end', paddingBottom: '0.5rem'}}>Korea</span>
             <div className="del-plane">✈️</div>
             <div className="del-path"></div>
             <span style={{fontWeight: 700, fontSize: '0.875rem', zIndex: 10, alignSelf: 'flex-end', paddingBottom: '0.5rem'}}>Dubai</span>
          </div>
        </div>
      </section>

    </main>
  );
}
