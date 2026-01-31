import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { SiteSettings } from "@/types/sanity"

const footerLinks = [
    {
        title: "Kurumsal", links: [
            { name: "Hakkımızda", href: "/kurumsal#hakkimizda" },
            { name: "Misyon & Vizyon", href: "/kurumsal#misyon-vizyon" },
            { name: "Fiyat Listesi", href: "/fiyat-listesi" },
        ]
    },
    {
        title: "Hizmetlerimiz", links: [
            { name: "ADR Periyodik Muayene", href: "/hizmetlerimiz" },
            { name: "Hacimsel Kalibrasyon", href: "/hizmetlerimiz" },
            { name: "T9 Belgesi", href: "/hizmetlerimiz" },
            { name: "Sızdırmazlık Testi", href: "/hizmetlerimiz" },
        ]
    },
]

export function Footer({ settings }: { settings?: SiteSettings }) {
    const currentYear = new Date().getFullYear()

    const phone1 = settings?.phone1 || "(0262) 335 04 15"
    const mobile = settings?.mobile || "+90 538 774 57 41"
    const email = settings?.email || "ugurlutanker@hotmail.com.tr"
    const address = settings?.address || "Sanayi Mh. İzmit San. Sit. 13. Cadde 318. Blok No: 116 İZMİT / KOCAELİ"
    const fax = settings?.fax || "(0262) 335 06 85"

    const dial1 = phone1.replace(/\s+/g, '')
    const dialMob = mobile.replace(/\s+/g, '')

    return (
        <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t-8 border-primary relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Logo & Info */}
                    <div className="lg:col-span-5 space-y-8">
                        <Link href="/" className="inline-block transition-transform hover:scale-105 active:scale-95">
                            <Image
                                src="/images/logo-ugurlu.png"
                                alt="Uğurlu Tanker"
                                width={300}
                                height={80}
                                className="h-24 w-auto object-contain brightness-0 invert"
                            />
                        </Link>
                        <div className="space-y-4 max-w-sm">
                            <p className="text-sm leading-relaxed text-slate-400 font-medium">
                                UĞURLU TANKER SINAİ GAZLAR İNŞ.TUR.TİC.SAN.LTD.ŞTİ olarak, tehlikeli madde taşımacılığı sektöründe güvenliğin garantisiyiz.
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    {footerLinks.map((group) => (
                        <div key={group.title} className="lg:col-span-2 space-y-6">
                            <h4 className="text-white font-black uppercase tracking-widest text-xs border-l-2 border-primary pl-3">{group.title}</h4>
                            <ul className="space-y-3">
                                {footerLinks.find(f => f.title === group.title)?.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Details */}
                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="text-white font-black uppercase tracking-widest text-xs border-l-2 border-primary pl-3">İletişim</h4>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3 group">
                                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                <span className="text-sm leading-relaxed">{address}</span>
                            </div>
                            <div className="flex items-center space-x-3 group">
                                <Phone className="h-5 w-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                                <div className="text-sm font-bold flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] text-slate-500 uppercase">Tel:</span>
                                        <a href={`tel:${dial1}`} className="hover:text-primary transition-colors">{phone1}</a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] text-slate-500 uppercase">Fax:</span>
                                        <span className="text-slate-300 font-bold">{fax}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 group text-primary">
                                <Phone className="h-5 w-5 shrink-0 group-hover:scale-110 transition-transform" />
                                <a href={`tel:${dialMob}`} className="text-sm font-black">{mobile}</a>
                            </div>
                            <div className="flex items-center space-x-3 group">
                                <Mail className="h-5 w-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                                <a href={`mailto:${email}`} className="text-sm hover:text-primary transition-colors lowercase">{email}</a>
                            </div>
                        </div>
                        <div className="pt-4 flex items-center gap-4 grayscale opacity-40">
                            <Image src="/images/logo-tse.png" alt="TSE" width={60} height={30} className="h-8 w-auto invert" />
                            <Image src="/images/logo-tmt.png" alt="TMT" width={60} height={30} className="h-8 w-auto invert" />
                        </div>
                    </div>
                </div>

                <Separator className="my-12 bg-slate-800" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                        <span>© {currentYear} {settings?.companyName || "Uğurlu Tanker"}. Tüm hakları saklıdır.</span>
                    </div>
                    <div className="text-center md:text-right">
                        Kocaeli Tanker Muayene, Test ve Sertifikalandırma Merkezi
                    </div>
                </div>
            </div>
        </footer>
    )
}
