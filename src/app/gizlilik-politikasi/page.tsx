import { Badge } from "@/components/ui/badge"
import { Lock } from "lucide-react"

export default function PrivacyPage() {
    return (
        <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
            <div className="container max-w-4xl">
                <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 space-y-12">
                    <div className="text-center space-y-4">
                        <Badge className="bg-primary/10 text-primary border-none font-black px-6 py-2">GİZLİLİK</Badge>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Gizlilik ve Çerez Politikası</h1>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                                <Lock className="text-primary h-6 w-6" /> Gizlilik Taahhüdümüz
                            </h2>
                            <p>
                                Uğurlu Tanker olarak, ziyaretçilerimizin gizliliğine ve verilerinin korunmasına büyük önem veriyoruz. Bu politika, sitemizi ziyaret ettiğinizde hangi bilgilerin toplandığını ve bu bilgilerin nasıl kullanıldığını açıklamaktadır.
                            </p>
                        </section>

                        <section id="cerez" className="space-y-4">
                            <h2 className="text-2xl font-black text-slate-900">Çerezler (Cookies)</h2>
                            <p>
                                Web sitemiz, size daha iyi bir kullanıcı deneyimi sunmak amacıyla çerezler kullanmaktadır. Çerezler, tarayıcınız aracılığıyla cihazınıza yerleştirilen küçük metin dosyalarıdır. Çerez ayarlarınızı tarayıcınızın ayarlar kısmından değiştirebilirsiniz.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-slate-900">Veri Güvenliği</h2>
                            <p>
                                Paylaştığınız bilgiler, en güncel güvenlik standartları ile korunmakta ve sadece hizmet sunumu kapsamında yetkili personelimiz tarafından erişilmektedir.
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
