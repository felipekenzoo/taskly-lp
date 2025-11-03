"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "../link"
import { Menu, X } from "lucide-react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return(
        <header className="mt-4 py-3 px-4 bg-zinc-50 rounded-2xl shadow-lg relative z-50">
            <nav className="flex justify-between items-center">
                <Image src="/logo-taskly.svg"
                    alt="Taskly Logo"
                    width={107}
                    height={32}
                />
                <div className={`md:static absolute bg-zinc-50 md:min-h-fit min-h-[40vh] left-0 right-0 top-full mt-3 md:w-auto w-full flex items-center px-5 md:rounded-none rounded-b-2xl md:shadow-none shadow-lg transition-opacity duration-300 ease-in-out ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} md:opacity-100 md:pointer-events-auto`}>
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-8 gap-6 w-full md:w-auto py-6 md:py-0">
                        <Link className="text-zinc-900 hover:text-blueviolet-700 transition-colors" href="#">Home</Link>
                        <Link className="text-zinc-900 hover:text-blueviolet-700 transition-colors" href="#">Sobre</Link>
                        <Link className="text-zinc-900 hover:text-blueviolet-700 transition-colors" href="#">Diferenciais</Link>
                        <Link className="text-zinc-900 hover:text-blueviolet-700 transition-colors" href="#">Depoimentos</Link>
                        <Link className="text-zinc-900 hover:text-blueviolet-700 transition-colors" href="#">Planos</Link>
                        <Link className="bg-blueviolet-600 px-12 py-3 rounded-2xl text-zinc-50 md:hidden text-center" href="#">Teste grátis</Link>
                    </ul>
                </div>

                <div className="flex items-center gap-6">
                    <Link className="bg-blueviolet-600 px-12 py-3 rounded-2xl text-zinc-50 hidden md:block hover:bg-blueviolet-700 transition-colors" href="#">Teste grátis</Link>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-zinc-900 cursor-pointer">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>
        </header>
    )
}