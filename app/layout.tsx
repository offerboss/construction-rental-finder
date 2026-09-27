import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { siteConfig } from "./lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Construction Rental Finder | Equipment Rentals Near You",
    template: "%s | Construction Rental Finder",
  },
  description:
    "Find construction equipment rentals near you. Compare local providers for excavators, skid steers, lifts, forklifts, generators, and more.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
