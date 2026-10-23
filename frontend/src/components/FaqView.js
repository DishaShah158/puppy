import React from 'react';

export default function FaqView() {
  const faqs = [
    { q: "Where do your puppies come from?", a: "Our puppies come from highly vetted, ethical breeders both locally here in Dubai and internationally, primarily from specialized teacup breeders in South Korea." },
    { q: "Are teacup puppies healthy?", a: "Yes! While they are very small, we only source puppies from bloodlines with proven health records." },
    { q: "What is included when I take a puppy home?", a: "Every TeddyPup comes with their complete vaccination records, microchip, a veterinary health certificate, a starter kit, and a comprehensive care guide." },
  ];

  return (
    <main className="fade-in faq-container">
      <div className="faq-header">
        <h2 className="font-serif">Frequently Asked Questions</h2>
        <p>Everything you need to know about bringing your new best friend home.</p>
      </div>
      
      <div className="faq-grid">
        <div className="faq-sticky">
          <div className="faq-img-box">
            <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80" alt="Curious Puppy" />
            <div className="faq-badge">
              ask us anything!
            </div>
          </div>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={index} className="faq-item">
              <summary className="faq-summary">
                <span>{index + 1}. {faq.q}</span>
                <span className="faq-icon">
                  <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="faq-content">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}
