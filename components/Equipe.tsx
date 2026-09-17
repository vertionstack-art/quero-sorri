import Image from "next/image";
import { clinica } from "@/content/clinica";
import { Pendente } from "@/components/Marcador";
import { IconeEstrela } from "@/components/Icones";

export function Equipe() {
  const { equipe, google } = clinica;
  const { responsavel } = equipe;

  return (
    <section id="equipe" className="scroll-mt-20 bg-vinho text-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-0 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative order-2 min-h-[20rem] w-full lg:order-1 lg:min-h-[32rem] lg:self-stretch">
          <Image
            src={equipe.foto.src}
            alt={equipe.foto.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>

        <div className="order-1 px-5 py-16 sm:py-20 lg:order-2 lg:py-24 lg:pr-8 lg:pl-14">
          <h2 className="display text-title text-balance">{equipe.titulo}</h2>
          <p className="medida mt-5 text-nude">{equipe.texto}</p>

          <div className="mt-9 border-t border-linha-inv pt-6">
            <p className="text-[0.8125rem] font-medium tracking-[0.05em] text-nude/70">
              {responsavel.rotulo}
            </p>
            <p className="display mt-2 text-[1.375rem] leading-snug">
              <Pendente escuro>{responsavel.nome.valor}</Pendente>
            </p>
            <p className="mt-3 text-[1rem] text-nude">
              <Pendente escuro>{responsavel.registro.valor}</Pendente>
            </p>
            <p className="mt-3 text-[1rem] text-nude">
              <Pendente escuro>{responsavel.formacao.valor}</Pendente>
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-linha-inv pt-6">
            <p className="flex items-baseline gap-2">
              <span className="display text-[2.25rem] leading-none">
                {google.nota.toLocaleString("pt-BR")}
              </span>
              <span className="flex gap-0.5 self-center text-ouro" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <IconeEstrela key={i} className="h-4 w-4" />
                ))}
              </span>
            </p>
            <p className="text-[0.9375rem] text-nude">
              Média de {google.avaliacoes} avaliações de pacientes no Google.{" "}
              <a
                href={clinica.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-nude/40 underline-offset-4 hover:decoration-nude"
              >
                Ler as avaliações
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
