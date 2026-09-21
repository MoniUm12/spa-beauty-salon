import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceCard({ image, number, title, text, price }) {
  return (
    <article className="service-card">
      <img src={image} alt={title} />
      <div className="service-content">
        <span className="eyebrow">{number}</span>
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="service-bottom">
          <strong>{price}</strong>
          <Link to="/booking">
            Reserve <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
