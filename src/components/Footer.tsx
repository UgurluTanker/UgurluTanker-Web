import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, ShieldCheck, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { SiteSettings, Service } from "@/types/sanity"

export function Footer({ settings, services }: { settings?: SiteSettings, services?: Service[] }) {
    const currentYear = new Date().getFullYear()

    // Remove duplicates and limit to 5
    const uniqueServices = Array.from(new Set(services?.map(s => s.title)))
        .map(title => services?.find(s => s.title === title))
        .filter(Boolean)
        .slice(0, 5)

    const dynamicServiceLinks = uniqueServices.map(service => ({
        name: service!.title,
        href: "/hizmetlerimiz"
    }))

    const phone1 = settings?.phone1 || "(0262) 335 04 15"
    const mobile = settings?.mobile || "+90 538 774 57 41"
    const email = settings?.email || "ugurlutanker@hotmail.com.tr"
    const address = settings?.address || "Sanayi Mh. İzmit San. Sit. 13. Cadde 318. Blok No: 116 İZMİT / KOCAELİ"
    const fax = settings?.fax || "(0262) 335 06 85"

    const dial1 = phone1.replace(/\s+/g, '')
    const dialMob = mobile.replace(/\s+/g, '')

    return (
        <footer className="bg-[#020617] text-slate-400 pt-16 pb-8 border-t border-slate-900 relative overflow-hidden">
            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="inline-block transition-transform hover:scale-105 active:scale-95">
                            <Image
                                src="/images/logo-ugurlu.png"
                                alt="Uğurlu Tanker"
                                width={240}
                                height={60}
                                className="h-16 w-auto object-contain brightness-0 invert"
                            />
                        </Link>
                        <p className="text-xs leading-relaxed max-w-xs font-medium opacity-80 uppercase tracking-wider">
                            {settings?.companyName || "UĞURLU TANKER LTD. ŞTİ."}
                            <span className="block mt-2 normal-case tracking-normal opacity-60">
                                Tehlikeli madde taşımacılığı sektöründe güvenliğin garantisiyiz.
                            </span>
                        </p>
                        <div className="flex items-center gap-3">
                            {settings?.facebookUrl && (
                                <a href={settings.facebookUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all group">
                                    <Facebook className="h-4 w-4" />
                                </a>
                            )}
                            {settings?.instagramUrl && (
                                <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all group">
                                    <Instagram className="h-4 w-4" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="lg:col-span-2 space-y-5">
                        <h4 className="text-white font-black uppercase tracking-widest text-[10px] border-l-2 border-primary pl-3">Kurumsal</h4>
                        <ul className="space-y-2 text-xs">
                            <li><Link href="/kurumsal#hakkimizda" className="hover:text-primary transition-colors">Hakkımızda</Link></li>
                            <li><Link href="/kurumsal#misyon-vizyon" className="hover:text-primary transition-colors">Misyon & Vizyon</Link></li>
                            <li><Link href="/fiyat-listesi" className="hover:text-primary transition-colors">Fiyat Listesi</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2 space-y-5">
                        <h4 className="text-white font-black uppercase tracking-widest text-[10px] border-l-2 border-primary pl-3">Hizmetler</h4>
                        <ul className="space-y-2 text-xs">
                            {dynamicServiceLinks.length > 0 ? (
                                dynamicServiceLinks.map(link => (
                                    <li key={link.name}><Link href={link.href} className="hover:text-primary transition-colors">{link.name}</Link></li>
                                ))
                            ) : (
                                <>
                                    <li><Link href="/hizmetlerimiz" className="hover:text-primary transition-colors">ADR Muayene</Link></li>
                                    <li><Link href="/hizmetlerimiz" className="hover:text-primary transition-colors">T9 Belgesi</Link></li>
                                </>
                            )}
                        </ul>
                    </div>

                    <div className="lg:col-span-4 space-y-5">
                        <h4 className="text-white font-black uppercase tracking-widest text-[10px] border-l-2 border-primary pl-3">İletişim</h4>
                        <div className="space-y-3 text-xs">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{address}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <span className="text-[9px] text-slate-500 uppercase font-black block">Telefon / Fax</span>
                                    <a href={`tel:${dial1}`} className="hover:text-primary text-slate-300 font-bold">{phone1}</a>
                                    <p className="opacity-60">{fax}</p>
                                </div>
                                <div className="space-y-1 text-primary">
                                    <span className="text-[9px] text-slate-500 uppercase font-black block">7/24 Destek</span>
                                    <a href={`tel:${dialMob}`} className="font-black text-sm">{mobile}</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 pt-1">
                                <Mail className="h-4 w-4 text-primary shrink-0" />
                                <a href={`mailto:${email}`} className="hover:text-primary transition-colors lowercase font-bold text-slate-300">{email}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className="my-10 bg-slate-900" />

                <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-[9px] font-bold uppercase tracking-[2px] text-slate-500">
                    <div className="flex items-center gap-2 order-2 lg:order-1">
                        <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                        <span>© {currentYear} {settings?.companyName || "Uğurlu Tanker"}. Tüm hakları saklıdır.</span>
                    </div>

                    <div className="order-1 lg:order-2 flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-full border border-slate-800 transition-all hover:border-primary/30 group">
                        <span className="opacity-60 tracking-widest">DESIGNED BY</span>
                        <span className="text-slate-300 font-black group-hover:text-primary transition-colors tracking-normal">FURKAN YURTSEVEN</span>
                        <div className="flex items-center gap-2 border-l border-slate-800 pl-3">
                            <a href="https://linkedin.com/in/furkanyurtseven/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="hover:text-primary transition-colors">
                                <Linkedin className="h-3 w-3" />
                            </a>
                            <a href="https://wa.me/905050859057" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="hover:text-primary transition-colors">
                                <MessageCircle className="h-3 w-3" />
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 order-3 opacity-40 grayscale hover:grayscale-0 transition-all">
                        <Image src="/images/logo-tse.png" alt="TSE" width={40} height={20} className="h-5 w-auto invert" />
                        <Image src="/images/logo-tmt.png" alt="TMT" width={40} height={20} className="h-5 w-auto invert" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
