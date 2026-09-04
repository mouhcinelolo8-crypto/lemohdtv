import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Events & Updates — Live Sports Feed — LEMO TV (lemotv.in)",
  description: "LEMO TV (lemotv.in) is the official premium IPTV service — 18,000+ live channels. Watch live sports, UFC, NFL, NBA, NHL, and PPV events on any device.",
};

export default function EventsPage() {
  const sports = [
    {
      title: 'Boxing & UFC main cards',
      desc: 'Every fight night · 4K feeds',
    },
    {
      title: 'Sunday, Monday & Thursday games',
      desc: 'NFL Network · RedZone · local feeds',
    },
    {
      title: 'Full season coverage',
      desc: 'MLB Network · Strike Zone · team feeds',
    },
    {
      title: 'Regular season & playoffs',
      desc: 'NBA TV · ESPN · ABC',
    },
    {
      title: 'Nightly hockey',
      desc: 'NHL Network · ESPN+ regional',
    },
    {
      title: 'College football & basketball',
      desc: 'ESPN+ 1–199 · conference networks',
    },
    {
      title: 'Domestic & international',
      desc: 'beIN Sports · FOX Soccer Plus · MLS',
    },
    {
      title: 'RugbyPass internationals',
      desc: 'Live tournaments & test matches',
    }
  ];

  return (
    <main style={{ padding: '8rem 2rem', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', textAlign: 'center', lineHeight: '1.1' }}>
          Live Sports Feed
        </h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-dim)', maxWidth: '700px', margin: '0 auto 4rem auto', lineHeight: '1.6' }}>
          Your daily update on every sports event we carry — leagues, fight nights and tournaments, plus the exact channels streaming them.
        </p>

        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Channels by sport</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {sports.map((sport, index) => (
            <div key={index} className="card" style={{ padding: '2rem', background: 'var(--card-bg)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#fff' }}>{sport.title}</h3>
              <p style={{ color: 'var(--accent)', fontSize: '0.95rem' }}>{sport.desc}</p>
            </div>
          ))}
        </div>

        <div className="card" style={{ padding: '4rem 2rem', textAlign: 'center', background: 'rgba(249, 107, 10, 0.05)', borderRadius: '16px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Never miss the big game</h2>
          <p className="text-dim" style={{ fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            Get every league and every PPV in one subscription. Ask us what's on tonight.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="https://wa.me/447476941777?text=Hi%20LEMO%20TV%2C%20what's%20on%20tonight%3F" className="btn btn--primary">
              Ask what's on
            </Link>
            <Link href="/pricing" className="btn" style={{ background: 'rgba(255,255,255,0.1)' }}>
              See plans
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
