import React from 'react';

// Six direct puppy-photo URLs used when a listing's own image is missing or broken.
const PUPPY_PHOTOS = [

 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1537151608804-ea2aa1427189?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1548199973-03cce0bbc?auto=format&fit=crop&w=900&q=85',
  
];

const FALLBACK_IMAGE =
  'https://placehold.co/600x750/f8f1e9/6b5144?text=Puppy+Photo';

export default function PuppiesView({
  puppies = [],
  activeFilters,
  updateFilter,
  showPuppyDetail,
  setCurrentView,
}) {
  const filteredPuppies = puppies.filter((puppy) => {
    const matchWhere =
      activeFilters.where === 'Everywhere' ||
      puppy.where === activeFilters.where;

    const matchBreed =
      activeFilters.breeds.length === 0 ||
      activeFilters.breeds.includes(puppy.breed);

    const matchGender =
      activeFilters.genders.length === 0 ||
      activeFilters.genders.includes(puppy.gender);

    return matchWhere && matchBreed && matchGender;
  });

  const isBtnActive = (type, val) => {
    if (type === 'where') return activeFilters.where === val;
    if (type === 'breed') return activeFilters.breeds.includes(val);
    if (type === 'gender') return activeFilters.genders.includes(val);
    return false;
  };

  // If the listing image fails, try each of our puppy photos before the placeholder.
  const handleImageError = (event) => {
    const img = event.currentTarget;
    const tried = Number(img.dataset.fallbackIndex || 0);

    if (tried < PUPPY_PHOTOS.length) {
      img.dataset.fallbackIndex = String(tried + 1);
      img.src = PUPPY_PHOTOS[tried];
      return;
    }

    img.onerror = null;
    img.src = FALLBACK_IMAGE;
  };

  return (
    <main className="fade-in puppies-container">
      <h2>Available puppies</h2>
      <p className="puppies-desc">
        Every listing shows real photos of the actual puppy. Open a profile to
        see them all, then ask us about them on WhatsApp.
      </p>

      <div className="filters-box">
        <div className="filter-row">
          <span className="filter-label">where</span>
          <div className="filter-btns">
            {['Everywhere', 'Imported', 'Korean Teacup', 'Dubai'].map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => updateFilter('where', loc)}
                className={`filter-btn ${
                  isBtnActive('where', loc) ? 'active' : ''
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-row">
          <span className="filter-label">breed</span>
          <div className="filter-btns">
            {['Maltipoo', 'Pomeranian', 'Poodle', 'Cavapoo', 'Shih Tzu'].map(
              (breed) => (
                <button
                  key={breed}
                  type="button"
                  onClick={() => updateFilter('breed', breed)}
                  className={`filter-btn ${
                    isBtnActive('breed', breed) ? 'active' : ''
                  }`}
                >
                  {breed}
                </button>
              )
            )}
          </div>
        </div>

        <div className="filter-row">
          <span className="filter-label">boy or girl</span>
          <div className="filter-btns">
            {['Boy', 'Girl'].map((gender) => (
              <button
                key={gender}
                type="button"
                onClick={() => updateFilter('gender', gender)}
                className={`filter-btn ${
                  isBtnActive('gender', gender) ? 'active' : ''
                }`}
              >
                {gender}s
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="puppy-count">
        <span>{filteredPuppies.length}</span> puppies looking for a home
      </p>

      {filteredPuppies.length === 0 ? (
        <div className="empty-state">
          No puppies match your exact filters. Try clearing some!
        </div>
      ) : (
        <div className="puppy-grid">
          {filteredPuppies.map((puppy, index) => (
            <div
              key={puppy.id || puppy._id}
              onClick={() => showPuppyDetail(puppy.id || puppy._id)}
              className="puppy-card"
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  showPuppyDetail(puppy.id || puppy._id);
                }
              }}
            >
              <div className="pc-image-wrapper">
                <div
                  className="pc-bg"
                  style={{ backgroundColor: puppy.colorBg || '#f8f1e9' }}
                />
                <div className="pc-badge">🐾 Available</div>
                <div className="pc-img-container">
                  <img
                    src={puppy.image || PUPPY_PHOTOS[index % PUPPY_PHOTOS.length]}
                    alt={`${puppy.breed || 'Puppy'}${puppy.name ? ` - ${puppy.name}` : ''}`}
                    loading="lazy"
                    onError={handleImageError}
                  />
                </div>
              </div>

              <h3 className="pc-name font-serif">{puppy.name}</h3>
              <p className="pc-breed-gender">
                {puppy.breed} • {puppy.gender}
              </p>
              <p className="pc-meta">
                {puppy.where} • {puppy.age}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* ALREADY GONE HOME BANNER */}
      <div className="gh-banner">
        <div className="gh-banner-text">
          <h2
            className="font-serif"
            style={{
              fontSize: '3.5rem',
              marginBottom: '0.5rem',
              lineHeight: '1.1',
            }}
          >
            Already gone home
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              marginBottom: '1.5rem',
              color: 'rgba(74, 59, 50, 0.8)',
            }}
          >
            These puppies have found their families.
          </p>
          <button
            type="button"
            className="btn-primary"
            onClick={() => setCurrentView('gone-home')}
          >
            See the puppies who've gone home
          </button>
        </div>

        <div className="gh-banner-img-row">
          <div className="gh-circle-wrap">
            <img
              src="https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=200&q=80"
              alt="Ace"
              className="gh-circle"
              loading="lazy"
              onError={handleImageError}
            />
            <span className="gh-badge">gone home ♥</span>
            <span className="gh-name">Ace</span>
          </div>

          <div className="gh-circle-wrap">
            <img
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=200&q=80"
              alt="Leo"
              className="gh-circle"
              loading="lazy"
              onError={handleImageError}
            />
            <span className="gh-badge">gone home ♥</span>
            <span className="gh-name">Leo</span>
          </div>

          <div className="gh-circle-wrap">
            <img
              src="https://images.unsplash.com/photo-1546447147-3fc2d118ea1f?auto=format&fit=crop&w=200&q=80"
              alt="Mia"
              className="gh-circle"
              loading="lazy"
              onError={handleImageError}
            />
            <span className="gh-badge">gone home ♥</span>
            <span className="gh-name">Mia</span>
          </div>

          <div className="gh-circle-wrap">
            <img
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=200&q=80"
              alt="Sadie"
              className="gh-circle"
              loading="lazy"
              onError={handleImageError}
            />
            <span className="gh-badge">gone home ♥</span>
            <span className="gh-name">Sadie</span>
          </div>

          <div className="gh-circle-wrap">
            <img
              src="https://images.unsplash.com/photo-1589146114881-3773cbb7790b?auto=format&fit=crop&w=200&q=80"
              alt="Pomeranian"
              className="gh-circle"
              loading="lazy"
              onError={handleImageError}
            />
            <span className="gh-badge">gone home ♥</span>
            <span className="gh-name">Pomeranian</span>
          </div>
        </div>
      </div>
    </main>
  );
}
