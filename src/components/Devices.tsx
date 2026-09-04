import React from 'react';
import Link from 'next/link';

export default function Devices() {
  return (
    <section className="section">
      <div className="container">
        <div className="devices">
          <div className="devices__content">
            <h2>Watch on your favourite devices</h2>
            <p className="text-lead text-dim" style={{ marginBottom: '1.5rem' }}>
              One subscription works everywhere — Smart TVs, streaming sticks, phones, boxes and computers. Follow our step-by-step guides and you&apos;ll be watching in minutes.
            </p>
            <div className="devices__grid">
              <span className="pill devices__pill">Amazon Fire TV</span>
              <span className="pill devices__pill">Apple TV</span>
              <span className="pill devices__pill">Android TV</span>
              <span className="pill devices__pill">Samsung Smart TV</span>
              <span className="pill devices__pill">LG Smart TV</span>
              <span className="pill devices__pill">iOS / iPadOS</span>
              <span className="pill devices__pill">Android Phones</span>
              <span className="pill devices__pill">Windows / macOS</span>
              <span className="pill devices__pill">MAG Boxes</span>
            </div>
            <Link href="/setup-guides" className="btn btn--ghost mt">
              Open setup guides
            </Link>
          </div>
          <div className="devices__visual">
            <img src="/images/category_4k.webp" alt="Devices" style={{ borderRadius: 'var(--radius-lg)', width: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
