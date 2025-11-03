import Hat from "@/components/hat";

export default function Hero() {
    return (
        <section className="flex flex-col items-center mt-28">
            <Hat
            nomeIcone="Sparkles"
            title="Agora com IA integrada!"
            />
            <h1 className="font-semibold text-5xl text-center mt-8">
                Gerencie seus "freelas" e finanças <br/> de forma <strong className="text-blueviolet-600 font-semibold">simples e intuitiva</strong>
            </h1>
        </section>

    )
}