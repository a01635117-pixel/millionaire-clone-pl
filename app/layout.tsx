import type { Metadata } from "next";
import { Cinzel, Rajdhani } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Milionerzy – Kto chce zostać milionerem?",
  description: "Szkolny klon teleturnieju Milionerzy.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${cinzel.variable} ${rajdhani.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#020818]">{children}</body>
    </html>
  );
}
