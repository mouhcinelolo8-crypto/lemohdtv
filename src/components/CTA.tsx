import React from 'react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta mx-auto">
          <h2>Ready to watch everything?</h2>
          <p>Join thousands of viewers streaming sports, movies and series with LEMO TV today.</p>
          <div className="row gap flex-wrap" style={{ justifyContent: 'center' }}>
            <Link href="/pricing" className="btn btn--primary">
              Get Started Now
            </Link>
            <Link href="/contact" className="btn btn--ghost">
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
