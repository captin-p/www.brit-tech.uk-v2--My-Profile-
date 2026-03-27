import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bright Konadu | Network Infrastructure Specialist",
  description:
    "Bright Konadu is a CCNA-certified Network Infrastructure Specialist and Graphic Designer based in Dijon, France. Expert in LAN/WAN deployment, Cisco/Ubiquiti networking, Windows Server, CCTV systems, and creative design.",
  keywords: [
    "Bright Konadu",
    "Network Infrastructure Specialist",
    "IT Support",
    "Systems Support",
    "Graphic Designer",
    "Dijon France",
    "brit-tech.uk",
    "CCNA",
    "Cisco networking",
    "Ubiquiti",
    "Windows Server",
    "CCTV installation",
  ],
  authors: [{ name: "Bright Konadu" }],
  openGraph: {
    title: "Bright Konadu | Network Infrastructure Specialist",
    description:
      "CCNA-certified network engineer delivering enterprise IT infrastructure, wireless deployments, CCTV systems, and creative design.",
    url: "https://brit-tech.uk",
    siteName: "Brit Tech",
    locale: "en_GB",
    type: "website",
  },
  metadataBase: new URL("https://brit-tech.uk"),
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
