import type { Metadata } from "next";
import { Cairo, Poppins } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const cairo = Cairo({
  subsets: ["latin"],
  variable: "--font-cairo",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "LEMO TV (lemohdtv) - Official IPTV: 18,000+ Live Channels & 4K Sports",
  description: "LEMO TV (lemohdtv) is the official premium IPTV service - 18,000+ live channels, 60,000+ movies and 8,400+ TV series in up to 4K Ultra HD. Best iptv for sports.",
  keywords: ["lemohdtv", "lemo", "lemotv", "lemo tv", "lemoiptv", "lemo iptv", "iptv", "live tv", "4k iptv"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cairo.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Topbar />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="235bdd8a-ed59-4224-8dfa-f6e1c8deabb5";window.$crisp.push(["config", "position:reverse", [true]]);(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`
        }} />
      </body>
    </html>
  );
}
