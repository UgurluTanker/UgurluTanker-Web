"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { SiteSettings } from "@/types/sanity"

const navLinks = [
    { name: "Anasayfa", href: "/" },
    {
        name: "Kurumsal",
        href: "/kurumsal",
        subItems: [
            { name: "Hakkımızda", href: "/kurumsal#hakkimizda" },
            { name: "Misyon & Vizyon", href: "/kurumsal#misyon-vizyon" },
            { name: "Yetkinlik Belgelerimiz", href: "/kurumsal/yetkinlik-belgelerimiz" },
        ]
    },
    { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    { name: "Muayene & Servis", href: "/muayene-servis" },
    { name: "Galeri", href: "/galeri" },
    { name: "Fiyat Listesi", href: "/fiyat-listesi" },
    { name: "İletişim", href: "/iletisim" },
]

export function Navbar({ settings }: { settings?: SiteSettings }) {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    const phone1 = settings?.phone1 || "0262 335 04 15"
    const mobile = settings?.mobile || "+90 538 774 57 41"
    const dial1 = phone1.replace(/\s+/g, '')
    const dialMob = mobile.replace(/\s+/g, '')

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300 border-b",
                isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm h-20" : "bg-white h-28"
            )}
        >
            <div className="container flex h-full items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-105 active:scale-95 shrink-0">
                    <Image
                        src="/images/logo-ugurlu.png"
                        alt="Uğurlu Tanker Logo"
                        width={240}
                        height={60}
                        className={cn("transition-all duration-300 object-contain", isScrolled ? "h-12" : "h-16 md:h-20")}
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navLinks.map((link) => (
                                <NavigationMenuItem key={link.name}>
                                    {link.subItems ? (
                                        <>
                                            <NavigationMenuTrigger className="bg-transparent hover:bg-slate-50 font-bold text-sm">
                                                {link.name}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-[200px] gap-3 p-4 bg-white rounded-xl shadow-xl border">
                                                    {link.subItems.map((sub) => (
                                                        <li key={sub.name}>
                                                            <NavigationMenuLink asChild>
                                                                <Link
                                                                    href={sub.href}
                                                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-primary font-bold text-sm"
                                                                >
                                                                    {sub.name}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <Link href={link.href} legacyBehavior passHref>
                                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-slate-50 font-bold text-sm")}>
                                                {link.name}
                                            </NavigationMenuLink>
                                        </Link>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>

                {/* Mobile Navigation */}
                <div className="md:hidden flex items-center space-x-2">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-12 w-12 hover:bg-slate-100 rounded-full">
                                <Menu className="h-7 w-7" />
                                <span className="sr-only">Menüyü aç</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] border-l-8 border-primary rounded-l-3xl p-0">
                            <div className="flex flex-col h-full bg-white">
                                <div className="p-8 pb-4 border-b">
                                    <Image
                                        src="/images/logo-ugurlu.png"
                                        alt="Uğurlu Tanker Logo"
                                        width={140}
                                        height={35}
                                        className="h-10 w-auto object-contain mb-4"
                                    />
                                    <p className="text-xs text-slate-500 font-bold tracking-tight">MUAYENE & SERTİFİKALANDIRMA</p>
                                </div>
                                <div className="flex-1 px-4 py-6 overflow-y-auto">
                                    <nav className="flex flex-col space-y-1">
                                        {navLinks.map((link) => (
                                            <div key={link.name}>
                                                {link.subItems ? (
                                                    <div className="space-y-1">
                                                        <div className="px-4 py-3 text-lg font-black text-slate-400 uppercase tracking-widest text-[10px] mt-4 mb-2">
                                                            {link.name}
                                                        </div>
                                                        {link.subItems.map((sub) => (
                                                            <Link
                                                                key={sub.name}
                                                                href={sub.href}
                                                                onClick={() => setIsOpen(false)}
                                                                className="flex items-center px-6 py-3 text-lg font-bold rounded-xl hover:bg-slate-50 hover:text-primary transition-all active:scale-95"
                                                            >
                                                                {sub.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <Link
                                                        href={link.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className="flex items-center px-4 py-4 text-lg font-bold rounded-xl hover:bg-slate-50 hover:text-primary transition-all active:scale-95"
                                                    >
                                                        {link.name}
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                    </nav>
                                </div>
                                <div className="p-8 bg-slate-50 mt-auto">
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">Hızlı İletişim</p>
                                    <div className="space-y-2 mb-4">
                                        <a href={`tel:${dial1}`} className="flex items-center text-slate-900 font-black text-lg transition-transform active:scale-95 leading-none">{phone1}</a>
                                        <a href={`tel:${dialMob}`} className="flex items-center text-primary font-black text-xl transition-transform active:scale-95 leading-none">{mobile}</a>
                                    </div>
                                    <p className="text-xs text-slate-600 leading-relaxed font-bold">{settings?.address || "Sanayi Mh. İzmit San. Sit. 13. Cadde No: 116 İZMİT"}</p>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
