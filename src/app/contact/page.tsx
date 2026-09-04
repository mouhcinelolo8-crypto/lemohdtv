import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Contact Us - LEMO TV (lemo)",
  description: "Get in touch with LEMO TV (lemo). Fast customer support, billing inquiries, and technical assistance via WhatsApp.",
};

export default function ContactPage() {
  return (
    <main style={{ padding: '8rem 2rem', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', textAlign: 'center' }}>Contact Us</h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-dim)', marginBottom: '3rem' }}>
          Have a question or need technical support? We are here to help 24/7.
        </p>

        <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
          <h3>Fastest Support: WhatsApp</h3>
          <p className="text-dim" style={{ margin: '1rem 0 2rem 0' }}>For immediate assistance regarding your subscription or technical issues, message our team on WhatsApp.</p>
          <Link href="https://wa.me/447476941777" className="btn btn--primary btn--block">
            Chat on WhatsApp
          </Link>
          
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <h3>Email Support</h3>
            <p className="text-dim" style={{ marginTop: '1rem' }}><a href="mailto:contact@lemotv.in">contact@lemotv.in</a></p>
          </div>
        </div>
      </div>
    </main>
  );
}
