"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import channelsData from '@/data/channels.json';

export default function ChannelsPage() {
  const { totalChannels, lastUpdated, categories } = channelsData;
  const formattedDate = new Date(lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const [searchQuery, setSearchQuery] = useState('');

  // Optimize search: Flatten channels and filter
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    const results: { name: string; category: string }[] = [];
    
    // Loop through categories and find matching channels
    for (const cat of categories) {
      if (cat.channels) {
        for (const channel of cat.channels) {
          if (channel.toLowerCase().includes(query)) {
            results.push({ name: channel, category: cat.name });
            if (results.length >= 100) return results; // Limit to 100 to prevent browser lag
          }
        }
      }
    }
    
    return results;
  }, [searchQuery, categories]);

  return (
    <main style={{ padding: '8rem 2rem', minHeight: '80vh' }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', textAlign: 'center' }}>Live TV Channels Lineup</h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-dim)', maxWidth: '800px', margin: '0 auto 1rem auto' }}>
          LEMO TV (lemohdtv) gives you unrestricted access to over {totalChannels.toLocaleString()} live channels globally. From premium sports networks to international news and entertainment.
        </p>
        <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '3rem' }}>
          Last updated: {formattedDate}
        </p>

        {/* Search Bar */}
        <div style={{ maxWidth: '600px', margin: '0 auto 4rem auto' }}>
          <div style={{ position: 'relative' }}>
            <input 
              type="text" 
              placeholder="Search for a specific channel (e.g., Sky Sports)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '1.2rem 1.5rem',
                fontSize: '1.1rem',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(0,0,0,0.5)',
                color: '#fff',
                outline: 'none'
              }}
            />
            {searchQuery && (
              <span style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                {searchResults.length === 100 ? '100+ results' : `${searchResults.length} results`}
              </span>
            )}
          </div>
        </div>

        {/* Display Search Results */}
        {searchQuery.trim() !== '' ? (
          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Search Results for "{searchQuery}"</h3>
            {searchResults.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
                {searchResults.map((result, index) => (
                  <div key={index} style={{ padding: '1rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '6px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{result.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--accent)' }}>{result.category}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem', background: 'var(--card-bg)', borderRadius: '8px' }}>
                <p className="text-dim">No channels found matching "{searchQuery}".</p>
              </div>
            )}
          </div>
        ) : (
          /* Display Categories Grid when not searching */
          <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {categories.map((cat, index) => (
              <div key={index} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <h3 style={{ fontSize: '1.3rem', lineHeight: '1.4' }}>{cat.name}</h3>
                <div style={{ marginTop: '1.5rem', color: 'var(--accent)', fontWeight: 'bold', fontSize: '1.1rem' }}>
                  {cat.count.toLocaleString()} Channels
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="center mt" style={{ marginTop: '5rem' }}>
          <Link href="/pricing" className="btn btn--primary">Get Started Now</Link>
        </div>
      </div>
    </main>
  );
}
