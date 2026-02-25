import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

/* Design System Typography
 * Headings: Serif (Newsreader) - large, confident, generous spacing
 * Body: Sans-serif (Inter) - clean, 16-18px, line-height 1.6-1.8
 */

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Job Notification Tracker",
  description: "Track your job applications with intention",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${newsreader.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
