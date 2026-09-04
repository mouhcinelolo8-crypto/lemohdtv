"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link href="/" className="nav__brand logo">
          <span className="logo__word">LEMO</span>
        </Link>

        <div className="nav__links">
          <Link href="/channels" className="nav__link">Channels</Link>
          <Link href="/reseller" className="nav__link">Reseller</Link>
          <Link href="/setup-guides" className="nav__link">Setup Guides</Link>
          <Link href="/events-updates" className="nav__link">Events</Link>
          <Link href="/pricing" className="nav__link">Pricing</Link>
        </div>

        <Link href="/pricing" className="btn btn--primary btn--sm nav__cta">
          Get Started
        </Link>

        <button 
          className="nav__burger"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <div className="burger"></div>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="nav__overlay">
          <div className="container nav__overlay-top">
            <Link href="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
              <span className="logo__word">LEMO</span>
            </Link>
            <button 
              className="nav__close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="container nav__overlay-body">
            <div className="nav__mobile-links">
              <Link href="/channels" className="nav__mobile-link" onClick={() => setMobileMenuOpen(false)}>
                Channels <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/reseller" className="nav__mobile-link" onClick={() => setMobileMenuOpen(false)}>
                Reseller <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/setup-guides" className="nav__mobile-link" onClick={() => setMobileMenuOpen(false)}>
                Setup Guides <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/events-updates" className="nav__mobile-link" onClick={() => setMobileMenuOpen(false)}>
                Events <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/pricing" className="nav__mobile-link" onClick={() => setMobileMenuOpen(false)}>
                Pricing <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <Link href="/pricing" className="btn btn--primary btn--block" onClick={() => setMobileMenuOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
