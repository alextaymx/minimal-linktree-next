import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "GYLDAN | The Integrated Consulting Group",
    template: "%s | GYLDAN",
  },
  description: "GYLDAN - The Integrated Consulting Group. Execution-led services across property, hospitality, digital systems, branding and financial advisory.",
  metadataBase: new URL("https://gyldan.my"),
  keywords: ["GYLDAN", "consulting", "integrated consulting group", "property advisory", "commercial leasing", "GYLDAN Properties", "business card", "vCard", "Malaysia"],
  authors: [{ name: "GYLDAN Holdings Sdn. Bhd." }],
  openGraph: {
    title: "GYLDAN | The Integrated Consulting Group",
    description: "Execution-led services across property, hospitality, digital systems, branding and financial advisory. Connect with our team.",
    url: "https://gyldan.my",
    siteName: "GYLDAN",
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
