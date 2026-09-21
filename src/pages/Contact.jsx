import React from "react";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    alert("Thanks! This demo form is ready to connect to your backend.");
  };

  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">GET IN TOUCH</span>
        <h1>
          We would love
          <br />
          <em>to meet you.</em>
        </h1>
        <p>Questions, recommendations or simply want to say hello?</p>
      </section>

      <section className="section contact-grid">
        <div>
          <SectionTitle eyebrow="CONTACT DETAILS" title="Come say hello." />

          <div className="contact-list">
            <p>
              <strong>Address</strong>
              <br />
              Habibh Salon, Porwal Road, Lohegaon, DY Patil University Rd, corner, Pune, Maharashtra 411047
            </p>
            <p>
              <strong>Phone</strong>
              <br />
              +91 9730519325
            </p>
            <p>
              <strong>Email</strong>
              <br />
              monika@gmail.com
            </p>
            <p>
              <strong>Opening hours</strong>
              <br />
              Monday – Sunday
              <br />
              10:00 AM – 8:00 PM
            </p>
          </div>
        </div>

        <div className="contact-card">
          <h3>Send an enquiry</h3>
          <form onSubmit={handleSubmit}>
            <input required placeholder="Your name" />
            <input required type="email" placeholder="Email address" />
            <textarea required placeholder="How can we help?" />
            <button className="button" type="submit">
              Send message ↗
            </button>
          </form>
        </div>
      </section>

      <section className="map-placeholder">
        <span>✦</span>
        <h3>Find us in Pune</h3>
        <p>Replace this area with your Google Maps embed.</p>
      </section>
    </>
  );
}
