import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const grtskGigaBold = localFont({
  src: "../fonts/TRYGrtsk-BoldGiga.ttf",
  variable: "--font-grtsk-GigaBold",
  weight: "100 900",
})

const grtskGigaSlantBold = localFont({
  src: "../fonts/TRYGrtsk-BoldGigaSlant.ttf",
  variable: "--font-grtsk-GigaSlantBold",
  weight: "100 900",
})

const grtskGigaSemiBold = localFont({
  src: "../fonts/TRYGrtsk-SemiBoldGiga.ttf",
  variable: "--font-grtsk-GigaSemiBold",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "FULL-CYCLE EVENT AGENCY",
  description: "FULL-CYCLE EVENT AGENCY",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${grtskGigaSemiBold.variable} ${grtskGigaBold.variable} ${grtskGigaSlantBold.variable}`}>
        {children}
      </body>
    </html>
  )
}
