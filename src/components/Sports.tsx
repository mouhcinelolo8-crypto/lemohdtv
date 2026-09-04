import React from 'react';
import Link from 'next/link';

export default function Sports() {
  return (
    <section className="section" style={{
      backgroundImage: `linear-gradient(to right, rgba(5, 16, 18, 0.95) 0%, rgba(5, 16, 18, 0.7) 100%), url('/sports-bg.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div className="container">
        <div className="sports">
          <div className="sports__content">
            <span className="kicker">Live Sports</span>
            <h2>The place to enjoy every live sports event</h2>
            <p className="text-lead text-dim">
              Never miss a game. LEMO TV carries NCAA, NBA, NHL, NFL, EFL and every major broadcaster — plus every boxing and MMA pay-per-view, included at no extra cost.
            </p>
            <div className="sports__leagues">
              <span className="pill">NFL</span>
              <span className="pill">NBA</span>
              <span className="pill">NHL</span>
              <span className="pill">MLB</span>
              <span className="pill">Premier League</span>
              <span className="pill">UFC / Boxing</span>
            </div>
            <Link href="/events-updates" className="btn btn--primary mt">
              See the live event feed
            </Link>
          </div>
          <div className="sports__visual">
            <div className="sports__scoreboard">
              <div className="sb-row">
                <span>NFL</span>
                <span>4th Qtr 2:14</span>
              </div>
              <div className="sb-score">
                <span>KC</span>
                <b>24</b>
              </div>
              <div className="sb-score">
                <span>BAL</span>
                <b>20</b>
              </div>
              <div className="sb-meta">Live on LEMO TV</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
