import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Setup Guides — Install on Fire Stick, Android, iOS & Smart TV",
  description: "LEMO TV is the official premium IPTV service. Follow our step-by-step guides to install on Fire TV Stick, Android, iOS, Samsung/LG, MAG, Windows, and TiviMate.",
};

export default function SetupGuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
