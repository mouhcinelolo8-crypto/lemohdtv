import type { Metadata } from "next";
import Hero from '@/components/Hero';
import Sports from '@/components/Sports';
import Pricing from '@/components/Pricing';
import Devices from '@/components/Devices';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: "LEMO TV (lemohdtv) - #1 Best IPTV Service in USA",
  description: "Get the best IPTV service in the USA with LEMO TV (lemoiptv). Watch 18,000+ live channels, 60k VODs, and American sports in 4K Ultra HD.",
  keywords: ["lemohdtv usa", "lemo tv usa", "best iptv usa", "usa iptv provider", "lemo iptv usa"],
};

export default function UsaLanding() {
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
