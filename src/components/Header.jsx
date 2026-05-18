import { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Add subtle shadow to header when user scrolls past the hero
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu after clicking a link
  function handleNavClick() {
    setMobileOpen(false);
  }

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header-inner">
        <a href="#top" className="site-logo" aria-label="Japan Technology home" onClick={handleNavClick}>
          <img src="/logo/logo_clean_dark_bg_200w.png" alt="" className="site-logo-mark" />
          <span className="site-logo-wordmark">
            JAPAN TECHNOLOGY <span className="site-logo-wordmark-accent">CO., LTD</span>
          </span>
        </a>
        <button
          className="site-nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(v => !v)}
        >
          <i className={`ti ${mobileOpen ? 'ti-x' : 'ti-menu-2'}`} aria-hidden="true"></i>
        </button>
        <nav className={`site-nav ${mobileOpen ? 'site-nav--open' : ''}`}>
          <a href="#about" className="site-nav-link" onClick={handleNavClick}>About</a>
          <a href="#services" className="site-nav-link" onClick={handleNavClick}>Services</a>
          <a href="#process" className="site-nav-link" onClick={handleNavClick}>Process</a>
          <a href="#request" className="site-nav-link" onClick={handleNavClick}>Request</a>
          <a href="#contact" className="site-nav-link" onClick={handleNavClick}>Contact</a>
          
            href="https://auctions.yahoo.co.jp/seller/27fYwvFBQ2uFVTZ4sZycReaNDQuwA"
            target="_blank"
            rel="noopener noreferrer"
            className="site-nav-cta"
            onClick={handleNavClick}
          >
            YAHOO SHOP <i className="ti ti-external-link" aria-hidden="true"></i>
          </a>
        </nav>
      </div>
    </header>
  );
}