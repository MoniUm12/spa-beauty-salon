import React from "react";
import { ArrowRight, ArrowUpRight, Heart, Leaf, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import heroImage from "../images/download.jfif";

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85",
    number: "01 / SKIN",
    title: "Signature Facials",
    text: "Personalized treatments for fresh, hydrated, luminous skin.",
    price: "From ₹1,499",
  },
  {
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=85",
    number: "02 / HAIR",
    title: "Hair Rituals",
    text: "Thoughtful cuts, styling and nourishing hair treatments.",
    price: "From ₹999",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=85",
    number: "03 / WELLNESS",
    title: "Spa & Massage",
    text: "Slow down with calming rituals designed for deep relaxation.",
    price: "From ₹1,799",
  },
];

const values = [
  {
    icon: Leaf,
    title: "Natural care",
    text: "Gentle, considered products and mindful rituals.",
  },
  {
    icon: Heart,
    title: "Personal touch",
    text: "Beauty experiences tailored to your needs.",
  },
  {
    icon: Sparkles,
    title: "Quiet luxury",
    text: "A serene atmosphere where you can reset.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">BEAUTY · WELLNESS · SELF CARE</span>
          <h1>
            Your beauty,
            <br />
            <em>our passion.</em>
          </h1>
          <p>
            A refined sanctuary where beauty rituals, mindful wellness and
            personal care come together.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/booking">
              Book an appointment <ArrowUpRight size={17} />
            </Link>
            <Link className="text-link" to="/services">
              Explore services <ArrowRight size={15} />
            </Link>
          </div>
          <div className="hero-note">
            <span>✦</span> Thoughtful care. Beautiful results.
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Elegant luxury salon interior" />
          <div className="floating-card">
            <strong>10+</strong>
            <span>
              Years of beauty
              <br />
              and wellness
            </span>
          </div>
        </div>
      </section>

      <section className="intro section">
        <SectionTitle
          eyebrow="THE LUMIÈRE EXPERIENCE"
          title="A little luxury, made personal."
          text="Step away from the rush and into a space designed around you. Every treatment is intentional, every detail considered."
        />
        <div className="values">
          {values.map(({ icon: Icon, title, text }) => (
            <article key={title} className="value-card">
              <span className="value-icon">
                <Icon size={21} strokeWidth={1.5} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section soft-section">
        <SectionTitle
          eyebrow="OUR SIGNATURES"
          title="Rituals that make you glow."
          text="Discover our most-loved treatments."
        />
        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div className="center">
          <Link className="button outline-button" to="/services">
            View all services <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <section className="quote-section">
        <span>“</span>
        <blockquote>
          Self-care is not a luxury. It is a way of coming home to yourself.
        </blockquote>
        <p>— Lumière philosophy</p>
      </section>

      <section className="cta-banner">
        <div>
          <span className="eyebrow">YOUR NEXT GLOW</span>
          <h2>Make time for you.</h2>
        </div>
        <Link className="button light-button" to="/booking">
          Reserve your ritual <ArrowUpRight size={17} />
        </Link>
      </section>
    </>
  );
}
