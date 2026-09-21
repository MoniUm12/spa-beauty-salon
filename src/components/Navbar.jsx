import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  ["/", "Home"], ["/about", "About"], ["/services", "Services"],
  ["/gallery", "Gallery"], ["/booking", "Booking"], ["/contact", "Contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <Link className="brand" to="/" onClick={() => setOpen(false)}>
        <span className="brand-mark"><Sparkles size={18}/></span>
        <span>HABIBH<small>SPA & BEAUTY</small></span>
      </Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X/> : <Menu/>}
      </button>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)}>
            {label}
          </NavLink>
        ))}
        <Link className="nav-cta" to="/booking" onClick={() => setOpen(false)}>Book now</Link>
      </nav>
    </header>
  );
}