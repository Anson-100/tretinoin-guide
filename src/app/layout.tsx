import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skincare Stuff",
  description:
    "A plain-language guide to tretinoin: what it does, the benefits, the drawbacks, a simple routine, and videos from doctors. For informational purposes only.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Apply saved/system theme before paint to avoid a light-mode flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-taupe-200 dark:bg-taupe-950 font-sans text-zinc-700 dark:text-zinc-300 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
