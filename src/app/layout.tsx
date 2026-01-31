import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

import { client } from "@/sanity/lib/client"
import { SITE_SETTINGS_QUERY, SERVICES_QUERY } from "@/sanity/lib/queries"
import { SiteSettings, Service } from "@/types/sanity"

export const dynamic = "force-dynamic";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Uğurlu Tanker | Tanker Muayene & Sertifikalandırma Merkezi",
  description: "Uğurlu Tanker - TSE Sertifikalı Tanker Muayene, ADR Periyodik Muayene ve Belgelendirme Hizmetleri. Kocaeli İzmit Muayene Merkezi.",
  icons: {
    icon: "/images/logo-ugurlu.png",
    apple: "/images/logo-ugurlu.png",
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [settings, services] = await Promise.all([
    client.fetch<SiteSettings>(SITE_SETTINGS_QUERY, {}, { next: { revalidate: 0 } }),
    client.fetch<Service[]>(SERVICES_QUERY, {}, { next: { revalidate: 0 } })
  ])

  return (
    <html lang="tr">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar settings={settings} />
          <main className="flex-1">{children}</main>
          <Footer settings={settings} services={services} />
        </div>
      </body>
    </html>
  )
}
