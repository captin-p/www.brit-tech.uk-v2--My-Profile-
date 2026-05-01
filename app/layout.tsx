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
    default: "Bright Konadu | Network Infrastructure Specialist",
    template: `%s | ${siteName}`,
  },
  description:
    "Bright Konadu is a Network Infrastructure Specialist, IT Support Engineer, and aspiring cybersecurity specialist based in Dijon, France. Experienced in secure LAN/Wi-Fi deployment, Cisco and Ubiquiti networking, Windows Server, CCTV systems, and creative design.",
  keywords: [
    "Bright Konadu",
    "Network Infrastructure Specialist",
    "IT Support Engineer",
    "Cybersecurity Management",
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
    "GNS3",
    "TryHackMe",
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
    title: "Bright Konadu | Network Infrastructure Specialist",
    description:
      "Network engineer delivering secure IT infrastructure, wireless deployments, CCTV systems, IT support, and creative design.",
    url: siteUrl,
    siteName,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Bright Konadu - network infrastructure, IT support, CCTV, web, and design services.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Konadu | Network Infrastructure Specialist",
    description:
      "Secure network infrastructure, CCTV, IT support, website, and graphic design services by Bright Konadu.",
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
