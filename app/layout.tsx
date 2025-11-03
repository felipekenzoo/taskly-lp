import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from 'next/font/google'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Taskly | Sua ferramenta de organização de tarefas",
  description: "Feito para freelancers e empreendedores independentes",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "tarefas",
    "organização",
    "produtividade",
    "freelancer",
    "empreendedor",
    "negócios",
    "agenda",
    "gerenciamento de tarefas",
    "aplicativo de tarefas",
    "ferramenta de produtividade",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
