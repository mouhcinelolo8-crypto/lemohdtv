import Hero from '@/components/Hero';
import Sports from '@/components/Sports';
import Pricing from '@/components/Pricing';
import Devices from '@/components/Devices';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function Home() {
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