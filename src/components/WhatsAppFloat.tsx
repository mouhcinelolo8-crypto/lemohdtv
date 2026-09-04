import React from 'react';
import Link from 'next/link';

export default function WhatsAppFloat() {
  return (
    <a 
      href="https://wa.me/447476941777?text=Hi%20LEMO%20TV%2C%20I'd%20like%20to%20get%20started!"
      target="_blank"
      rel="noopener noreferrer"
      className="wa"
      aria-label="Chat on WhatsApp"
    >
      <div className="wa__pulse"></div>
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    </a>
  );
}
