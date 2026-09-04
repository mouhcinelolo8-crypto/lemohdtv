import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <header className="hero section">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <span className="pill hero__pill">
              <span className="live">●</span> Over 18,000+ live channels
            </span>
            <span className="hero__brand">LEMO TV</span>
            <h1 className="hero__title">Sports, movies and series — updated constantly and streamed in premium quality wherever you are.</h1>
            <p className="hero__sub">
              Over 18,000+ live channels, 8,400+ series and 60,000+ movies — live sports, blockbusters and box sets in up to 4K Ultra HD, on every device you own.
            </p>
            <div className="row gap flex-wrap">
              <Link href="/pricing" className="btn btn--primary">
                Get Started
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <Link href="/pricing" className="btn btn--ghost">
                See Plans
              </Link>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__float hero__float--a">
              <span className="live">LIVE</span> <strong>Sunday Night Football</strong>
            </div>
            <div className="hero__float hero__float--b">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              No buffering
            </div>
            
            <div className="hero__screen">
              <div className="hero__screen-bar">
                <span></span><span></span><span></span>
              </div>
              <div className="hero__screen-body">
                <div className="hero__now">
                  <img src="/images/featured_live.webp" alt="Live Match" className="hero__now-img" />
                  <span className="live">● LIVE NOW</span>
                  <p>NFL Sunday Night</p>
                </div>
                <div className="hero__thumbs">
                  <div className="hero__thumb">
                    <img src="/images/category_sports.webp" alt="Sports" className="hero__thumb-img" />
                    <span>SPORTS</span>
                  </div>
                  <div className="hero__thumb">
                    <img src="/images/category_movies.webp" alt="Movies" className="hero__thumb-img" />
                    <span>MOVIES</span>
                  </div>
                  <div className="hero__thumb">
                    <img src="/images/category_series.webp" alt="Series" className="hero__thumb-img" />
                    <span>SERIES</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="statband">
          <div className="statband__item">
            <h3 className="statband__value">18,000+</h3>
            <p className="statband__label">Live channels</p>
          </div>
          <div className="statband__item">
            <h3 className="statband__value">60,000+</h3>
            <p className="statband__label">Movies on demand</p>
          </div>
          <div className="statband__item">
            <h3 className="statband__value">8,400+</h3>
            <p className="statband__label">TV series</p>
          </div>
          <div className="statband__item">
            <h3 className="statband__value">4K</h3>
            <p className="statband__label">Ultra HD quality</p>
          </div>
        </div>
      </div>
    </header>
  );
}
