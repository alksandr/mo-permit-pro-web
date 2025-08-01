import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MO Permit Pro - Missouri Driver's Permit Practice Test App",
  description:
    "Master your Missouri driver's permit test in English, Ukrainian, Russian, Spanish, or Filipino. 346+ practice questions, instant feedback, and works offline.",
  keywords: "Missouri permit test, driver's permit, practice test, multilingual, Ukrainian, Russian, Spanish, Filipino",
  authors: [{ name: "MO Permit Pro" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" }
    ],
    other: [
      { rel: "mask-icon", url: "/favicon.ico", color: "#000000" }
    ]
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "MO Permit Pro - Missouri Driver's Permit Practice Test App",
    description: "Master your Missouri driver's permit test in multiple languages with 346+ practice questions.",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
