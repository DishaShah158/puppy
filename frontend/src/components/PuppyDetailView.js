import React from "react";

const PuppyDetailView = ({ puppy, goBack }) => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    try {
      const response = await fetch(
        "https://formspree.io/f/xbggrkyr",
        {
          method: "POST",
          body: new FormData(form),
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        alert("Enquiry Sent! We will contact you on WhatsApp soon.");
        form.reset();
      } else {
        alert("Unable to send your enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please check your internet connection.");
    }
  };

  return (
    <div className="fade-in detail-container">
      <button className="back-btn" onClick={goBack}>
        ← Back to Puppies
      </button>

      <div className="detail-header">
        <h1>Meet {puppy.name}</h1>
        <p>Find your perfect furry companion.</p>
      </div>

      <div className="detail-grid">
        <div className="detail-img-box">
          <img src={puppy.image} alt={puppy.name} />
        </div>

        <div className="detail-info-box">
          <h2>{puppy.name}</h2>

          <div className="dt-stats">
            <div className="dt-stat">
              <span className="dt-label">Breed</span>
              <span className="dt-value">{puppy.breed}</span>
            </div>

            <div className="dt-stat">
              <span className="dt-label">Gender</span>
              <span className="dt-value">{puppy.gender}</span>
            </div>

            <div className="dt-stat">
              <span className="dt-label">Age</span>
              <span className="dt-value">{puppy.age}</span>
            </div>

            <div className="dt-stat">
              <span className="dt-label">Location</span>
              <span className="dt-value">{puppy.where}</span>
            </div>
          </div>

          <div className="dt-form-box">
            <h3>Interested in this puppy?</h3>
            <p>Fill in your details and we will contact you.</p>

            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="customerName"
                  className="form-input"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Phone (WhatsApp)
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder="Enter your WhatsApp number"
                  required
                />
              </div>

              <input
                type="hidden"
                name="puppyName"
                value={puppy.name || ""}
              />

              <input
                type="hidden"
                name="breed"
                value={puppy.breed || ""}
              />

              <div className="form-row">
                <button
                  type="submit"
                  className="form-submit"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuppyDetailView;
