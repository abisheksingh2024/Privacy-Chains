import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Privacy Protocol Comparison: Canton · Zama · Midnight",
  description: "A comprehensive comparative analysis of three leading privacy-focused blockchain protocols — their architectures, strengths, risks, and prognosis.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
