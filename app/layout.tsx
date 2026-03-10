import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { GSAPProvider } from "@/components/gsap-provider"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { CustomCursor } from "@/components/custom-cursor"
import "@/app/globals.css"

export const metadata: Metadata = {
  title: "The Best Of Coffee Lounge | Menü",
  description:
    "El yapımı özel kahvelerimiz, imza içeceklerimiz ve usta tatlılarımızı keşfedin. Premium kahve deneyimi.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
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
