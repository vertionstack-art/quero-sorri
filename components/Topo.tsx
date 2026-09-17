import Image from "next/image";
import { clinica } from "@/content/clinica";
import { IconeEstrela, IconeLocal, IconeTelefone, IconeWhatsApp } from "@/components/Icones";

export function Topo() {
  const { hero, google, endereco } = clinica;

  return (
    <section id="topo" className="bg-pine text-paper">
      <div className="mx-auto grid max-w-6xl items-stretch gap-0 px-0 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="assenta flex flex-col justify-center px-5 pt-12 pb-10 sm:pt-16 lg:py-24 lg:pr-10 lg:pl-8">
          <h1 className="display text-display text-balance">{hero.titulo}</h1>

          <p className="medida mt-6 text-sub text-sage">{hero.subtitulo}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={clinica.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="toque inline-flex items-center justify-center gap-2.5 rounded-md bg-paper px-6 py-3.5 text-[1.0625rem] font-semibold text-pine transition-colors hover:bg-sage"
            >
              <IconeWhatsApp className="h-[1.15rem] w-[1.15rem]" />
              {hero.ctaPrimario}
            </a>
            <a
              href={clinica.telefoneLink}
              className="toque inline-flex items-center justify-center gap-2.5 rounded-md border border-sage/40 px-6 py-3.5 text-[1.0625rem] font-medium text-paper transition-colors hover:border-sage hover:bg-white/5"
            >
              <IconeTelefone className="h-[1.15rem] w-[1.15rem]" />
              {clinica.telefoneExibicao}
            </a>
          </div>

          <p className="mt-7 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.9375rem] text-sage/85">
            <IconeLocal className="h-[1.05rem] w-[1.05rem] shrink-0" />
            {endereco.linha1}, {endereco.bairro} — {endereco.cidade}/{endereco.estado}
          </p>
        </div>

        <div className="relative min-h-[18rem] sm:min-h-[24rem] lg:min-h-[34rem]">
          <Image
            src={hero.foto.src}
            alt={hero.foto.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      <BarraFatos />
    </section>
  );

  function BarraFatos() {
    return (
      <div className="border-t border-line-dark bg-pine-deep">
        <dl className="mx-auto grid max-w-6xl divide-y divide-line-dark px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
          <div className="py-5 sm:pr-6">
            <dt className="text-[0.8125rem] font-medium tracking-[0.05em] text-sage/70">
              Avaliação no Google
            </dt>
            <dd className="mt-1.5 flex items-center gap-2">
              <span className="display text-[1.5rem] leading-none text-paper">
                {google.nota.toLocaleString("pt-BR")}
              </span>
              <span className="flex gap-0.5 text-gold" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <IconeEstrela key={i} className="h-[0.9rem] w-[0.9rem]" />
                ))}
              </span>
              <a
                href={clinica.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.9375rem] text-sage underline decoration-sage/40 underline-offset-4 hover:decoration-sage"
              >
                {google.avaliacoes} avaliações
              </a>
            </dd>
          </div>

          <div className="py-5 sm:px-6">
            <dt className="text-[0.8125rem] font-medium tracking-[0.05em] text-sage/70">
              Endereço
            </dt>
            <dd className="mt-1.5 text-[1.0625rem] text-paper">
              {endereco.linha1}, {endereco.bairro}
            </dd>
          </div>

          <div className="py-5 sm:pl-6">
            <dt className="text-[0.8125rem] font-medium tracking-[0.05em] text-sage/70">
              Telefone e WhatsApp
            </dt>
            <dd className="mt-1.5">
              <a
                href={clinica.telefoneLink}
                className="inline-flex min-h-11 items-center text-[1.0625rem] text-paper underline decoration-sage/40 underline-offset-4 hover:decoration-sage"
              >
                {clinica.telefoneExibicao}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    );
  }
}
