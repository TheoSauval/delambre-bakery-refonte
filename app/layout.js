import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroller from "./components/smoothScroller";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Delambre Bakery - New York Style Cookies",
  description: "Cookies new-yorkais home-made à Lille et Paris. Moelleux à l'intérieur, croustillant à l'extérieur.",
  // Preview de refonte, pas le site officiel : à retirer si ce domaine devient la prod.
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          aria-hidden="true"
          className="fixed inset-0 z-[100] bg-foreground pointer-events-none animate-curtainUp motion-reduce:hidden"
        >
          <div className="absolute bottom-0 left-0 h-2 w-full origin-left scale-x-0 animate-timerFill bg-blanccasse" />
        </div>
        <SmoothScroller />
        <div id="smooth-wrapper" className="pointer-events-none">
          <div id="smooth-content" className="pointer-events-none">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
