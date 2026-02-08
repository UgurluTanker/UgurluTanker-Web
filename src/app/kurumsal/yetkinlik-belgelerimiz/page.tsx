import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import * as LucideIcons from "lucide-react"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

export const dynamic = "force-dynamic";

const CERTIFICATES_QUERY = groq`
    *[_type == "certificate"] | order(order asc) {
        _id,
        title,
        "fileUrl": file.asset->url,
        "extension": file.asset->extension,
        "size": file.asset->size
    }
`

type Certificate = {
    _id: string
    title: string
    fileUrl: string
    extension: string
    size: number
}

function formatBytes(bytes: number, decimals = 2) {
    if (!+bytes) return '0 Bytes'
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

export default async function CertificatesPage() {
    const certificates = await client.fetch<Certificate[]>(CERTIFICATES_QUERY, {}, { next: { revalidate: 0 } })

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header Section */}
            <section className="bg-slate-900 pt-32 pb-24 relative">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--primary)_0%,transparent_50%)] opacity-20" />
                </div>
                <div className="container relative z-10 text-center animate-slide-up">
                    <Badge className="bg-primary/20 text-primary border-primary/30 mb-8 font-bold tracking-widest px-6 py-2">
                        KURUMSAL
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Yetkinlik Belgelerimiz</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        Kalite standartlarımızı ve yetkinliğimizi kanıtlayan belgelerimiz.
                    </p>
                </div>
            </section>

            {/* Certificates Grid */}
            <section className="py-24 bg-slate-50 min-h-[50vh]">
                <div className="container">
                    {certificates.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {certificates.map((cert) => (
                                <div key={cert._id} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-slate-100 group">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                            <LucideIcons.FileCheck className="w-6 h-6" />
                                        </div>
                                        <Badge variant="secondary" className="bg-slate-100 text-slate-500 font-bold">
                                            {cert.extension?.toUpperCase()}
                                        </Badge>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 font-medium mb-8">
                                        {formatBytes(cert.size)}
                                    </p>

                                    <Button asChild className="w-full rounded-xl h-12 font-bold text-base group-hover:bg-primary group-hover:text-white transition-all shadow-none group-hover:shadow-lg group-hover:shadow-primary/20">
                                        <a href={`${cert.fileUrl}?dl=`} target="_blank" rel="noopener noreferrer">
                                            <LucideIcons.Download className="w-4 h-4 mr-2" />
                                            Belgeyi İndir
                                        </a>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24">
                            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                                <LucideIcons.FileSearch className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Henüz Belge Eklenmemiş</h3>
                            <p className="text-slate-500">Şu anda görüntülenecek yetkinlik belgesi bulunmamaktadır.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
