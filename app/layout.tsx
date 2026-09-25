import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactDock } from "@/components/layout/ContactDock";
import { BusinessJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} | ${siteConfig.tagline}`, template: `%s | ${siteConfig.name}` },
  description: `${siteConfig.subline}. AC not cooling, leaking or noisy? Call ${siteConfig.phone.display}, open 24 hours.`,
  applicationName: siteConfig.name,
  keywords: [
    "AC repair Dubai",
    "AC not cooling Dubai",
    "AC gas refill Dubai",
    "AC servicing Dubai",
    "AC duct cleaning Dubai",
    "24 hour AC repair Dubai",
    "AC repair Sheikh Zayed Road",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.subline,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = { themeColor: "#084B7D" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink">
          Skip to content
        </a>
        <BusinessJsonLd />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ContactDock />
      </body>
    </html>
  );
}
