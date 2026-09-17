import { clinica, MOSTRAR_MARCADORES } from "@/content/clinica";
import { Marca } from "@/components/Icones";

export function Rodape() {
  const { endereco, rodape } = clinica;

  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-28 lg:px-8 lg:pb-20">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5 text-pine">
              <Marca className="h-9 w-9" />
              <span className="display text-[1.0625rem] text-ink">{clinica.nome}</span>
            </div>
            <p className="medida mt-4 text-[0.9375rem] leading-relaxed text-ink/70">
              {rodape.aviso}
            </p>
          </div>

          <div>
            <h2 className="text-[0.9375rem] font-semibold text-pine">Contato</h2>
            <ul className="mt-3 space-y-2 text-[0.9375rem]">
              <li>
                <a
                  href={clinica.telefoneLink}
                  className="toque inline-flex items-center text-ink/80 underline decoration-line underline-offset-4 hover:text-pine hover:decoration-moss"
                >
                  {clinica.telefoneExibicao}
                </a>
              </li>
              <li>
                <a
                  href={clinica.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="toque inline-flex items-center text-ink/80 underline decoration-line underline-offset-4 hover:text-pine hover:decoration-moss"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={clinica.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="toque inline-flex items-center text-ink/80 underline decoration-line underline-offset-4 hover:text-pine hover:decoration-moss"
                >
                  Ficha no Google Maps
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[0.9375rem] font-semibold text-pine">Endereço</h2>
            <address className="mt-3 text-[0.9375rem] not-italic leading-relaxed text-ink/80">
              {endereco.linha1}
              <br />
              {endereco.bairro}
              <br />
              {endereco.cidade} — {endereco.estado}, {endereco.cep}
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-[0.875rem] text-ink/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {clinica.nome}
          </p>
          <p>
            Site desenvolvido por{" "}
            <a
              href={rodape.autorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-pine underline decoration-line underline-offset-4 hover:decoration-moss"
            >
              {rodape.autor}
            </a>
          </p>
        </div>

        {MOSTRAR_MARCADORES && (
          <p className="mt-8 rounded-md border border-pend/30 bg-pend/6 px-4 py-3 text-[0.875rem] leading-relaxed text-pend">
            <strong className="font-semibold">Prévia.</strong> Os trechos com
            fundo laranja são campos que ainda dependem da informação real da
            clínica. As fotos são de banco de imagens. Nenhum dado de
            atendimento, preço ou horário foi inventado: onde não havia
            informação, ficou o marcador.
          </p>
        )}
      </div>
    </footer>
  );
}
