import React from "react";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="brand footer-brand">
            HABIBH
            <small>SPA & BEAUTY</small>
          </div>
          <p>
            A calm, beautiful space for your everyday glow and well-being.
          </p>
          <div className="socials">
            <a href="#" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook />
            </a>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <Link to="/about">About us</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/booking">Book appointment</Link>
        </div>

        <div>
          <h4>Visit us</h4>
          <p>
            <MapPin size={15} />
            Habibh Salon, Porwal Road, Lohegaon, DY Patil University Rd,
            corner, Pune, Maharashtra 411047
          </p>
          <p>
            <Phone size={15} />
            +91 9730519325
          </p>
          <p>
            <Mail size={15} />
            monika@gmail.com
          </p>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Lumière Spa & Beauty. All rights reserved.
      </div>
    </footer>
  );
}
