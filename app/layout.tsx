import "./globals.css"
import { Poppins, Playfair_Display } from "next/font/google"
import type { Metadata } from "next"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: 'swap', 
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap', 
  preload: true,
})

export const metadata: Metadata = {
  title: "Bandipur House IIT Madras",
  description: "Welcome to Bandipur House at IIT Madras",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${poppins.variable} ${playfair.variable} font-sans overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}

