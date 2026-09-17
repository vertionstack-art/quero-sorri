import { clinica } from "@/content/clinica";
import { IconeTelefone, IconeWhatsApp } from "@/components/Icones";

export function CtaFinal() {
  const { ctaFinal } = clinica;

  return (
    <section className="bg-vinho text-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="display text-title text-balance">{ctaFinal.titulo}</h2>
            <p className="medida mt-4 text-sub text-nude">{ctaFinal.texto}</p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href={clinica.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="toque inline-flex items-center justify-center gap-2.5 rounded-md bg-paper px-6 py-3.5 text-[1.0625rem] font-semibold text-vinho transition-colors hover:bg-nude"
            >
              <IconeWhatsApp className="h-[1.15rem] w-[1.15rem]" />
              Falar no WhatsApp
            </a>
            <a
              href={clinica.telefoneLink}
              className="toque inline-flex items-center justify-center gap-2.5 rounded-md border border-nude/40 px-6 py-3.5 text-[1.0625rem] font-medium transition-colors hover:border-nude hover:bg-white/5"
            >
              <IconeTelefone className="h-[1.15rem] w-[1.15rem]" />
              {clinica.telefoneExibicao}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
