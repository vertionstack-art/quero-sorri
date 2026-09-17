import type { Metadata, Viewport } from "next";
import { Petrona, Archivo } from "next/font/google";
import "./globals.css";
import { clinica } from "@/content/clinica";
import { Cabecalho } from "@/components/Cabecalho";
import { Rodape } from "@/components/Rodape";
import { BotaoWhatsApp } from "@/components/BotaoWhatsApp";
import { DadosEstruturados } from "@/components/DadosEstruturados";

const petrona = Petrona({
  variable: "--font-petrona",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(clinica.seo.url),
  title: {
    default: clinica.seo.title,
    template: `%s — ${clinica.nome}`,
  },
  description: clinica.seo.description,
  keywords: [
    "dentista em Gurupi",
    "clínica odontológica Gurupi",
    "dentista Tocantins",
    "Quero Sorrir",
    "Setor União I",
    "implante dentário Gurupi",
    "aparelho ortodôntico Gurupi",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: clinica.seo.url,
    siteName: clinica.nome,
    title: clinica.seo.title,
    description: clinica.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: clinica.seo.title,
    description: clinica.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b4038",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${petrona.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-pine focus:px-4 focus:py-2.5 focus:text-paper"
        >
          Pular para o conteúdo
        </a>
        <Cabecalho />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Rodape />
        <BotaoWhatsApp />
        <DadosEstruturados />
      </body>
    </html>
  );
}
