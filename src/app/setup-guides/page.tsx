"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function SetupGuidesPage() {
  const [activeTab, setActiveTab] = useState('firestick');

  const guides = [
    {
      id: 'firestick',
      title: 'Fire TV Stick',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
      app: 'IPTV Smarters',
      steps: [
        'From the Fire TV home screen open Find, then Search.',
        'Search for and install the free "Downloader" app.',
        'Open Settings → My Fire TV → Developer Options and enable apps from unknown sources.',
        'Open Downloader and enter: https://iptvsmarters.com/smarters.apk',
        'Install and open IPTV Smarters Pro.',
        'Choose Login with Xtream Codes API and enter the username, password and server URL we email you.',
        'Open Live TV, pick a category and enjoy in full screen.'
      ]
    },
    {
      id: 'android',
      title: 'Android',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>,
      app: 'IPTV Smarters',
      steps: [
        'Install IPTV Smarters Pro from the Play Store (or our APK link).',
        'Open the app and choose Login with Xtream Codes API.',
        'Enter the username, password and server URL from your welcome email, then tap Add User.',
        'Tap the Live TV icon.',
        'Select a channel group and watch in full screen.'
      ]
    },
    {
      id: 'ios',
      title: 'Apple / iOS',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path><path d="M10 2c1 .5 2 2 2 5"></path></svg>,
      app: 'Smarters Lite',
      steps: [
        'Install "Smarters Player Lite" from the App Store.',
        'Open the app and choose Login with Xtream Codes API.',
        'Enter your subscription details and tap Add User.',
        'Open the Live TV section — the EPG installs automatically, no manual URL needed.',
        'Select a channel group and start watching.'
      ]
    },
    {
      id: 'samsung-lg',
      title: 'Samsung / LG',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>,
      app: 'IPTV Smarters',
      steps: [
        'Samsung: open Smart Hub and search the store for IPTV Smarters Pro.',
        'LG: press Home, open the LG Content Store and search for IPTV Smarters Pro.',
        'Install and open the app.',
        'Log in with the Xtream Codes credentials we email you.',
        'Open Live TV and choose your category.'
      ]
    },
    {
      id: 'smart-tv',
      title: 'Smart TV (SIPTV)',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>,
      app: 'Smart IPTV',
      steps: [
        'Install Smart IPTV, Set IPTV or Net IPTV from your TV\'s app store.',
        'Open the app and note the MAC address shown on screen.',
        'Send us that MAC address by WhatsApp, email or live chat.',
        'Once we activate it, restart the app or TV.',
        'Your channel list loads automatically.'
      ]
    },
    {
      id: 'mag',
      title: 'MAG Box',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="11" width="20" height="10" rx="2" ry="2"></rect><line x1="12" y1="11" x2="12" y2="3"></line><path d="M12 3a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path></svg>,
      app: 'Portal',
      steps: [
        'Send us the device MAC address after you complete payment.',
        'We configure your portal and reply with the portal URL.',
        'On the MAG box open Settings → System Settings → Servers → Portals.',
        'Enter the portal URL we provide and save.',
        'Restart the portal — your channels load automatically.'
      ]
    },
    {
      id: 'windows-mac',
      title: 'Windows / macOS',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
      app: 'IPTV Smarters',
      steps: [
        'Windows: download from iptvsmarters.com/download?download=windows',
        'macOS: download from iptvsmarters.com/download?download=mac',
        'Install and open IPTV Smarters.',
        'Choose Login with Xtream Codes API.',
        'Enter your username, password and server URL, then start watching.'
      ]
    },
    {
      id: 'tivimate',
      title: 'TiviMate',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>,
      app: 'TiviMate',
      steps: [
        'On Fire TV or Android, install TiviMate from the store (or our APK link).',
        'Open TiviMate and choose Add Playlist.',
        'Select Xtream Codes.',
        'Enter the username, password and server URL from your welcome email.',
        'Name the playlist and finish — your channels and EPG load automatically.'
      ]
    }
  ];

  const activeGuide = guides.find(g => g.id === activeTab) || guides[0];

  return (
    <main style={{ padding: '8rem 2rem', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* Tabs */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '0.8rem', 
          marginBottom: '3rem' 
        }}>
          {guides.map(guide => (
            <button
              key={guide.id}
              onClick={() => setActiveTab(guide.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.7rem 1.2rem',
                borderRadius: '50px',
                background: activeTab === guide.id ? 'rgba(255,255,255,0.08)' : 'transparent',
                border: activeTab === guide.id ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.05)',
                color: activeTab === guide.id ? '#fff' : 'var(--text-dim)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontSize: '0.9rem',
                fontWeight: activeTab === guide.id ? '600' : 'normal'
              }}
              onMouseOver={(e) => {
                if (activeTab !== guide.id) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.color = '#fff';
                }
              }}
              onMouseOut={(e) => {
                if (activeTab !== guide.id) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-dim)';
                }
              }}
            >
              {guide.icon}
              {guide.title}
            </button>
          ))}
        </div>

        {/* Active Guide Card */}
        <div className="card" style={{ 
          padding: '3rem', 
          background: 'var(--card-bg)', 
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          {/* Card Header */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '3rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '16px', 
                border: '1px solid var(--accent)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'var(--accent)'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{activeGuide.title}</h2>
            </div>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.8rem',
              padding: '0.5rem 1rem',
              borderRadius: '50px',
              border: '1px solid rgba(255,255,255,0.05)',
              background: 'rgba(0,0,0,0.2)'
            }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>{activeGuide.app}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
            </div>
          </div>

          {/* Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {activeGuide.steps.map((step, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  minWidth: '32px',
                  borderRadius: '50%', 
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}>
                  {index + 1}
                </div>
                <div style={{ paddingTop: '0.3rem', color: '#e2e8f0', lineHeight: '1.6', fontSize: '1.05rem' }}>
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
