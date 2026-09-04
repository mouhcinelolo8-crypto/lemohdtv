import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - LEMO TV",
};

export default function PrivacyPage() {
  return (
    <main style={{ padding: '8rem 2rem', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Privacy Policy</h1>
        <div className="text-dim" style={{ lineHeight: '1.8' }}>
          <p>At LEMO TV, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.</p>
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: '#fff' }}>Information Collection</h3>
          <p>We only collect the information necessary to provide you with our IPTV service, which may include your email address and payment details (processed securely by third parties).</p>
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: '#fff' }}>Data Protection</h3>
          <p>Your data is encrypted and never sold or shared with third-party marketing companies. We maintain strict confidentiality regarding our subscriber base.</p>
        </div>
      </div>
    </main>
  );
}
