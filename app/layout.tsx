import type { Metadata, Viewport } from "next"
import { Manrope, Sora } from "next/font/google"
import type React from "react"

import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"

import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://balanz.com"),
  title: {
    default: "Balanz | Personalized Nutrition That Fits Real Life",
    template: "%s | Balanz",
  },
  description:
    "Balanz delivers premium meal planning, nutrition guidance, and flexible subscriptions designed to help busy people eat better without friction.",
  applicationName: "Balanz",
  keywords: [
    "personalized meal plans",
    "nutrition subscription",
    "healthy prepared meals",
    "meal delivery",
    "balanced diet plans",
  ],
  authors: [{ name: "Balanz" }],
  creator: "Balanz",
  publisher: "Balanz",
  category: "health",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Balanz | Personalized Nutrition That Fits Real Life",
    description:
      "Premium meal plans, practical nutrition guidance, and flexible subscriptions tailored to real schedules and real goals.",
    url: "https://balanz.com",
    siteName: "Balanz",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Balanz | Personalized Nutrition That Fits Real Life",
    description:
      "Premium meal plans, practical nutrition guidance, and flexible subscriptions tailored to real schedules and real goals.",
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
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sora.variable} app-shell`}>
        <div className="site-grid">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
