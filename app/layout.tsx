import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travscale — The Travel Operations Platform",
  description:
    "Travscale is the modern operations platform for travel agencies. Streamline bookings, invoices, itineraries, and scale your travel business. Join the waitlist today.",
  keywords: [
    "travel agency software",
    "travel operations platform",
    "travel management",
    "travscale",
  ],
  openGraph: {
    title: "Travscale — The Travel Operations Platform",
    description: "Streamline your travel agency operations. Join the waitlist.",
    url: "https://travscale.com",
    siteName: "Travscale",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
