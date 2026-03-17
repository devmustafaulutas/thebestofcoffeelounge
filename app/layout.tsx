import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { GSAPProvider } from "@/components/gsap-provider"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { CustomCursor } from "@/components/custom-cursor"
import "@/app/globals.css"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "The Best Of Coffee Lounge | Menü",
    template: "%s | The Best Of Coffee Lounge",
  },
  description:
    "El yapımı özel kahvelerimiz, imza içeceklerimiz ve usta tatlılarımızı keşfedin. Kocaeli'nin en iyi kahve deneyimi.",
  keywords: [
    "kahve", "coffee lounge", "kocaeli kahve", "qr menü",
    "cappuccino", "latte", "türk kahvesi", "tatlı", "milkshake"
  ],
  authors: [{ name: "The Best Of Coffee Lounge" }],
  creator: "The Best Of Coffee Lounge",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: BASE_URL,
    siteName: "The Best Of Coffee Lounge",
    title: "The Best Of Coffee Lounge | Menü",
    description: "El yapımı özel kahvelerimiz, imza içeceklerimiz ve usta tatlılarımızı keşfedin.",
    images: [
      {
        url: "/images/logo.png", 
        width: 1200,
        height: 630,
        alt: "The Best Of Coffee Lounge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Of Coffee Lounge | Menü",
    description: "El yapımı özel kahvelerimiz, imza içeceklerimiz ve usta tatlılarımızı keşfedin.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f0eb" },
    { media: "(prefers-color-scheme: dark)", color: "#110b07" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      {/* Developed by Mustafa Ulutaş */}
      {/* GitHub: https://github.com/devmustafaulutas */}
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <GSAPProvider>
            <SmoothScrollProvider>{children}</SmoothScrollProvider>
          </GSAPProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}