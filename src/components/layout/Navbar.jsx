"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#concepto", label: "El concepto" },
  { href: "#menu", label: "Menú" },
  { href: "#experiencia", label: "La experiencia" },
  { href: "#visitanos", label: "Visítanos" },
];

export default function Navbar({ onReserve }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-header__inner page-shell">
        <a className="brand" href="#inicio" aria-label="Aura Lounge, inicio" onClick={closeMenu}>
          <span className="brand__name">AURA</span>
          <span className="brand__tag">LOUNGE</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map((link) => <a className="nav-link" href={link.href} key={link.href}>{link.label}</a>)}
        </nav>

        <button className="button button--gold header-reserve" onClick={onReserve}>Reservar mesa</button>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <nav id="mobile-navigation" className={`mobile-nav${menuOpen ? " mobile-nav--open" : ""}`} aria-label="Navegación móvil" aria-hidden={!menuOpen}>
        {links.map((link) => <a href={link.href} key={link.href} onClick={closeMenu}>{link.label}</a>)}
        <button className="button button--gold" onClick={() => { closeMenu(); onReserve(); }}>Reservar mesa</button>
      </nav>
    </header>
  );
}
