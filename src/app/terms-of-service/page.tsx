import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - LEMO TV",
};

export default function TermsPage() {
  return (
    <main style={{ padding: '8rem 2rem', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Terms of Service</h1>
        <div className="text-dim" style={{ lineHeight: '1.8' }}>
          <p>By accessing and using LEMO TV, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you may not access the service.</p>
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: '#fff' }}>1. Service Provision</h3>
          <p>LEMO TV provides premium IPTV services including live TV channels, VODs, and sports broadcasts. We guarantee 99% uptime on our servers but cannot be held responsible for external ISP blocks.</p>
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: '#fff' }}>2. Account Usage</h3>
          <p>Your subscription is limited to the number of simultaneous connections you purchased. Sharing accounts beyond this limit will result in automatic suspension.</p>
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: '#fff' }}>3. Content Availability</h3>
          <p>The channel lineup and VOD library are subject to change without prior notice. We strive to maintain the most requested channels.</p>
        </div>
      </div>
    </main>
  );
}
