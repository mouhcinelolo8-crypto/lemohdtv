"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const pricingMatrix: Record<number, Record<string, number>> = {
  1: { '1m': 9.99, '3m': 24.99, '6m': 39.99, '12m': 59.99 },
  2: { '1m': 16.99, '3m': 39.99, '6m': 64.99, '12m': 94.99 },
  3: { '1m': 22.99, '3m': 52.99, '6m': 84.99, '12m': 124.99 },
  4: { '1m': 27.99, '3m': 64.99, '6m': 104.99, '12m': 149.99 },
  5: { '1m': 32.99, '3m': 74.99, '6m': 119.99, '12m': 169.99 },
};

const plans = [
  { id: '1m', name: '1 Month Pass' },
  { id: '3m', name: '3 Months Pass' },
  { id: '6m', name: '6 Months Pass' },
  { id: '12m', name: '12 Months Pass', featured: true },
];

const usersList = [1, 2, 3, 4, 5];

export default function Pricing() {
  const [users, setUsers] = useState(1);

  const getWhatsAppLink = (planName: string, price: number, usersCount: number) => {
    return `https://wa.me/447476941777?text=Hi%20LEMO%20TV%20%F0%9F%91%8B%20I%20want%20to%20order%20the%20*${encodeURIComponent(planName)}*%20plan%20for%20${usersCount}%20device(s)%20%E2%80%94%20%24${price}.%20Please%20send%20me%20the%20payment%20link.`;
  };

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-head center mx-auto">
          <span className="kicker">Pricing</span>
          <h2>Simple pricing. Everything included.</h2>
          <p>Every plan unlocks the full catalogue — channels, movies, series, sports and PPV. Cancel anytime.</p>
        </div>

        <div className="pricing">
          <div style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--text-dim)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
            SELECT SIMULTANEOUS USERS / DEVICES:
          </div>
          <div className="pricing__tabs" style={{ marginBottom: '4rem', flexWrap: 'wrap', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
            {usersList.map(u => (
              <button 
                key={u}
                className={`pricing__tab ${users === u ? 'is-active' : ''}`}
                onClick={() => setUsers(u)}
                style={{ flex: 1, minWidth: '80px', padding: '12px 16px' }}
              >
                {u} {u === 1 ? 'User' : 'Users'}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', alignItems: 'stretch' }}>
            {plans.map(plan => (
              <div key={plan.id} className={`card plan ${plan.featured ? 'plan--featured' : ''}`} style={{ display: 'flex', flexDirection: 'column' }}>
                {plan.featured && (
                  <div style={{ position: 'absolute', top: '-15px', right: '15px', background: 'var(--accent)', color: '#fff', fontSize: '12px', fontWeight: 'bold', padding: '4px 12px', borderRadius: '20px', boxShadow: '0 4px 12px rgba(249, 107, 10, 0.4)' }}>
                    BEST VALUE
                  </div>
                )}
                <h3 className="plan__dur">{plan.name}</h3>
                <div className="plan__price">
                  <span className="plan__cur">$</span>{pricingMatrix[users][plan.id]}
                </div>
                <span className="plan__inc">billed once</span>
                
                <ul className="plan__list" style={{ flexGrow: 1, marginTop: '2rem' }}>
                  <li style={{ color: 'var(--accent)', fontWeight: 600, display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: '2px' }}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> 
                    <span>{users} Simultaneous Connection{users > 1 ? 's' : ''} / Device{users > 1 ? 's' : ''}</span>
                  </li>
                  <li><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> 21,314+ Live Channels</li>
                  <li><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> 30,604+ Movies & VOD</li>
                  <li><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> 4K UHD & FHD Quality</li>
                  <li><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Anti-Freeze Server v4.2</li>
                  {plan.id !== '1m' && (
                    <li><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> 7-Day EPG TV Guide</li>
                  )}
                  {plan.featured && (
                    <li style={{ color: 'var(--accent)', fontWeight: 600 }}>
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> + 2 Months Free Bonus
                    </li>
                  )}
                </ul>
                <Link href={getWhatsAppLink(plan.name, pricingMatrix[users][plan.id], users)} className="btn btn--primary btn--block" style={{ marginTop: '1.5rem' }}>
                  Order Now via WhatsApp
                </Link>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
