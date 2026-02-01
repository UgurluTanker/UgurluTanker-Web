"use client"

import { useState, useEffect } from "react"
import { ShieldCheck, X } from "lucide-react"
import { Button } from "./ui/button"

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent")
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500)
            return () => clearTimeout(timer)
        }
    }, [])

    const accept = () => {
        localStorage.setItem("cookie-consent", "true")
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-6 left-6 right-6 z-[100] animate-slide-up">
            <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 shadow-2xl rounded-3xl p-6 md:p-8 backdrop-blur-xl bg-opacity-95 flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1 space-y-2 text-center md:text-left">
                    <h3 className="text-white font-black tracking-tight">KVKK & Çerez Bildirimi</h3>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">
                        Size daha iyi bir deneyim sunabilmek için web sitemizde çerezler kullanıyoruz. Sitemizi kullanarak çerez kullanımını ve <a href="/kvkk" className="text-primary hover:underline">KVKK Aydınlatma Metni</a>&apos;ni kabul etmiş sayılırsınız.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Button onClick={accept} className="bg-primary hover:bg-primary/90 text-white font-black px-8 h-12 rounded-xl whitespace-nowrap">
                        KABUL EDİYORUM
                    </Button>
                    <button onClick={() => setIsVisible(false)} className="text-slate-500 hover:text-white transition-colors">
                        <X className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </div>
    )
}
