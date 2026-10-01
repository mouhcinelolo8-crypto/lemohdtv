import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link href="/" className="logo">
              <span className="logo__word">LEMO</span>
            </Link>
            <p className="footer__blurb">
              18,000+ live channels, 60,000+ movies and 8,400+ series in up to 4K Ultra HD — on every device you own.
            </p>
            <Link href="/pricing" className="btn btn--primary btn--sm">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              Chat on WhatsApp
            </Link>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Explore</h4>
            <Link href="/channels" className="footer__link">Channels</Link>
            <Link href="/reseller" className="footer__link">Reseller</Link>
            <Link href="/setup-guides" className="footer__link">Setup Guides</Link>
            <Link href="/events-updates" className="footer__link">Events</Link>
            <Link href="/pricing" className="footer__link">Pricing</Link>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Company</h4>
            <Link href="/contact" className="footer__link">Contact</Link>
            <Link href="/terms-of-service" className="footer__link">Terms of Service</Link>
            <Link href="/privacy-policy" className="footer__link">Privacy Policy</Link>
            <Link href="/dmca" className="footer__link">DMCA Policy</Link>
            <Link href="/refund-policy" className="footer__link">Refund Policy</Link>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Get in touch</h4>
            <Link href="/pricing" className="footer__link">+44 7476941777</Link>
          </div>
        </div>

        <div className="footer__bar">
          <p>© {new Date().getFullYear()} LEMO TV. All rights reserved.</p>
          <div className="row gap footer__legal">
            <Link href="/terms-of-service">Terms</Link>
            <span>·</span>
            <Link href="/privacy-policy">Privacy</Link>
            <span>·</span>
            <Link href="/dmca">DMCA</Link>
            <span>·</span>
            <Link href="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
