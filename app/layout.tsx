import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cleanbreakapp.vercel.app"),
  title: { default: "CleanBreak — quit smoking, kindly", template: "%s · CleanBreak" },
  description:
    "A calm iOS companion for quitting smoking or vaping: a live streak, honest numbers, a kind coach, and a community that gets it.",
  openGraph: {
    title: "CleanBreak",
    description: "Quit smoking, kindly. A calm iOS companion for the whole climb.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <header className="siteHeader">
          <div className="container">
            <nav>
              <Link className="wordmark" href="/">CleanBreak</Link>
              <div className="links">
                <Link href="/support">Support</Link>
                <Link href="/privacy">Privacy</Link>
              </div>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="siteFooter">
          <div className="container">
            <span>© 2026 CleanBreak</span>
            <span>
              <Link href="/privacy">Privacy Policy</Link> · <Link href="/support">Support</Link>
            </span>
            <span className="fine">Made for the days you keep.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
