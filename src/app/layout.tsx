import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tretinoin Guide — The Simplest Base for Better Skin",
  description:
    "A plain-language guide to tretinoin: what it does, the benefits, the drawbacks, a simple routine, and videos from doctors. For informational purposes only.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} bg-white font-sans text-gray-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
