import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "18,000+ Live Channels List - LEMO TV (lemohdtv)",
  description: "Explore the massive channel lineup at LEMO TV (lemohdtv). Access over 18,000+ live premium TV channels, international sports, and 60k VODs in 4K.",
};

export default function ChannelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
