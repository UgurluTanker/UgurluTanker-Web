import React from "react"
import { Badge } from "@/components/ui/badge"
import { Info } from "lucide-react"

const priceCategories = [
    {
        name: "ADR PERİYODİK MUAYENE",
        items: [
            { service: "LPG Tankeri Periyodik Muayene", price: "4.200 ₺ + KDV" },
            { service: "Akaryakıt Tankeri Periyodik Muayene", price: "3.800 ₺ + KDV" },
            { service: "Kimyasal Madde Tankeri Periyodik Muayene", price: "4.500 ₺ + KDV" },
        ]
    },
    {
        name: "ARA VE ORTA MUAYENELER",
        items: [
            { service: "Ara Muayene (Görsel ve Sızdırmazlık)", price: "2.500 ₺ + KDV" },
            { service: "Orta Muayene (Hidrolik Test Dahil)", price: "5.500 ₺ + KDV" },
        ]
    },
    {
        name: "DİĞER HİZMETLER",
        items: [
            { service: "Hacimsel Kalibrasyon (Göz Başı)", price: "1.200 ₺ + KDV" },
            { service: "T9 Uygunluk Belgesi Düzenleme", price: "1.800 ₺ + KDV" },
            { service: "Sızdırmazlık Test Raporu", price: "950 ₺ + KDV" },
        ]
    }
]

export default function PriceListPage() {
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
                        ŞEFFAF FİYATLANDIRMA
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Fiyat Listesi</h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
                        Hizmet tarifelerimiz TSE ve Ulaştırma Bakanlığı standartlarına göre belirlenmiş olup, en güncel haliyle bilginize sunulmuştur.
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
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 overflow-hidden border border-slate-100 animate-fade-in transition-all">
                            {/* Desktop/Tablet Table */}
                            <div className="hidden sm:block overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-slate-900 text-white">
                                            <th className="py-6 px-8 text-xs font-black uppercase tracking-widest">Hizmet Adı</th>
                                            <th className="py-6 px-8 text-xs font-black uppercase tracking-widest text-right">Birim Fiyat</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {priceCategories.map((category) => (
                                            <React.Fragment key={category.name}>
                                                <tr className="bg-slate-50/80">
                                                    <td colSpan={2} className="py-4 px-8 text-[10px] font-black text-primary tracking-widest uppercase mb-0">
                                                        {category.name}
                                                    </td>
                                                </tr>
                                                {category.items.map((item, idx) => (
                                                    <tr key={idx} className="group hover:bg-slate-50 transition-colors">
                                                        <td className="py-5 px-8 text-sm font-bold text-slate-700 tracking-tight">{item.service}</td>
                                                        <td className="py-5 px-8 text-sm font-black text-slate-900 text-right">{item.price}</td>
                                                    </tr>
                                                ))}
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile List View */}
                            <div className="sm:hidden divide-y divide-slate-100">
                                {priceCategories.map((category) => (
                                    <div key={category.name} className="p-0">
                                        <div className="bg-slate-900 text-white py-4 px-6 text-[10px] font-black tracking-widest uppercase">
                                            {category.name}
                                        </div>
                                        <div className="divide-y divide-slate-50">
                                            {category.items.map((item, idx) => (
                                                <div key={idx} className="p-6 space-y-2 group active:bg-slate-50 transition-colors">
                                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Hizmet</p>
                                                    <p className="text-base font-black text-slate-900 leading-tight">{item.service}</p>
                                                    <div className="flex justify-between items-center pt-2">
                                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Birim Fiyat</span>
                                                        <span className="text-lg font-black text-primary tracking-tight">{item.price}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Note Section */}
                        <div className="mt-12 bg-white/50 backdrop-blur rounded-2xl p-8 border border-white flex flex-col md:flex-row items-start gap-6 animate-slide-up">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                <Info className="h-6 w-6 text-primary" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-black text-slate-900">Önemli Notlar</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0 mt-0.5">1</div>
                                        <p className="text-sm text-slate-600 font-medium leading-relaxed">Fiyatlarımıza KDV dahil değildir. Güncel KDV oranı faturalandırma sırasında uygulanacaktır.</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0 mt-0.5">2</div>
                                        <p className="text-sm text-slate-600 font-medium leading-relaxed">Kurumsal ve çoklu araç indirimleri için lütfen müşteri temsilcimizle iletişime geçiniz.</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0 mt-0.5">3</div>
                                        <p className="text-sm text-slate-600 font-medium leading-relaxed">Saha muayenelerinde yol ve konaklama bedelleri fiyata ayrıca eklenebilir.</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0 mt-0.5">4</div>
                                        <p className="text-sm text-slate-600 font-medium leading-relaxed">Fiyat listesi yıllık olarak güncellenmekte olup Uğurlu Tanker fiyat değiştirme hakkını saklı tutar.</p>
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
