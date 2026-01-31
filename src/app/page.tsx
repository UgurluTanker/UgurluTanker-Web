import Image from "next/image"
import Link from "next/link"
import * as LucideIcons from "lucide-react"
import { ShieldCheck, ClipboardCheck, ArrowRight, CheckCircle2, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { client } from "@/sanity/lib/client"
import { HOMEPAGE_QUERY, SITE_SETTINGS_QUERY, SERVICES_QUERY } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"
import { SiteSettings, HomepageData, Service } from "@/types/sanity"

export const dynamic = "force-dynamic";

export default async function Home() {
  const [data, settings, services] = await Promise.all([
    client.fetch<HomepageData>(HOMEPAGE_QUERY),
    client.fetch<SiteSettings>(SITE_SETTINGS_QUERY),
    client.fetch<Service[]>(SERVICES_QUERY)
  ])

  const activeSlide = data?.heroSlides?.[0]
  const heroImage = activeSlide?.image ? urlFor(activeSlide.image).url() : (data?.heroImages?.[0] ? urlFor(data.heroImages[0]).url() : "/images/hero-tanker.png")
  const heroTitle = activeSlide?.title || data?.heroTitle || "Güvenle Taşıyın, Standartlara Uyun."
  const heroSubtitle = activeSlide?.subtitle || data?.heroSubtitle || "Kocaeli'nin öncü tanker muayene ve sertifikalandırma merkezi olarak, ADR standartlarında uzman kadromuzla yanınızdayız."

  const mainPhone = settings?.mobile || settings?.phone1 || "0262 335 04 15"
  const dialPhone = mainPhone.replace(/\s+/g, '')

  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-900 overflow-hidden group">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
          <Image
            src={heroImage}
            alt="Tanker Muayene Merkezi"
            fill
            className="object-cover opacity-60 transition-transform duration-10000 group-hover:scale-110"
            priority
          />
          <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none select-none z-20">
            <Image
              src="/images/logo-ugurlu.png"
              alt=""
              width={800}
              height={200}
              className="w-[600px] md:w-[800px] h-auto brightness-0 invert"
            />
          </div>
        </div>

        <div className="container relative z-20 pt-20">
          <div className="max-w-3xl space-y-8 animate-slide-up">
            <Badge variant="outline" className="text-primary border-primary/50 px-4 py-1.5 text-sm font-bold tracking-widest bg-primary/5 backdrop-blur-sm animate-fade-in">
              TSE YETKİLİ MUAYENE MERKEZİ
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight text-balance">
              {heroTitle.includes(',') ? (
                <>
                  {heroTitle.split(',')[0]},<br />
                  <span className="text-primary relative inline-block">
                    {heroTitle.split(',')[1]}
                    <span className="absolute bottom-2 left-0 w-full h-2 bg-primary/30 -z-10 animate-reveal" />
                  </span>
                </>
              ) : (
                heroTitle
              )}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl text-balance font-medium">
              {heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-black text-lg h-16 px-10 group shadow-2xl shadow-primary/40 rounded-2xl transition-all duration-300 hover:scale-105" asChild>
                <Link href="/iletisim">
                  HEMEN RANDEVU AL <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white h-16 px-10 font-bold backdrop-blur-md rounded-2xl transition-all duration-300 hover:scale-105" asChild>
                <Link href="/hizmetlerimiz">HİZMETLERİMİZ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30 px-4 py-1.5 text-xs font-bold tracking-widest uppercase">UZMANLIK ALANLARIMIZ</Badge>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Öne Çıkan Hizmetlerimiz</h2>
            <p className="text-slate-600 font-medium leading-relaxed italic">Sektör standartlarında, tam yetkili denetim ve sertifikalandırma çözümleri.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service, idx) => {
              const iconToUse = service.iconName || service.icon || "ShieldCheck"
              const IconComponent = (LucideIcons[iconToUse as keyof typeof LucideIcons] as LucideIcons.LucideIcon) || LucideIcons.ShieldCheck
              return (
                <Link key={idx} href="/hizmetlerimiz" className="group">
                  <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-white hover:-translate-y-2">
                    <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                        <IconComponent className="h-8 w-8 text-primary group-hover:text-white" />
                      </div>
                      <h3 className="text-xl font-black text-slate-900 leading-tight group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-sm text-slate-500 font-medium line-clamp-2">{service.shortDescription || "Detaylar için tıklayın."}</p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Info & Stats */}
      <section className="py-24 bg-white relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-30">
            <Card className="border-none shadow-2xl bg-white/95 backdrop-blur group hover:translate-y-[-10px] transition-all duration-500 rounded-2xl overflow-hidden border-b-8 border-primary">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                  <PhoneCall className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Hızlı Randevu</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">Telefonla veya online form üzerinden saniyeler içinde muayene randevunuzu oluşturun.</p>
                </div>
                <Button variant="link" className="p-0 h-auto text-primary font-black group-hover:translate-x-1 transition-transform" asChild>
                  <a href={`tel:${dialPhone}`} className="flex items-center">HEMEN ARA <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-2xl bg-white/95 backdrop-blur group hover:translate-y-[-10px] transition-all duration-500 rounded-2xl overflow-hidden border-b-8 border-slate-900">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-slate-900 transition-all duration-500">
                  <ClipboardCheck className="h-8 w-8 text-slate-600 group-hover:text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Fiyat Listesi</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">Tüm muayene ve belgelendirme hizmetlerimizin güncel tarifelerini şeffafça inceleyin.</p>
                </div>
                <Button variant="link" className="p-0 h-auto text-slate-900 font-black group-hover:translate-x-1 transition-transform" asChild>
                  <Link href="/fiyat-listesi" className="flex items-center">LİSTEYİ GÖR <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-2xl bg-white/95 backdrop-blur group hover:translate-y-[-10px] transition-all duration-500 rounded-2xl overflow-hidden border-b-8 border-primary">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                  <ShieldCheck className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Ücretsiz Danışmanlık</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">Muayene öncesi hazırlıklar ve teknik gereksinimler hakkında uzmanımızdan bilgi alın.</p>
                </div>
                <Button variant="link" className="p-0 h-auto text-primary font-black group-hover:translate-x-1 transition-transform" asChild>
                  <Link href="/iletisim" className="flex items-center">BİLGİ AL <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <section className="py-24">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge variant="outline" className="text-primary border-primary/30 px-4 py-1.5 text-xs font-bold tracking-widest">SÜREÇ NASIL İŞLER?</Badge>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">4 Adımda Güvenli Muayene</h2>
              <p className="text-slate-600 font-medium leading-relaxed">Randevudan belge teslimine kadar tüm süreci sizin için şeffaf ve hızlı yönetiyoruz.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-0" />
              {[
                { step: "01", title: "Randevu Planlama", desc: "Online veya telefonla size uygun zamanı belirleyin." },
                { step: "02", title: "Teknik Ön Kontrol", desc: "Aracınızın muayene öncesi eksiklerini gözden geçiriyoruz." },
                { step: "03", title: "Resmi Muayene", desc: "TSE yetkili ekipmanlarımızla detaylı denetimi yapıyoruz." },
                { step: "04", title: "Belge Teslimi", desc: "Onaylı raporunuzu dijital ve fiziksel olarak teslim ediyoruz." }
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 space-y-6 text-center group">
                  <div className="w-16 h-16 bg-white rounded-full border-4 border-slate-50 flex items-center justify-center mx-auto shadow-xl group-hover:bg-primary transition-all duration-500">
                    <span className="text-xl font-black text-primary group-hover:text-white">{item.step}</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed px-4">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-up">
              <Badge className="bg-primary/10 text-primary border-none font-bold px-4">NEDEN UĞURLU TANKER?</Badge>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Güvenlikte ve Kalitede <br /><span className="text-primary">Taviz Vermiyoruz</span></h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                20 yılı aşkın sektörel tecrübemiz ve TSE standartlarındaki yetkinliğimizle, tankerlerinizin teknik denetimlerini en ince ayrıntısına kadar gerçekleştiriyoruz.
              </p>
              <div className="space-y-4">
                {["TSE ve Ulaştırma Bakanlığı Onaylı Yetki", "ADR Mevzuatına Tam Uyumluluk", "Modern Test ve Ölçüm Ekipmanları", "Hızlı ve Güvenilir Belgelendirme Süreci"].map((item, id) => (
                  <div key={id} className="flex items-center space-x-3 group">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-bold h-14 px-8" asChild>
                <Link href="/kurumsal">KURUMSAL DETAYLAR</Link>
              </Button>
            </div>
            <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl group animate-fade-in">
              <Image
                src="/images/inspection-detail.png"
                alt="Muayene Süreci"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-full">
                  <p className="text-white font-bold text-lg italic">&quot;Standartlar, yoldaki her canın güvenliğidir.&quot;</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-32 py-16 bg-slate-900 rounded-[3rem] overflow-hidden relative">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[100px]" />
            </div>
            <div className="container relative z-10">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                {(data?.stats && data.stats.length > 0 ? data.stats : [
                  { label: "Yıllık Tecrübe", value: "25+" },
                  { label: "Düzenlenen Belge", value: "5000+" },
                  { label: "Yetkili Personel", value: "10+" },
                  { label: "Müşteri Memnuniyeti", value: "%100" }
                ]).map((stat: { label: string; value: string }, idx: number) => (
                  <div key={idx} className="space-y-2">
                    <p className="text-4xl md:text-6xl font-black text-primary tracking-tighter">{stat.value}</p>
                    <p className="text-sm md:text-base font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-y">
        <div className="container text-center space-y-12">
          <p className="text-sm text-slate-400 font-black uppercase tracking-widest">YETKİLİ VE İŞBİRLİĞİ YAPILAN KURUMLAR</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500">
            <Image src="/images/logo-tse.png" alt="TSE" width={120} height={60} className="h-16 w-auto object-contain transition-transform hover:scale-110" />
            <Image src="/images/logo-bakanlik.png" alt="T.C. Ulaştırma Bakanlığı" width={180} height={60} className="h-14 w-auto object-contain transition-transform hover:scale-110" />
            <Image src="/images/logo-tmt.png" alt="TMT" width={120} height={60} className="h-16 w-auto object-contain transition-transform hover:scale-110" />
            <Image src="/images/logo-ugurlu.png" alt="Uğurlu Tanker" width={160} height={60} className="h-12 w-auto object-contain transition-transform hover:scale-110" />
          </div>
        </div>
      </section>
    </div>
  )
}
