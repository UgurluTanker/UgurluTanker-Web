import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Truck, ShieldCheck, ClipboardCheck, Droplets, Gauge, AlertTriangle, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const services = [
    {
        title: "ADR Periyodik Muayene",
        description: "Tehlikeli maddelerin karayoluyla taşınmasına yönelik araçların ve tankların periyodik teknik kontrolleri.",
        icon: Truck,
        color: "bg-primary",
        details: ["Tank Gövde Kontrolü", "Ekipman Denetimi", "Sızdırmazlık Testi"]
    },
    {
        title: "T9 Belgesi (ADR Uygunluk)",
        description: "Tehlikeli madde taşıyan araçların teknik muayenesi ve uygunluk belgelendirme süreci.",
        icon: ShieldCheck,
        color: "bg-slate-900",
        details: ["Araç Teknik Onayı", "Belge Yenileme", "TSE Onaylı Süreç"]
    },
    {
        title: "Hacimsel Kalibrasyon",
        description: "Tankerlerin taşıma kapasitelerinin hassas ölçümü ve kalibrasyon cetvellerinin hazırlanması.",
        icon: Gauge,
        color: "bg-primary",
        details: ["Hassas Ölçüm", "Cetvel Hazırlama", "Litre Doğrulaması"]
    },
    {
        title: "Sızdırmazlık Testi",
        description: "Basınçlı ve basınçsız tankların sızdırmazlık kabiliyetlerinin teknik yöntemlerle test edilmesi.",
        icon: Droplets,
        color: "bg-slate-900",
        details: ["Basınçlı Test", "Vakum Testi", "Sertifikalandırma"]
    },
    {
        title: "Orta ve Ara Muayeneler",
        description: "Tankların kullanım ömürleri boyunca belirli aralıklarla yapılması zorunlu olan teknik kontroller.",
        icon: ClipboardCheck,
        color: "bg-primary",
        details: ["2.5 Yıl Kontrolü", "5 Yıl Kontrolü", "Görsel Teknik Denetim"]
    },
    {
        title: "Hasar Sonrası Muayene",
        description: "Kaza veya onarım sonrası tankların tekrar hizmete girmesi için gereken teknik onay kontrolleri.",
        icon: AlertTriangle,
        color: "bg-slate-900",
        details: ["Yapısal Kontrol", "Onaylı Onarım Denetimi", "Güvenlik Sertifikası"]
    }
]

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="bg-slate-900 py-32 relative overflow-hidden group">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/services-hero.png"
                        alt="Hizmetlerimiz"
                        fill
                        className="object-cover opacity-40 transition-transform duration-10000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                </div>
                <div className="container relative z-10">
                    <div className="max-w-3xl animate-slide-up">
                        <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 font-bold tracking-widest px-4">
                            PROFESYONEL DENETİM
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Hizmetlerimiz</h1>
                        <p className="text-xl text-slate-300 leading-relaxed font-medium">
                            Uğurlu Tanker olarak, TSE ve Ulaştırma Bakanlığı yetkisiyle geniş bir yelpazede muayene ve sertifikalandırma hizmeti sunuyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="group border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-slate-50 hover:bg-white animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                                <div className={`h-2 w-full ${service.color}`} />
                                <CardHeader className="p-8">
                                    <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform shadow-lg shadow-black/5`}>
                                        <service.icon className="h-7 w-7 text-white" />
                                    </div>
                                    <CardTitle className="text-2xl font-black text-slate-900 tracking-tight mb-2 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </CardTitle>
                                    <CardDescription className="text-slate-600 font-medium leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="px-8 pb-8 pt-0">
                                    <div className="space-y-4 mb-8">
                                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Neler Yapıyoruz?</p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.details.map((detail, idx) => (
                                                <Badge key={idx} variant="outline" className="text-[10px] font-bold py-1 border-slate-200">
                                                    {detail}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <Button className="w-full bg-slate-100 hover:bg-primary hover:text-white text-slate-900 font-bold group/btn transition-all rounded-xl h-12" asChild>
                                        <Link href="/iletisim">
                                            DETAYLI BİLGİ AL <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-primary text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <Truck className="absolute -left-20 -top-20 w-96 h-96 rotate-12" />
                    <Gauge className="absolute -right-20 -bottom-20 w-96 h-96 -rotate-12" />
                </div>
                <div className="container relative z-10 text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight">İhtiyacınız Olan Muayene İçin Hazırız</h2>
                    <p className="text-xl opacity-90 font-medium max-w-2xl mx-auto">Uzman ekibimizle görüşerek aracınız için en uygun muayene sürecini planlayalım.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-black h-14 px-10 shadow-xl" asChild>
                            <Link href="/iletisim">BİZE ULAŞIN</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 font-bold h-14 px-10" asChild>
                            <Link href="tel:02623350415">HEMEN ARA</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
