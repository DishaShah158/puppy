import React from 'react';

export default function HappyFamiliesView({ setCurrentView }) {
  const families = [
    {
      name: "The Anderson Family",
      puppy: "Milo, Maltipoo",
      quote: "TeddyPups made the whole process so easy. Milo has brought so much joy into our apartment in Dubai Marina! He is perfectly healthy and so well-behaved.",
      img: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=500&q=80",
      rotation: "-2deg"
    },
    {
      name: "Sarah & Mark",
      puppy: "Luna, Pomeranian",
      quote: "We were nervous about importing a dog, but the team handled everything. Luna arrived in pristine condition and is the absolute light of our lives.",
      img: "https://images.unsplash.com/photo-1587402092301-725e37c70fd8?auto=format&fit=crop&w=500&q=80",
      rotation: "3deg"
    },
    {
      name: "The Al Maktoum Family",
      puppy: "Coco, Toy Poodle",
      quote: "A truly luxury experience from start to finish. Coco is the sweetest, smartest addition to our home. Thank you TeddyPups!",
      img: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=85",
      rotation: "-1deg"
    },
    {
      name: "James & Olivia",
      puppy: "Ollie, Pomsky",
      quote: "The viewing rooms were so clean and comfortable. We bonded with Ollie instantly. He's been our loyal little shadow ever since.",
      img: "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?auto=format&fit=crop&w=500&q=80",
      rotation: "2deg"
    },
    {
      name: "The Patel Family",
      puppy: "Daisy, Shih Tzu",
      quote: "Our kids are absolutely obsessed with Daisy. The care package and starter kit made her transition into our home completely seamless.",
      img:  "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=85",
      rotation: "-3deg"
    },
    {
      name: "Emma W.",
      puppy: "Bruno, Cavapoo",
      quote: "I wanted a companion for my morning walks. Bruno is energetic, fluffy, and perfectly socialized. Best decision I ever made!",
      img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=500&q=80",
      rotation: "1.5deg"
    }
  ];

  return (
    <main className="fade-in hf-container">
      <div className="hf-header">
        <h1 className="font-serif">Happy families</h1>
        <p>There is nothing we love more than seeing our puppies thriving in their forever homes. Read stories from our community of pet parents.</p>
      </div>

      <div className="hf-grid">
        {families.map((family, idx) => (
          <div key={idx} className="polaroid-card" style={{ transform: `rotate(${family.rotation})` }}>
            <div className="polaroid-img-wrap">
              <img src={family.img} alt={family.name} />
            </div>
            <h3 className="polaroid-title">{family.name}</h3>
            <p className="polaroid-subtitle">Adopted {family.puppy}</p>
            <p className="polaroid-quote">"{family.quote}"</p>
          </div>
        ))}
      </div>

      <div className="hf-cta" style={{ textAlign: 'center', marginTop: '3rem', padding: '3rem', backgroundColor: '#f4ebd9', borderRadius: '2rem', border: '2px solid #4a3b32' }}>
        <h2 className="font-serif" style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#4a3b32' }}>Ready to find your perfect match?</h2>
        <p style={{ fontSize: '1.125rem', color: 'rgba(74, 59, 50, 0.8)', marginBottom: '2rem' }}>Join our growing family of happy puppy parents today.</p>
        <button className="btn-primary" onClick={() => setCurrentView('puppies')}>
          View available puppies
        </button>
      </div>
    </main>
  );
}