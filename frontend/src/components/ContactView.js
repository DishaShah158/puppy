import React from 'react';

export default function ContactView() {
  const handleLetterSubmit = (e) => {
    e.preventDefault();
    alert('Letter posted successfully! We will contact you soon.');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <main className="fade-in contact-container">
      
      <div className="contact-header">
        <h1 className="font-serif">Get in touch with us</h1>
        <p>Have questions about our puppie process? Fill out the form, and our team will get back to you promptly.  we'd love to hear from you!</p>
      </div>

      <div className="contact-grid">
        
        {/* Left Column: Info & Card */}
        <div className="contact-info-col">
          <button 
            className="btn-whatsapp" 
            onClick={openWhatsApp}
            style={{display: 'inline-block', width: 'max-content', padding: '0.75rem 1.5rem', fontSize: '1.125rem'}}
          >
            WhatsApp +1234567890
          </button>
          
          <div className="info-block">
            <h4>call us</h4>
            <p>+1234567890</p>
          </div>
          
         

          <div className="showroom-card">
            <div className="awning"></div>
            <div className="sc-content">
              <h3 className="font-serif">Visit us in  Dubai</h3>
              <p>Step into our Dubai showroom and experience the joy of choosing your puppy face-to-face.</p>
      
    
              <div className="sc-img-box">
                 <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=500&q=80" alt="Showroom Puppy" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Letter Form */}
        <div>
          <form className="letter-paper" onSubmit={handleLetterSubmit}>
         
            
            <div className="letter-content">
              <p className="dear font-script">Dear TeddyPups</p>
              
              <div className="letter-line">
                my name is 
                <input type="text" className="letter-input" placeholder="john" required style={{width: '200px'}} />
                , and you can reach me on 
                <input type="tel" className="letter-input" placeholder="+9087654321" required style={{width: '180px'}} />
                 or by email at 
                <input type="email" className="letter-input" placeholder="optional" style={{width: '200px'}} />.
              </div>
              
              <div className="letter-line">
                I live in 
                <input type="text" className="letter-input" placeholder="e.g. Dubai Marina" style={{width: '220px'}} />
                , and I'm curious about 
                <select className="letter-input">
                  <option>any puppy (not sure yet)</option>
                  <option>Maltipoo</option>
                  <option>Pomeranian</option>
                  <option>Poodle</option>
                </select>.
              </div>

              <div className="letter-footer">
                <span className="font-script">with love, a future puppy parent</span>
                <button type="submit" className="btn-primary" style={{padding: '0.75rem 2rem', fontSize: '1.25rem'}}>Post my letter</button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </main>
  );
}