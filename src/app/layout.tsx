import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Uğurlu Tanker | Tanker Muayene & Sertifikalandırma Merkezi",
  description: "Uğurlu Tanker - TSE Sertifikalı Tanker Muayene, ADR Periyodik Muayene ve Belgelendirme Hizmetleri. Kocaeli İzmit Muayene Merkezi.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
