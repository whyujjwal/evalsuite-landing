import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "EvalSuite - AI Model Evaluation Platform",
  description: "Standardized and efficient AI model evaluation for researchers, developers, and businesses.",
  keywords: "AI, machine learning, model evaluation, benchmarking, data science",
  authors: [{ name: "EvalSuite Team" }],
  openGraph: {
    title: "EvalSuite - AI Model Evaluation Platform",
    description: "Standardized and efficient AI model evaluation for researchers, developers, and businesses.",
    url: "https://evalsuite.com",
    siteName: "EvalSuite",
    images: [
      {
        url: "https://evalsuite.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EvalSuite - AI Model Evaluation Platform",
    description: "Standardized and efficient AI model evaluation for researchers, developers, and businesses.",
    images: ["https://evalsuite.com/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'