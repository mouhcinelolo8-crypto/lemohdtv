import type { Metadata } from "next";
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: "LEMO TV (lemohdtv) Pricing - Best Value IPTV Subscriptions",
  description: "View our flexible and affordable IPTV plans. Subscribe to LEMO TV (lemoiptv) today for 18,000+ channels and 60,000+ movies on up to 5 devices simultaneously.",
};

export default function PricingPage() {
  return (
    <main>
      <div style={{ padding: '6rem 0 2rem 0' }}>
        <Pricing />
      </div>
      <FAQ />
      <CTA />
    </main>
  );
}
