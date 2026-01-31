import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Target, Users, Factory, Quote } from "lucide-react"
import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries"
import { PortableText } from "@portabletext/react"

export default async function CorporatePage() {
    const settings = await client.fetch(SITE_SETTINGS_QUERY)

    return (
        <div className="flex flex-col min-h-screen bg-white overflow-hidden">
            {/* Header Section */}
            <section className="bg-slate-900 pt-32 pb-48 relative">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--primary)_0%,transparent_50%)] opacity-20" />
                </div>
                <div className="container relative z-10 text-center animate-slide-up">
                    <Badge className="bg-primary/20 text-primary border-primary/30 mb-8 font-bold tracking-widest px-6 py-2">
                        KURUMSAL KİMLİĞİMİZ
                    </Badge>
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-6">Hakkımızda</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        {settings?.companyName || "Uğurlu Tanker"}, tehlikeli madde taşımacılığı sektöründe güvenliğin ve uluslararası standartların Kocaeli&apos;deki sarsılmaz kalesidir.
                    </p>
                </div>
            </section>

            {/* Main Content Overlay */}
            <section id="hakkimizda" className="relative z-20 -mt-24 pb-24">
                <div className="container">
                    <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 border border-slate-100">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8 animate-fade-in">
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                                    1977&apos;den Bugüne <br />
                                    <span className="text-primary italic">Sektörün Öncüsü</span>
                                </h2>
                                <div className="space-y-6 prose prose-slate max-w-none">
                                    {settings?.aboutUs ? (
                                        <div className="text-slate-600 leading-relaxed text-lg font-medium space-y-4">
                                            <PortableText value={settings.aboutUs} />
                                        </div>
                                    ) : (
                                        <p className="text-slate-600 leading-relaxed text-lg font-medium">
                                            Kurulduğu 1977 yılından bugüne kadar tanker üretimini aralıksız sürdüren şirketimiz, kalitesinden taviz vermeden hizmet vermeye devam etmektedir.
                                        </p>
                                    )}

                                    <div className="bg-slate-50 p-8 rounded-3xl border-l-8 border-primary relative group hover:bg-slate-100 transition-colors">
                                        <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                                        <div className="space-y-4 relative z-10">
                                            <p className="text-slate-700 font-bold italic leading-relaxed">
                                                &quot;Güvenilirlik, işi zamanında teslim etme prensibi ve kaliteden taviz vermeden tanker üretimini sürdürüyoruz.&quot;
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl group animate-fade-in shadow-primary/10">
                                <Image
                                    src="/images/corporate-facility.png"
                                    alt="Uğurlu Tanker Kurumsal"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>

                        {/* Mission & Vision Section */}
                        <div id="misyon-vizyon" className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                                <Target className="w-64 h-64" />
                            </div>
                            <div className="space-y-6 relative z-10">
                                <Badge className="bg-primary hover:bg-primary text-white border-none px-4 py-1">VİZYONUMUZ</Badge>
                                <h3 className="text-3xl font-black tracking-tight">Geleceği Güven<br /><span className="text-primary">Üzerine İnşa Ediyoruz</span></h3>
                                <p className="text-slate-300 leading-relaxed font-medium">
                                    {settings?.vision || "Türkiye genelinde tanker muayene ve ADR belgelendirme süreçlerinde dijital dönüşümü öncüleyerek, sektörde standartları belirleyen çözüm ortağı olmayı hedefliyoruz."}
                                </p>
                            </div>
                            <div className="space-y-6 relative z-10 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
                                <Badge className="bg-slate-700 hover:bg-slate-700 text-white border-none px-4 py-1">MİSYONUMUZ</Badge>
                                <h3 className="text-3xl font-black tracking-tight">Her Detayda<br /><span className="text-primary">Emniyet Odağı</span></h3>
                                <p className="text-slate-300 leading-relaxed font-medium">
                                    {settings?.mission || "Bağımsızlık, tarafsızlık ve dürüstlük ilkelerinden ödün vermeden; uzman kadromuz ve modern altyapımızla karayolu taşıma güvenliğini en üst seviyeye çıkarmak için çalışıyoruz."}
                                </p>
                            </div>
                        </div>

                        {/* Core Values Grid */}
                        <div className="mt-24">
                            <div className="text-center mb-16 space-y-4">
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900">Temel Değerlerimiz</h2>
                                <div className="w-24 h-2 bg-primary mx-auto rounded-full" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    { icon: ShieldCheck, title: "Bağımsızlık", desc: "Hiçbir imalatçı veya operatöre bağlı kalmadan, tamamen tarafsız ölçüm." },
                                    { icon: Target, title: "Keskin Güven", desc: "TSE ve Bakanlık onaylı yetki belgelerimizle %100 yasal güvence." },
                                    { icon: Users, title: "Uzman Kadro", desc: "ADR mevzuatında derinleşmiş profesyonel mühendis ve tekniker kadrosu." },
                                    { icon: Factory, title: "Modern Altyapı", desc: "İzmit Sanayi Sitesi'nde en son teknoloji test ve ölçüm ekipmanları." }
                                ].map((value, idx) => (
                                    <div key={idx} className="p-10 bg-slate-50 rounded-[2rem] space-y-4 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 group transition-all duration-300 animate-fade-in border border-transparent hover:border-slate-100" style={{ animationDelay: `${idx * 100}ms` }}>
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform group-hover:bg-primary">
                                            <value.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <h4 className="font-black text-xl text-slate-900">{value.title}</h4>
                                        <p className="text-sm text-slate-500 font-medium leading-relaxed">{value.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
