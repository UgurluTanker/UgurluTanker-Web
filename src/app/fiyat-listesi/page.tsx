import React from "react"
import { Badge } from "@/components/ui/badge"
import { Info } from "lucide-react"
import { client } from "@/sanity/lib/client"
import { PRICE_LIST_QUERY, PRICE_LIST_PAGE_QUERY } from "@/sanity/lib/queries"
import { PriceItem } from "@/types/sanity"

export const dynamic = "force-dynamic";

export default async function PriceListPage() {
    const [prices, pageData] = await Promise.all([
        client.fetch<PriceItem[]>(PRICE_LIST_QUERY, {}, { next: { revalidate: 0 } }),
        client.fetch<any>(PRICE_LIST_PAGE_QUERY, {}, { next: { revalidate: 0 } })
    ])

    // Group prices by category
    const groupedPrices = prices.reduce((acc: Record<string, { service: string; onay: string; merkez: string; total: string }[]>, item: PriceItem) => {
        const category = item.category || "Genel"
        if (!acc[category]) {
            acc[category] = []
        }
        acc[category].push({
            service: item.serviceName,
            onay: item.approvalFee || item.onayKurulusuFee || "-",
            merkez: item.centerFee || item.muayeneMerkeziFee || "-",
            total: item.totalPrice || item.price || item.totalFee || "-"
        })
        return acc
    }, {})

    const priceCategories = Object.keys(groupedPrices).map(name => ({
        name,
        items: groupedPrices[name]
    }))
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            {/* Header section with curve */}
            <section className="bg-slate-900 pt-24 pb-32 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-white/20 -rotate-12" />
                    <div className="absolute top-1/2 left-0 w-full h-px bg-white/20 rotate-12" />
                </div>
                <div className="container relative z-10 text-center animate-slide-up">
                    <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 font-bold tracking-widest px-4">
                        {pageData?.badge || "2026 YILI MUAYENE ÜCRETLERİ"}
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                        {pageData?.headerTitle || "Fiyat Listesi"}
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
                        {pageData?.description || "01/01/2026 – 31/12/2026 tarihleri arasında uygulanacak araç ve tank muayene ücretleri, T.C. Ulaştırma ve Altyapı Bakanlığı genelgesine uygun olarak belirlenmiştir."}
                    </p>
                </div>
                {/* Visual curve decoration */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 fill-slate-50">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,10.68,1.65,10.16,1.44,45.45,15,81.1,30.34,119.34,42.44,179.39,61.47,243.61,69.52,321.39,56.44Z"></path>
                    </svg>
                </div>
            </section>

            {/* Table Section */}
            <section className="py-20 -mt-20 relative z-20">
                <div className="container px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 overflow-hidden border border-slate-100 animate-fade-in transition-all">
                            {/* Desktop/Tablet Table */}
                            <div className="hidden lg:block overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-slate-900 text-white">
                                            <th className="py-6 px-8 text-xs font-black uppercase tracking-widest">VERİLEN HİZMET</th>
                                            <th className="py-6 px-8 text-xs font-black uppercase tracking-widest text-center">ONAY KURULUŞU ÜCRETİ (TL)</th>
                                            <th className="py-6 px-8 text-xs font-black uppercase tracking-widest text-center">MUAYENE MERKEZİ ÜCRETİ (TL)</th>
                                            <th className="py-6 px-8 text-xs font-black uppercase tracking-widest text-right">TOPLAM ÜCRET (TL)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {priceCategories.map((category) => (
                                            <React.Fragment key={category.name}>
                                                <tr className="bg-slate-50/80">
                                                    <td colSpan={4} className="py-4 px-8 text-[11px] font-black text-primary tracking-widest uppercase">
                                                        {category.name}
                                                    </td>
                                                </tr>
                                                {category.items.map((item: { service: string; onay: string; merkez: string; total: string }, idx: number) => (
                                                    <tr key={idx} className="group hover:bg-slate-50 transition-colors">
                                                        <td className="py-5 px-8 text-sm font-bold text-slate-700 tracking-tight">{item.service}</td>
                                                        <td className="py-5 px-8 text-sm font-medium text-slate-600 text-center">{item.onay}</td>
                                                        <td className="py-5 px-8 text-sm font-medium text-slate-600 text-center">{item.merkez}</td>
                                                        <td className="py-5 px-8 text-sm font-black text-slate-900 text-right">{item.total}</td>
                                                    </tr>
                                                ))}
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile/Tablet List View */}
                            <div className="lg:hidden divide-y divide-slate-100">
                                {priceCategories.map((category) => (
                                    <div key={category.name} className="p-0">
                                        <div className="bg-slate-900 text-white py-4 px-6 text-[10px] font-black tracking-widest uppercase">
                                            {category.name}
                                        </div>
                                        <div className="divide-y divide-slate-50">
                                            {category.items.map((item: { service: string; onay: string; merkez: string; total: string }, idx: number) => (
                                                <div key={idx} className="p-6 space-y-4 group active:bg-slate-50 transition-colors">
                                                    <div>
                                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Hizmet</p>
                                                        <p className="text-base font-black text-slate-900 leading-tight">{item.service}</p>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-50">
                                                        <div>
                                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Onay Kuruluşu</p>
                                                            <p className="text-sm font-bold text-slate-700">{item.onay} TL</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Muayene Merkezi</p>
                                                            <p className="text-sm font-bold text-slate-700">{item.merkez} TL</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center pt-2 bg-slate-50/50 -mx-6 px-6 py-4">
                                                        <span className="text-xs font-black text-slate-500 uppercase tracking-widest">TOPLAM ÜCRET</span>
                                                        <span className="text-lg font-black text-primary tracking-tight">{item.total} TL</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Special Note */}
                        <div className="mt-8 p-6 bg-blue-50/50 border border-blue-100 rounded-2xl flex gap-4 items-start">
                            <span className="text-xl">info</span>
                            <p className="text-sm font-medium text-blue-800 leading-relaxed italic">
                                * İstisnai muayene ücretleri ara veya periyodik muayenenin hangisi yerine kabul ediliyorsa o kapsamda ücretlendirilir.
                            </p>
                        </div>

                        {/* Note Section */}
                        <div className="mt-12 bg-white/50 backdrop-blur rounded-2xl p-8 border border-white flex flex-col items-start gap-8 animate-slide-up">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                    <Info className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900">Açıklamalar ve Önemli Notlar</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0 mt-0.5">1</div>
                                        <p className="text-sm text-slate-600 font-medium leading-relaxed">Tabloda verilen test ve muayene ücretlerine <strong>KDV dâhil değildir.</strong></p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0 mt-0.5">2</div>
                                        <p className="text-sm text-slate-600 font-medium leading-relaxed">Belirlenen bu ücretler bu işler için alınacak üst limitler olup, muayene merkezleri bu ücretlerin altında hizmet verme imkânına sahiptir.</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0 mt-0.5">3</div>
                                        <p className="text-sm text-slate-600 font-medium leading-relaxed">Muayene ve test işlemleri yapılırken araçta veya üst yapıda tamirat veya tadilat veya yedek parçaya ihtiyaç duyulursa, bu ücretler muayene merkezi tarafından ayrıca tahsil edilir.</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0 mt-0.5">4</div>
                                        <p className="text-sm text-slate-600 font-medium leading-relaxed">Tank temizleme ve gazdan arındırma ücretleri tablodaki ücretlere dâhil değildir.</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0 mt-0.5">5</div>
                                        <p className="text-sm text-slate-600 font-medium leading-relaxed">Tankların ara ve periyodik muayene süreleri 1 gün olarak belirlenmiş olup, Onay Kuruluşu ücretleri bu süreler içinde tamamlanan muayene faaliyetleri için geçerlidir. Bu süreleri geçen incelemelerde Onay Kuruluşu tarafından, tank başına günlük olarak 3.188 TL+KDV adam/tank ücret alınır.</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0 mt-0.5">6</div>
                                        <p className="text-sm text-slate-600 font-medium leading-relaxed">Kimyasal ve akaryakıt tankerlerinde tank bölme sayısının 5’in üzerinde olması durumunda Muayene Merkezi ara ve periyodik muayene için 1.272 TL+KDV ilave göz ücreti tahsil eder.</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0 mt-0.5">7</div>
                                        <p className="text-sm text-slate-600 font-medium leading-relaxed">Belirlenen bu ücretler, muayene merkezinde müşterinin göreceği yerlere asılmak ve muayene merkezinin oluşturacağı web sitesinde yayımlanmak zorundadır.</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0 mt-0.5">8</div>
                                        <p className="text-sm text-slate-600 font-medium leading-relaxed">Sarnıç vagon tanklarının test ve muayene ücretlendirmelerinde tabloda yer alan ücretler geçerlidir. Bu tanklar için de 5 ve 6 ıncı madde hükümleri uygulanır.</p>
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
