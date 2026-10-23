import React from 'react';


export default function HomeView({ setCurrentView, setFilterAndGo }) {
  const fallbackPuppyImage =
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=500&q=85";

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackPuppyImage;
  };

  return (
    <main className="fade-in">
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-script">your tiny best friend awaits</p>
          <h1 className="hero-title">Luxury teacup<br />dogs in Dubai</h1>
          <p className="hero-desc">
            Discover the perfect addition to your family at our boutique, or let us carefully import a rare breed from our global network of ethical partners.
          </p>
          <div className="hero-buttons">
            {/* Navigates to Puppies View */}
            <button onClick={() => setCurrentView('puppies')} className="btn-primary">
              Explore available puppies
            </button>
            {/* Opens WhatsApp */}
            <button onClick={() => window.open('https://wa.me/971541676733', '_blank')} className="btn-secondary">
              Chat on WhatsApp
            </button>
          </div>
        </div>

        <div className="peekaboo-container">
          <img onError={handleImageError} src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=85" alt="Peekaboo puppy" className="peekaboo-img p-img-1" />
          <img onError={handleImageError} src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&q=85" alt="Peekaboo puppy" className="peekaboo-img p-img-2" />
          <img onError={handleImageError} src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=85" alt="Peekaboo puppy" className="peekaboo-img p-img-3" />
          <img onError={handleImageError} src="https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=400&q=85" alt="Cute puppy" className="peekaboo-img p-img-4" />
          <img onError={handleImageError} src="https://images.unsplash.com/photo-1537151608804-ea2aa1427189?auto=format&fit=crop&w=400&q=85" alt="Fluffy puppy" className="peekaboo-img p-img-5" />
          <img onError={handleImageError} src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400&q=85" alt="Adorable puppy" className="peekaboo-img p-img-6" />
        </div>

        <div className="hero-wavy"></div>
      </section>

      <section className="meet-section">
        <h2>Find Your Perfect Match</h2>
        <div className="meet-grid">
          <div className="meet-card mc-white">
            <div className="card-badge">Available Locally</div>
            <img onError={handleImageError} src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=500&q=85" alt="Dubai Showroom puppy" />
            <h3>Visit Our Boutique</h3>
            <p>Interact and bond with our adorable puppies right here in the city. Take your time getting to know them before making a choice.</p>
            {/* Sets filter to Dubai and navigates to Puppies */}
            <button onClick={() => setFilterAndGo('where', 'Dubai')} className="btn-meet">
              View local puppies
            </button>
          </div>

          <div className="meet-card mc-tan">
            <div className="card-badge">Flown to You</div>
            <div className="meet-illustration">
              <div className="plane-icon">✈️</div>
              <div className="dashed-line"></div>
              <div className="flight-text">
                <span>Seoul</span> <span>Dubai</span>
              </div>
            </div>
            <h3>Elite International Breeds</h3>
            <p>Looking for something unique? We safely transport top-tier teacup breeds from pristine overseas kennels directly into your arms.</p>
            {/* Sets filter to Imported and navigates to Puppies */}
            <button onClick={() => setFilterAndGo('where', 'Imported')} className="btn-meet">
              Browse overseas puppies
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}