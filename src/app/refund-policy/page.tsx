import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy - LEMO TV",
};

export default function RefundPage() {
  return (
    <main style={{ padding: '8rem 2rem', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Refund Policy</h1>
        <div className="text-dim" style={{ lineHeight: '1.8' }}>
          <p>We want you to be completely satisfied with LEMO TV. That is why we highly recommend requesting a short trial before purchasing a long-term subscription.</p>
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: '#fff' }}>7-Day Money Back Guarantee</h3>
          <p>If you are experiencing unresolvable technical issues within the first 7 days of your purchase, you are eligible for a full refund. Please contact our support team to troubleshoot before requesting a refund.</p>
        </div>
      </div>
    </main>
  );
}
