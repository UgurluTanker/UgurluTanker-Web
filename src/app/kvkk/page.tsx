import { Badge } from "@/components/ui/badge"
import { ShieldCheck } from "lucide-react"

export default function KVKKPage() {
    return (
        <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
            <div className="container max-w-4xl">
                <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 space-y-12">
                    <div className="text-center space-y-4">
                        <Badge className="bg-primary/10 text-primary border-none font-black px-6 py-2">HUKUKİ BİLGİLENDİRME</Badge>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">KVKK Aydınlatma Metni</h1>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                                <ShieldCheck className="text-primary h-6 w-6" /> 1. Veri Sorumlusu
                            </h2>
                            <p>
                                6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, UĞURLU TANKER SINAİ GAZLAR İNŞ.TUR.TİC.SAN.LTD.ŞTİ (“Şirket”) olarak, veri sorumlusu sıfatıyla, kişisel verilerinizi aşağıda açıklanan amaçlar kapsamında; hukuka ve dürüstlük kurallarına uygun bir şekilde işleyebilecek, kaydedebilecek, saklayabilecek, sınıflandırabilecek ve güncelleyebileceğiz.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-slate-900">2. Kişisel Verilerin İşlenme Amacı</h2>
                            <p>
                                Toplanan kişisel verileriniz, Şirketimiz tarafından sunulan ürün ve hizmetlerden sizleri faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması, ürün ve hizmetlerimizin sizlerin beğeni ve ihtiyaçlarına göre özelleştirilerek sizlere önerilmesi, Şirketimizin sunduğu hizmet kalitesinin artırılması amaçlarıyla işlenmektedir.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-slate-900">3. Kişisel Verilerin Aktarılması</h2>
                            <p>
                                Kişisel verileriniz, Kanun ve sair mevzuat hükümlerinin zorunlu kıldığı haller dışında, izniniz olmaksızın üçüncü şahıslara aktarılmamaktadır.
                            </p>
                        </section>

                        <section className="space-y-4 border-t pt-8">
                            <p className="text-sm italic">
                                * Bu metin bir taslaktır. Şirketinizin özel yasal gereksinimleri için hukuk danışmanınıza başvurmanızı öneririz.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
