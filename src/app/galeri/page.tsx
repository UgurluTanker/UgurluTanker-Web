"use client"

import React, { useState, useEffect } from "react"
import { client } from "@/sanity/lib/client"
import { GALLERY_QUERY } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Maximize2, X } from "lucide-react"

interface GalleryItem {
    title: string
    category: string
    image: any
    description?: string
}

const categories = [
    { label: "Tümü", value: "all" },
    { label: "Muayene Süreci", value: "inspection" },
    { label: "Tesisimiz", value: "facility" },
    { label: "Tankerler", value: "tankers" },
    { label: "Ekibimiz", value: "team" },
]

export default function GalleryPage() {
    const [items, setItems] = useState<GalleryItem[]>([])
    const [filteredItems, setFilteredItems] = useState<GalleryItem[]>([])
    const [activeCategory, setActiveCategory] = useState("all")
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const data = await client.fetch(GALLERY_QUERY)
                setItems(data)
                setFilteredItems(data)
            } catch (error) {
                console.error("Gallery fetch error:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchGallery()
    }, [])

    useEffect(() => {
        if (activeCategory === "all") {
            setFilteredItems(items)
        } else {
            setFilteredItems(items.filter((item) => item.category === activeCategory))
        }
    }, [activeCategory, items])

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            {/* Hero Section */}
            <section className="bg-slate-900 pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[80px]" />
                </div>
                <div className="container relative z-10 text-center animate-slide-up">
                    <Badge className="bg-primary/20 text-primary border-primary/30 mb-8 font-bold tracking-widest px-6 py-2">
                        GÖRSEL ARŞİV
                    </Badge>
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight">Galeri</h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
                        Tesisimiz, muayene süreçlerimiz ve tanker teknik detaylarından kareler.
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-24">
                <div className="container">
                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat.value}
                                onClick={() => setActiveCategory(cat.value)}
                                className={`px-8 py-3 rounded-2xl font-black text-sm transition-all duration-300 ${activeCategory === cat.value
                                    ? "bg-primary text-white shadow-xl shadow-primary/30 scale-105"
                                    : "bg-white text-slate-600 hover:bg-slate-100"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-pulse">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="aspect-square bg-slate-200 rounded-[2rem]" />
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredItems.map((item, idx) => (
                                <Card
                                    key={idx}
                                    className="group relative border-none bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                                    onClick={() => setSelectedImage(item)}
                                >
                                    <CardContent className="p-0 aspect-square relative">
                                        <Image
                                            src={urlFor(item.image).url()}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-2">
                                                <Badge className="bg-primary border-none">{categories.find(c => c.value === item.category)?.label}</Badge>
                                                <h3 className="text-xl font-black text-white">{item.title}</h3>
                                                <p className="text-sm text-slate-300 font-medium line-clamp-2">{item.description}</p>
                                            </div>
                                            <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                                <Maximize2 className="h-6 w-6 text-white" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}

                    {!loading && filteredItems.length === 0 && (
                        <div className="text-center py-24">
                            <p className="text-slate-500 font-bold text-lg">Bu kategoride henüz görsel bulunmuyor.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage && (
                <div className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300">
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-8 right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-[110]"
                    >
                        <X className="h-6 w-6 text-white" />
                    </button>
                    <div className="relative w-full max-w-6xl aspect-video md:aspect-auto md:h-full max-h-[85vh] rounded-[3rem] overflow-hidden shadow-2xl">
                        <Image
                            src={urlFor(selectedImage.image).url()}
                            alt={selectedImage.title}
                            fill
                            className="object-contain"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-slate-950 to-transparent">
                            <div className="max-w-3xl space-y-4">
                                <Badge className="bg-primary text-lg px-6 py-1">{categories.find(c => c.value === selectedImage.category)?.label}</Badge>
                                <h2 className="text-3xl md:text-5xl font-black text-white">{selectedImage.title}</h2>
                                <p className="text-lg text-slate-400 font-medium leading-relaxed">{selectedImage.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
