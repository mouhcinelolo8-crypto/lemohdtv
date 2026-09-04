import type { Metadata } from "next";
import Hero from '@/components/Hero';
import Sports from '@/components/Sports';
import Pricing from '@/components/Pricing';
import Devices from '@/components/Devices';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: "LEMO TV (lemohdtv) - Best IPTV Provider in Canada",
  description: "Top-rated IPTV service in Canada. Stream 18,000+ live TV channels, hockey, and local Canadian networks with LEMO TV (lemotv). 4K Ultra HD, No freezing.",
  keywords: ["lemohdtv canada", "lemo tv canada", "best iptv canada", "canada iptv provider", "lemotv canada"],
};

export default function CanadaLanding() {
  return (
    <main>
      <Hero />
      <Sports />
      <Pricing />
      <Devices />
      <FAQ />
      <CTA />
    </main>
  );
}
