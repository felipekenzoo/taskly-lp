import Image from "next/image"
import Link from "./link"

export default function Header() {
    return(
        <header className="mt-4 py-7 px-4 bg-zinc-50 rounded-2xl">
            <nav className="flex justify-between items-center">
                <Image src="/logo-taskly.svg"
                    alt="Taskly Logo"
                    width={107}
                    height={32}
                />
                <ul>
                    <li className="flex justify-around gap-4">
                        <Link href="#">Home</Link>
                        <Link href="#">Sobre</Link>
                        <Link href="#">Diferenciais</Link>
                        <Link href="#">Depoimentos</Link>
                        <Link href="#">Planos</Link>
                    </li>
                </ul>
            <Link href="#">Entrar</Link>
            </nav>
        </header>
    )
}