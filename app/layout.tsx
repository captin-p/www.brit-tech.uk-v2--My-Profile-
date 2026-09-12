import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { defaultOgImage, siteName, siteUrl } from "@/lib/seo";
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
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "Bright Konadu | IT Infrastructure & Network Support Engineer",
    template: `%s | ${siteName}`,
  },
  description:
    "Bright Konadu is an IT Infrastructure & Network Support Engineer based in Paris, France, with 5+ years of professional experience across network infrastructure, Windows Server, Active Directory, Wi-Fi, structured cabling, field engineering, CCTV, and technical support.",
  keywords: [
    "Bright Konadu",
    "IT Infrastructure Engineer",
    "Network Support Engineer",
    "Network Engineer",
    "Systems Administrator",
    "Field Network Engineer",
    "Cybersecurity Management",
    "IT Support",
    "Remote Hands",
    "Paris France",
    "brit-tech.uk",
    "CCNA training",
    "Cisco networking",
    "Ubiquiti",
    "Windows Server",
    "Active Directory",
    "Structured Cabling",
    "CCTV installation",
    "Supabase",
    "Next.js",
    "TouteGestion",
  ],
  authors: [{ name: "Bright Konadu" }],
  creator: "Bright Konadu",
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-light-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Bright Konadu | IT Infrastructure & Network Support Engineer",
    description:
      "IT infrastructure, network engineering, systems administration, field support, and SaaS project delivery by Bright Konadu in Paris, France.",
    url: siteUrl,
    siteName,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Bright Konadu - IT infrastructure, network support, field engineering, and technology projects.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Konadu | IT Infrastructure & Network Support Engineer",
    description:
      "IT infrastructure, networking, systems support, field engineering, and SaaS projects by Bright Konadu.",
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
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
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
