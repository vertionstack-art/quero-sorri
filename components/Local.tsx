import Image from "next/image";
import { clinica } from "@/content/clinica";
import { Secao } from "@/components/Secao";
import { AvisoPendente, Pendente } from "@/components/Marcador";
import { IconeLocal, IconeRelogio } from "@/components/Icones";

const { lat, lng } = clinica.coordenadas;
const d = 0.0045;
const mapaSrc =
  "https://www.openstreetmap.org/export/embed.html?bbox=" +
  `${lng - d}%2C${lat - d * 0.6}%2C${lng + d}%2C${lat + d * 0.6}` +
  `&layer=mapnik&marker=${lat}%2C${lng}`;

export function Local() {
  const { endereco, estrutura, horarios } = clinica;

  return (
    <Secao id="local">
      <div className="grid items-start gap-10 lg:grid-cols-[22rem_1fr] lg:gap-16">
        <div>
          <h2 className="display text-title text-balance">Onde fica a clínica</h2>

          <div className="mt-7 flex gap-3.5">
            <IconeLocal className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-moss" />
            <address className="text-[1.0625rem] not-italic leading-relaxed">
              {endereco.linha1}
              <br />
              {endereco.bairro}
              <br />
              {endereco.cidade} — {endereco.estado}, {endereco.cep}
            </address>
          </div>

          <div className="mt-7 flex gap-3.5">
            <IconeRelogio className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-moss" />
            <div>
              <h3 className="text-[0.9375rem] font-semibold text-pine">
                Horário de atendimento
              </h3>
              <dl className="mt-2.5 space-y-1.5">
                {horarios.map((h) => (
                  <div key={h.dia} className="flex flex-wrap items-baseline gap-x-2">
                    <dt className="text-[1rem] text-ink/75">{h.dia}</dt>
                    <dd className="text-[1rem]">
                      {h.pendente ? <Pendente>{h.valor}</Pendente> : h.valor}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={clinica.rotaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="toque inline-flex items-center rounded-md bg-pine px-5 py-3 font-medium text-paper transition-colors hover:bg-moss"
            >
              Traçar rota
            </a>
            <a
              href={clinica.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="toque inline-flex items-center rounded-md border border-line px-5 py-3 font-medium transition-colors hover:border-moss hover:text-pine"
            >
              Ver no Google Maps
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-line bg-sage/40">
          <iframe
            src={mapaSrc}
            title={`Mapa com a localização da ${clinica.nome} em ${endereco.cidade}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[21rem] w-full border-0 sm:h-[26rem]"
          />
        </div>
      </div>

      <figure className="mt-14 lg:mt-20">
        <div className="relative aspect-[21/9] overflow-hidden rounded-lg">
          <Image
            src={estrutura.foto.src}
            alt={estrutura.foto.alt}
            fill
            sizes="(max-width: 1280px) 100vw, 1152px"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
          <span className="display text-[1.1875rem] text-pine">
            {estrutura.titulo}
          </span>
          <span className="medida-larga text-[0.9375rem] text-ink/65">
            {estrutura.texto}
          </span>
        </figcaption>
        {estrutura.pendente && (
          <AvisoPendente>
            Fotos reais da clínica, da recepção e da equipe entram no lugar
            destas assim que o cliente enviar.
          </AvisoPendente>
        )}
      </figure>
    </Secao>
  );
}
