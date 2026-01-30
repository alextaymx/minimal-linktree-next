import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minimal Profile",
  description: "A minimalist Link-in-bio profile page.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Minimal Profile",
    description: "A minimalist Link-in-bio profile page.",
    url: "https://example.com",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
