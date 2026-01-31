"use client"

import React from "react"
import { ShieldCheck, Wrench, CheckCircle2, FileText, ArrowRight, Gauge } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const features = [
    {
        icon: ShieldCheck,
        title: "TSE Yetkili Muayene",
        description: "ADR Mevzuatına uygun, TSE tarafından yetkilendirilmiş resmi muayene merkezi.",
        color: "text-primary"
    },
    {
        icon: Gauge,
        title: "Periyodik Kontroller",
        description: "Tanker ve basınçlı kapların periyodik sızdırmazlık ve basınç testleri.",
        color: "text-blue-600"
    },
    {
        icon: Wrench,
        title: "Teknik Servis",
        description: "Muayene sonrası gerekli görülen teknik düzeltmeler ve standartlara uyum çalışmaları.",
        color: "text-slate-900"
    },
    {
        icon: FileText,
        title: "Belgelendirme",
        description: "T9 Belgesi, Sızdırmazlık Belgesi ve diğer tüm gerekli sertifikalandırma işlemleri.",
        color: "text-primary"
    }
]

export default function MuayeneServisPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            {/* Hero Section */}
            <section className="bg-slate-900 pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
                </div>
                <div className="container relative z-10 text-center animate-slide-up">
                    <Badge className="bg-primary/20 text-primary border-primary/30 mb-8 font-bold tracking-widest px-6 py-2">
                        TEKNİK MÜKEMMELİYET
                    </Badge>
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight">Muayene & <span className="text-primary">Servis</span></h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
                        Güvenli taşımacılık için uluslararası standartlarda denetim ve teknik destek sağlıyoruz.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
                        <div className="space-y-8 animate-fade-in">
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Neden Muayene ve Servis Almalısınız?</h2>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                Tehlikeli madde taşıyan tankerlerin hem yasal mevzuatlara uyumu hem de can/mal güvenliği için düzenli muayene ve teknik servis hizmeti alması zorunludur. Uğurlu Tanker olarak biz, bu süreci en hızlı ve profesyonel şekilde yönetiyoruz.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "ADR Standartlarına %100 Uyum",
                                    "Modern Test Ekipmanları",
                                    "Uzman Mühendis Kadrosu",
                                    "Hızlı Raporlama ve Belgelendirme"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                                            <CheckCircle2 className="h-4 w-4 text-primary" />
                                        </div>
                                        <span className="font-bold text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Button size="lg" className="bg-primary font-black h-14 px-10 rounded-2xl shadow-xl shadow-primary/20" asChild>
                                <Link href="/iletisim">Hemen Randevu Al <ArrowRight className="ml-2 h-5 w-5" /></Link>
                            </Button>
                        </div>
                        <div className="relative aspect-square md:aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/inspection-detail.png"
                                alt="Muayene Merkezi"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <Card key={idx} className="border-none shadow-xl rounded-[2rem] hover:translate-y-[-5px] transition-all bg-white overflow-hidden group">
                                <CardContent className="p-8 space-y-6">
                                    <div className={`w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors`}>
                                        <feature.icon className={`h-7 w-7 ${feature.color} group-hover:text-white transition-colors`} />
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-black text-slate-900 tracking-tight">{feature.title}</h3>
                                        <p className="text-slate-500 font-medium text-sm leading-relaxed">{feature.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Detailed ADR Rules Section */}
                    <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <Badge className="bg-primary/10 text-primary border-none font-extrabold px-6 py-2 tracking-wider">ADR MEVZUAT REHBERİ</Badge>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">ADR&apos;li Tankerlerde <br /><span className="text-primary">Muayene Takvimi</span></h2>
                            <div className="space-y-6">
                                {[
                                    { title: "ADR'siz Araçların Dönüşümü", desc: "Durum tespit belgesi almış ADR'siz araçların tank muayenesi ve taşıt uygunluk muayenesi firmamızda güvenle yapılmaktadır." },
                                    { title: "Ara Muayene (3 Yıl)", desc: "ADR'li olan tankerlerin ilk muayene tarihinden itibaren her 3 yılda bir ara muayenesi yapılması zorunludur." },
                                    { title: "Periyodik Muayene (6 Yıl)", desc: "ADR'li tankerlerin ilk muayene tarihinden itibaren her 6 yılda bir kapsamlı periyodik muayenesi gerçekleştirilmelidir." },
                                    { title: "İstisnai Muayene", desc: "Ekipman değişimi, tank hasarları veya kaza durumlarında takvim beklemeksizin yapılması gereken acil denetimdir." },
                                    { title: "Yıllık T9 Muayenesi", desc: "Düzenli olarak her yıl yapılması zorunlu olan araç ADR uygunluk belgesi yenileme işlemidir." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 group p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-100">
                                        <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                                            <span className="text-white font-black text-sm">{idx + 1}</span>
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-black text-slate-900">{item.title}</h4>
                                            <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-slate-100 rounded-[3rem] p-8 md:p-12 relative overflow-hidden group">
                            <div className="relative z-10 space-y-6">
                                <ShieldCheck className="w-16 h-16 text-primary mb-4" />
                                <h3 className="text-2xl font-black text-slate-900">Uzman Kadromuzla Yanınızdayız</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">
                                    Firmamız, tehlikeli madde taşıyan eski araç üst yapıların belgelendirmeleri hakkındaki yönergeler kapsamında tüm işlemleri uzman mühendis kadromuzla titizlikle yürütmektedir.
                                </p>
                                <div className="p-6 bg-white rounded-2xl border border-slate-200">
                                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Hizmet Kapsamı</p>
                                    <p className="text-slate-900 font-black">ADR, T9, Taşıt Uygunluk ve Tank Muayeneleri</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Required Documents Section */}
                    <div className="mt-32 bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                            <FileText className="w-64 h-64 rotate-12" />
                        </div>
                        <div className="relative z-10">
                            <Badge className="bg-primary hover:bg-primary text-white border-none px-4 py-1 mb-6">HAZIRLIK REHBERİ</Badge>
                            <h2 className="text-3xl md:text-5xl font-black mb-12 leading-tight">Muayene İçin Gerekli <br /><span className="text-primary">Evrak Listesi</span></h2>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                {/* T9 Documents */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                                            <Badge variant="outline" className="text-white border-white/20">T9</Badge>
                                        </div>
                                        <h3 className="text-2xl font-black">T9 Uygunluk Belgeleri</h3>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        {[
                                            "Araç Ruhsatı",
                                            "Güncel Fenni Muayene",
                                            "Son ADR Uygunluk / Taşıt Uygunluk Belgesi",
                                            "Tehlikeli Madde Sigorta Poliçesi",
                                            "Güncel Muayene Sertifikası"
                                        ].map((doc, idx) => (
                                            <div key={idx} className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                                                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                                                    <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white" />
                                                </div>
                                                <span className="font-bold text-slate-300 group-hover:text-white transition-colors">{doc}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tank Inspection Documents */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                                            <Badge variant="outline" className="text-white border-white/20">TANK</Badge>
                                        </div>
                                        <h3 className="text-2xl font-black">Tank Muayene Belgeleri</h3>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        {[
                                            "Araç Ruhsatı",
                                            "Güncel Fenni Muayene",
                                            "Son ADR Uygunluk / Taşıt Uygunluk Belgesi",
                                            "Tehlikeli Madde Sigorta Poliçesi",
                                            "Muayene Sertifikası",
                                            "Resmi Yıkama Belgesi (Kritik)"
                                        ].map((doc, idx) => (
                                            <div key={idx} className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                                                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-500 transition-colors">
                                                    <CheckCircle2 className="h-4 w-4 text-blue-400 group-hover:text-white" />
                                                </div>
                                                <span className="font-bold text-slate-300 group-hover:text-white transition-colors">{doc}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
