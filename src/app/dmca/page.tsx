import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA Policy - LEMO TV",
};

export default function DMCAPage() {
  return (
    <main style={{ padding: '8rem 2rem', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>DMCA Policy</h1>
        <div className="text-dim" style={{ lineHeight: '1.8' }}>
          <p>LEMO TV respects the intellectual property rights of others. We comply with the Digital Millennium Copyright Act (DMCA) and act expeditiously upon receipt of a valid infringement notice.</p>
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: '#fff' }}>Disclaimer</h3>
          <p>LEMO TV does not host, provide, archive, store, or distribute media of any kind. We merely act as an index of links already publicly available on the internet, which to the best of our knowledge are intentionally made public by the copyright holders.</p>
        </div>
      </div>
    </main>
  );
}
