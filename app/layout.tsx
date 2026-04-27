import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PricerItemMarketplace.us | Premium Digital Agency",
  description:
    "We bridge the gap between complex technology and strategic business goals to deliver world-class digital experiences.",
  icons: {
    icon: "/images/arnytics llc (2).png",
    shortcut: "/images/arnytics llc (2).png",
    apple: "/images/arnytics llc (2).png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
