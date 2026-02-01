import React from "react"
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { client } from "@/sanity/lib/client"
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries"
import { SiteSettings } from "@/types/sanity"

export const dynamic = "force-dynamic";

export default async function ContactPage() {
    const settings = await client.fetch<SiteSettings>(SITE_SETTINGS_QUERY, {}, { next: { revalidate: 0 } })

    const phone1 = settings?.phone1 || "(0262) 335 04 15"
    const mobile = settings?.mobile || "+90 538 774 57 41"
    const email = settings?.email || "ugurlutanker@hotmail.com.tr"
    const address = settings?.address || "Sanayi Mh. İzmit San. Sit. 13. Cadde 318. Blok No: 116 İZMİT / KOCAELİ"

    const dial1 = phone1.replace(/\s+/g, '')
    const dialMob = mobile.replace(/\s+/g, '')
    const fax = settings?.fax || "(0262) 335 06 85"

    const contactInfo = [
        {
            icon: Phone,
            title: "Telefon & Fax",
            details: [`Tel: ${phone1}`, `Fax: ${fax}`],
            action: "Hemen Ara",
            href: `tel:${dial1}`,
            color: "bg-primary"
        },
        {
            icon: MessageSquare,
            title: "GSM & WhatsApp",
            details: [mobile],
            action: "WhatsApp Mesaj",
            href: `https://wa.me/${dialMob.replace('+', '')}`,
            color: "bg-green-600"
        },
        {
            icon: Mail,
            title: "E-Posta",
            details: [email],
            action: "Mail Gönder",
            href: `mailto:${email}`,
            color: "bg-slate-900"
        },
        {
            icon: MapPin,
            title: "Adres",
            details: [address],
            action: "Yol Tarifi Al",
            href: "https://maps.app.goo.gl/jcRFsFBDkVTa4Knr5",
            color: "bg-primary"
        }
    ]

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header section with focus */}
            <section className="bg-slate-900 pt-32 pb-48 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] blur-[120px] -translate-y-1/2" />
                </div>
                <div className="container relative z-10 text-center animate-slide-up">
                    <Badge className="bg-primary/20 text-primary border-primary/30 mb-8 font-bold tracking-widest px-6 py-2">
                        İRTİBATA GEÇİN
                    </Badge>
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight">Size Nasıl Yardımcı<br /><span className="text-primary">Olabiliriz?</span></h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        Muayene randevuları, teknik danışmanlık veya fiyat teklifleri için bizimle dilediğiniz kanaldan iletişime geçebilirsiniz.
                    </p>
                </div>
            </section>

            {/* Info Cards Overlay */}
            <section className="relative z-20 -mt-24 pb-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((info, idx) => (
                            <Card key={idx} className="border-none shadow-2xl rounded-[2rem] overflow-hidden group hover:translate-y-[-10px] transition-all duration-500 animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
                                <CardContent className="p-10 space-y-6">
                                    <div className={`w-16 h-16 ${info.color} rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-black/10`}>
                                        <info.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="space-y-4 min-h-[120px]">
                                        <h3 className="text-2xl font-black text-slate-900 tracking-tight">{info.title}</h3>
                                        <div className="space-y-2">
                                            {info.details.map((detail, dIdx) => (
                                                <p key={dIdx} className="text-slate-600 font-bold leading-relaxed break-words">{detail}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <Button variant="link" className="p-0 h-auto text-primary font-black group-hover:translate-x-1 transition-transform" asChild>
                                        <a href={info.href} target="_blank" rel="noopener noreferrer">
                                            {info.action} <ArrowRight className="ml-2 h-4 w-4" />
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-24 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Extra Info */}
                        <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group h-full">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Clock className="w-32 h-32 rotate-12" />
                            </div>
                            <h3 className="text-2xl font-black mb-8 relative z-10">Çalışma Saatlerimiz</h3>
                            <div className="space-y-6 relative z-10">
                                {settings?.workingHours && settings.workingHours.length > 0 ? (
                                    settings.workingHours.map((item, idx) => (
                                        <div key={idx} className={`flex justify-between items-center ${idx !== settings.workingHours!.length - 1 ? 'border-b border-white/10 pb-4' : ''}`}>
                                            <span className="font-bold text-slate-400">{item.dayRange}</span>
                                            <span className={`font-black ${item.hours.toLowerCase().includes('kapalı') ? 'text-rose-500 uppercase tracking-widest text-xs' : 'text-primary'}`}>
                                                {item.hours}
                                            </span>
                                        </div>
                                    ))
                                ) : (
                                    <>
                                        <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                            <span className="font-bold text-slate-400">Pazartesi - Cuma</span>
                                            <span className="font-black text-primary">09:00 - 18:00</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                            <span className="font-bold text-slate-400">Cumartesi</span>
                                            <span className="font-black text-primary">09:00 - 14:00</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-slate-400">Pazar</span>
                                            <span className="font-black text-rose-500 uppercase tracking-widest text-xs">Kapalı</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="relative aspect-square lg:aspect-auto h-full min-h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-100 group">
                            <iframe
                                src="https://maps.google.com/maps?q=U%C4%9Furlu%20Tanker%20%C4%B0zmit%20Muayene%20Merkezi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                            <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                                <div className="glass p-5 rounded-2xl flex items-center justify-between shadow-xl pointer-events-auto">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                            <ShieldCheck className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-slate-900">Uğurlu Tanker İzmit</p>
                                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Muayene Merkezi</p>
                                        </div>
                                    </div>
                                    <Button size="sm" variant="outline" className="text-[10px] font-black tracking-widest h-8 rounded-xl" asChild>
                                        <a href="https://maps.app.goo.gl/jcRFsFBDkVTa4Knr5" target="_blank">YOL TARİFİ</a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
