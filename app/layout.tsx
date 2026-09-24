import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Poppins } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// The wordmark only. A geometric sans with circular bowls, which is what gives
// the logo its shape -- Inter's narrower letterforms do not read as the mark.
const brand = Poppins({
  // `-face` so it does not collide with the `--font-brand` Tailwind token that
  // consumes it in globals.css.
  variable: "--font-brand-face",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://medirx.app"),
  title: {
    default: "MediRx — the pharmacy platform that reaches out, never in",
    template: "%s — MediRx",
  },
  description:
    "Refills, pickup and delivery, chat and video calls — connected to the dispensing system a pharmacy already runs, without opening its network to anyone.",
  openGraph: {
    type: "website",
    siteName: "MediRx",
    title: "MediRx — the pharmacy platform that reaches out, never in",
    description:
      "Four pieces of software, one system of record. Built for pharmacies that would rather not open a port.",
  },
};

/**
 * Applies the saved theme before first paint. Without this the page renders in
 * the OS theme for a frame and then snaps to the chosen one, which reads as a
 * flash of the wrong colours on every navigation.
 */
const THEME_SCRIPT = `try{var t=localStorage.getItem('medirx-theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t)}}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: the inline script below sets `data-theme` on
    // this element before React hydrates, so the server markup and the live DOM
    // differ by that one attribute on purpose.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${brand.variable} ${mono.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
