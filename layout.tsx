import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DJILEN — Find Your Way",
  description: "Premium streetwear rooted in Haitian culture, identity, and journey.",
  openGraph: {
    title: "DJILEN — Find Your Way",
    description: "Premium streetwear rooted in Haitian culture, identity, and journey.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DJILEN — Find Your Way",
    description: "Premium streetwear rooted in Haitian culture, identity, and journey.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
