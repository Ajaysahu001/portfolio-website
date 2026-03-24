import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { siteConfig } from "@/lib/seo";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

// ─── Font optimisation ───────────────────────────────────────────────────────
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true, // reduces CLS by sizing the fallback font to match Inter
  fallback: ["system-ui", "sans-serif"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "optional", // never swaps in; eliminates CLS for a secondary font
  preload: false,
  adjustFontFallback: true,
  fallback: ["Menlo", "Monaco", "Consolas", "monospace"],
});

// ─── Viewport ────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ─── Root metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // metadataBase resolves all relative OG/Twitter image paths
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortTitle}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  // ── Canonical & alternates ──
  alternates: {
    canonical: "/",
    languages: { "en-IN": "/" },
  },

  // ── Open Graph ──
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: siteConfig.locale,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Front-end Developer`,
        type: "image/png",
      },
    ],
  },

  // ── Twitter Card ──
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        alt: `${siteConfig.name} — Front-end Developer`,
      },
    ],
  },

  // ── Robots ──
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // ── Manifest & icons ──
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icon", type: "image/png", sizes: "32x32" },
      { url: "/icon?size=192", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
    shortcut: "/icon",
  },

  // ── Verification (add your codes when ready) ──
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION ?? "",
  },

  // ── Category ──
  category: "technology",
};

// ─── Root layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" suppressHydrationWarning className="dark">
      <head>
        <meta name="google-site-verification" content="uviTmwE-OKPRdP7-cmjnVVW3IJOBuulVvITiunV73fs" />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider>
          {/* Skip navigation — keyboard / screen-reader accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-violet-600 focus:text-white focus:font-semibold focus:outline-none"
          >
            Skip to main content
          </a>

          {/* Structured data injected once at root */}
          <SchemaMarkup />

          <CustomCursor />
          <ScrollProgress />

          <header>
            <Navbar />
          </header>

          <main id="main-content" tabIndex={-1}>
            {children}
          </main>

          <Footer />

          {/* Analytics last — after all content, no render impact */}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
