import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "IPTV Reseller Program - LEMO TV (lemo iptv)",
  description: "Start your own IPTV business with the LEMO TV (lemo iptv) Reseller Program. Buy credits at wholesale rates, get a custom panel, and generate recurring revenue.",
};

export default function ResellerPage() {
  return (
    <main style={{ padding: '8rem 2rem', minHeight: '80vh' }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', textAlign: 'center' }}>Become a LEMO TV Reseller</h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-dim)', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          Join the fastest growing IPTV provider (lemohdtv). Get your own dedicated control panel, buy credits at steep discounts, and build your own profitable IPTV empire today.
        </p>

        <div className="grid grid-2" style={{ gap: '3rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div className="card" style={{ padding: '2rem', flex: '1 1 400px' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--accent)' }}>Why Partner With Us?</h3>
            <ul style={{ marginTop: '1.5rem', lineHeight: '2' }}>
              <li>✓ Private management panel to create lines</li>
              <li>✓ Create trials, 1, 3, 6, 12 month subscriptions</li>
              <li>✓ Complete anonymity & white-label options</li>
              <li>✓ The most stable 4K servers (Anti-Freeze v4.2)</li>
              <li>✓ Instant setup and automated delivery</li>
            </ul>
          </div>
          
          <div className="card" style={{ padding: '2rem', flex: '1 1 400px', background: 'rgba(249, 107, 10, 0.05)', border: '1px solid rgba(249, 107, 10, 0.2)' }}>
            <h3 style={{ fontSize: '1.8rem' }}>Reseller Credits</h3>
            <p className="text-dim" style={{ marginTop: '1rem' }}>We offer bulk credit packages starting from $200. The more you buy, the cheaper the cost per credit.</p>
            <div style={{ marginTop: '2rem' }}>
              <Link href="https://wa.me/447476941777?text=Hi%20LEMO%20TV%20%F0%9F%91%8B%20I%20am%20interested%20in%20the%20Reseller%20Program." className="btn btn--primary btn--block">
                Contact Sales via WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
