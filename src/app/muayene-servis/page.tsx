import React from "react"
import { ShieldCheck, Wrench, CheckCircle2, FileText, ArrowRight, Gauge } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { REGULATION_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries"
import { Regulation, SiteSettings } from "@/types/sanity"

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

export default async function MuayeneServisPage() {
    const [regulations, settings] = await Promise.all([
        client.fetch<Regulation[]>(REGULATION_QUERY),
        client.fetch<SiteSettings>(SITE_SETTINGS_QUERY)
    ])

    const mainPhone = settings?.mobile || settings?.phone1 || "0262 335 04 15"
    const dialPhone = mainPhone.replace(/\s+/g, '')

    // Filter regulations by category
    const schedule = regulations.find((r: Regulation) => r.category === 'adr_schedule')?.content || []
    const docsGeneral = regulations.find((r: Regulation) => r.category === 'documents_general')?.content || []
    const docsOldTanks = regulations.find((r: Regulation) => r.category === 'documents_old_tanks')?.content || []
    const docsT9 = regulations.find((r: Regulation) => r.category === 'documents_t9')?.content || []
    const docsTransport = regulations.find((r: Regulation) => r.category === 'documents_transport')?.content || []
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
                                {schedule.map((item: { itemTitle: string; itemDescription?: string }, idx: number) => (
                                    <div key={idx} className="flex gap-4 group p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-100">
                                        <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                                            <span className="text-white font-black text-sm">{idx + 1}</span>
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-black text-slate-900">{item.itemTitle}</h4>
                                            <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.itemDescription}</p>
                                        </div>
                                    </div>
                                ))}
                                {schedule.length === 0 && (
                                    <div className="p-8 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 text-center">
                                        <p className="text-slate-400 font-bold">Lütfen Sanity panelinden muayene takvimini doldurun.</p>
                                    </div>
                                )}
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

                    {/* Operations Section */}
                    <div className="mt-32">
                        <div className="text-center mb-16 space-y-4">
                            <Badge className="bg-primary/10 text-primary border-none font-extrabold px-6 py-2 tracking-wider">HİZMET KAPSAMI</Badge>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Muayene Merkezinde <br />Yapılan İşlemler</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="border-none shadow-xl rounded-[2.5rem] bg-white p-8 space-y-6 hover:translate-y-[-10px] transition-all duration-500">
                                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg">1</div>
                                <h3 className="text-xl font-black text-slate-900 leading-tight">ADR Uygunluk / Taşıt Uygunluk İncelemeleri</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed italic">
                                    Araçların ADR standartlarına uygunluk denetimleri ve belgelendirme süreçleri.
                                </p>
                            </Card>

                            <Card className="border-none shadow-xl rounded-[2.5rem] bg-white p-8 space-y-6 hover:translate-y-[-10px] transition-all duration-500">
                                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg">2</div>
                                <h3 className="text-xl font-black text-slate-900 leading-tight">Basınçsız Tankların Muayeneleri</h3>
                                <div className="space-y-2">
                                    <Badge variant="outline" className="w-full justify-start py-2 border-slate-100 font-bold text-slate-600 px-4">2a - Akaryakıt Tankerleri</Badge>
                                    <Badge variant="outline" className="w-full justify-start py-2 border-slate-100 font-bold text-slate-600 px-4">2b - Kimyasal Tanklar</Badge>
                                </div>
                            </Card>

                            <Card className="border-none shadow-xl rounded-[2.5rem] bg-white p-8 space-y-6 hover:translate-y-[-10px] transition-all duration-500">
                                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg">3</div>
                                <h3 className="text-xl font-black text-slate-900 leading-tight">Basınçlı Tankların Muayeneleri</h3>
                                <Badge variant="outline" className="w-full justify-start py-2 border-slate-100 font-bold text-slate-600 px-4">3a - Kimyasal Tanklar</Badge>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed italic">
                                    Basınçlı kapların periyodik teknik kontrolleri.
                                </p>
                            </Card>
                        </div>

                        <div className="mt-12 p-8 bg-primary/5 rounded-[2.5rem] border border-primary/10">
                            <p className="text-slate-800 font-bold leading-relaxed text-center">
                                2a, 2b ve 3a Tankları ADR koşullarına uygun olarak üretilmiş araçların Periyodik Muayenesi, İstisnai Muayenesi ve Ara muayenesi tarafımızca konusunda uzman personelimiz tarafında <span className="text-primary font-black">TSE TMT Uzmanları eşliğinde</span> yapılmaktadır.
                            </p>
                        </div>
                    </div>

                    {/* Required Documents Section */}
                    <div className="mt-32">
                        <div className="text-center mb-16 space-y-4">
                            <Badge className="bg-slate-900 text-white border-none font-extrabold px-6 py-2 tracking-wider">EVRAK LİSTESİ</Badge>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Muayene İçin Gerekli <br /><span className="text-primary">Belgeler ve Evraklar</span></h2>
                        </div>

                        <div className="max-w-5xl mx-auto space-y-12">
                            {/* General Doc List */}
                            <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 border border-slate-100 relative overflow-hidden">
                                <FileText className="absolute top-0 right-0 w-32 h-32 text-slate-50 -scale-x-100 rotate-12" />
                                <div className="relative z-10 space-y-8">
                                    <h3 className="text-2xl font-black text-slate-900 border-l-4 border-primary pl-4">Genel Muayene Belgeleri</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {docsGeneral.map((doc: { itemTitle: string }, idx: number) => (
                                            <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl hover:bg-primary/5 transition-colors group">
                                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                                <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900">{doc.itemTitle}</span>
                                            </div>
                                        ))}
                                        {docsGeneral.length === 0 && (
                                            <div className="col-span-2 p-4 text-slate-400 text-center font-bold italic">
                                                Henüz genel belge listesi eklenmemiş.
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-xs text-slate-400 font-medium italic border-t pt-6">
                                        * Tehlikeli madde taşıyan eski araç ve üst yapıların muayene ve belgelendirilmeleri hakkında yönerge ışığında 2a,2b ve 3a Tankların Periyodik Muayenesi, İstisnai Muayenesi ve Ara muayenesi tarafımızca konusunda uzman personelimiz taradında TSE TMT Uzmanları eşliğinde yapılmaktadır.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Eski Tanklar */}
                                <div className="space-y-6">
                                    <h4 className="text-xl font-black text-slate-900 flex items-center gap-3">
                                        <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center"><Wrench className="h-4 w-4 text-slate-600" /></div>
                                        Eski Tanklar
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="bg-slate-900 rounded-[2rem] p-6 text-white space-y-4">
                                            <p className="text-xs font-black uppercase tracking-widest text-primary">İlk Muayene</p>
                                            <ul className="space-y-2 text-sm font-medium text-slate-400">
                                                {docsOldTanks.map((doc: { itemTitle: string }, i: number) => (
                                                    <li key={i}>• {doc.itemTitle}</li>
                                                ))}
                                                {docsOldTanks.length === 0 && <li>Lütfen Sanity&apos;den ekleyin</li>}
                                            </ul>
                                        </div>
                                        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl p-6 space-y-4">
                                            <p className="text-xs font-black uppercase tracking-widest text-primary">Periyodik Muayene</p>
                                            <ul className="space-y-2 text-sm font-medium text-slate-600">
                                                <li>• RUHSAT</li>
                                                <li>• FENNİ MUAYENE RAPORU</li>
                                                <li>• TEHLİKELİ MADDE SİGORTASI (KAŞE-İMZALI)</li>
                                                <li>• ESKİ TAŞIT UYGUNLUK SERTİFİKASI</li>
                                                <li>• TANK MUAYENE SERTİFİKASI</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* ADR T9 */}
                                <div className="space-y-6">
                                    <h4 className="text-xl font-black text-slate-900 flex items-center gap-3">
                                        <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center"><ShieldCheck className="h-4 w-4 text-primary" /></div>
                                        ADR Uygunluk (T9)
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="bg-slate-900 rounded-[2rem] p-6 text-white space-y-4">
                                            <p className="text-xs font-black uppercase tracking-widest text-primary">İlk Muayene</p>
                                            <ul className="space-y-2 text-sm font-medium text-slate-400">
                                                {docsT9.map((doc: { itemTitle: string }, i: number) => (
                                                    <li key={i}>• {doc.itemTitle}</li>
                                                ))}
                                                {docsT9.length === 0 && <li>Lütfen Sanity&apos;den ekleyin</li>}
                                            </ul>
                                        </div>
                                        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl p-6 space-y-4">
                                            <p className="text-xs font-black uppercase tracking-widest text-primary">Periyodik Muayene</p>
                                            <ul className="space-y-2 text-sm font-medium text-slate-600">
                                                <li>• RUHSAT / FENNİ MUAYENE RAPORU</li>
                                                <li>• TEHLİKELİ MADDE SİGORTASI</li>
                                                <li>• ESKİ ADR UYGUNLUK SERTİFİKASI</li>
                                                <li>• TANK MUAYENE SERTİFİKASI</li>
                                                <li>• KULLANICI BEYANI (ISLAK İMZALI)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Taşıt Uygunluk */}
                                <div className="space-y-6 md:col-span-2">
                                    <h4 className="text-xl font-black text-slate-900 flex items-center gap-3">
                                        <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center"><CheckCircle2 className="h-4 w-4 text-green-500" /></div>
                                        Taşıt Uygunluk
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="bg-slate-900 rounded-[2rem] p-6 text-white space-y-4">
                                            <p className="text-xs font-black uppercase tracking-widest text-primary">İlk Muayene</p>
                                            <ul className="space-y-2 text-sm font-medium text-slate-400">
                                                {docsTransport.map((doc: { itemTitle: string }, i: number) => (
                                                    <li key={i}>• {doc.itemTitle}</li>
                                                ))}
                                                {docsTransport.length === 0 && <li>Lütfen Sanity&apos;den ekleyin</li>}
                                            </ul>
                                        </div>
                                        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl p-6 space-y-4">
                                            <p className="text-xs font-black uppercase tracking-widest text-primary">Periyodik Muayene</p>
                                            <ul className="space-y-2 text-sm font-medium text-slate-600">
                                                <li>• RUHSAT</li>
                                                <li>• FENNİ MUAYENE RAPORU</li>
                                                <li>• TEHLİKELİ MADDE SİGORTASI (KAŞE-İMZALI)</li>
                                                <li>• ESKİ TAŞIT UYGUNLUK SERTİFİKASI</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-primary text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <ShieldCheck className="absolute -left-20 -top-20 w-96 h-96 rotate-12" />
                    <Gauge className="absolute -right-20 -bottom-20 w-96 h-96 -rotate-12" />
                </div>
                <div className="container relative z-10 text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight">Muayene ve Belgelendirme İçin Hazırız</h2>
                    <p className="text-xl opacity-90 font-medium max-w-2xl mx-auto">Uzman kadromuzla tüm teknik süreçlerde yanınızdayız. Hemen iletişime geçin.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-black h-14 px-10 shadow-xl" asChild>
                            <Link href="/iletisim">BİZE ULAŞIN</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="bg-transparent border-white/50 text-white hover:bg-white/10 font-bold h-14 px-10" asChild>
                            <a href={`tel:${dialPhone}`}>HEMEN ARA</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
