import { clinica } from "@/content/clinica";
import { Secao, CabecaSecao } from "@/components/Secao";
import { AvisoPendente } from "@/components/Marcador";

export function Tratamentos() {
  const { tratamentos } = clinica;

  return (
    <Secao id="tratamentos">
      <div className="grid gap-10 lg:grid-cols-[22rem_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <CabecaSecao titulo={tratamentos.titulo}>
            <p className="medida mt-5 text-ink/75">{tratamentos.intro}</p>
            {tratamentos.pendente && (
              <AvisoPendente>
                Lista montada pela Vertion Stack a partir do ramo da clínica. A
                Quero Sorrir precisa confirmar quais destes tratamentos ela
                realmente realiza.
              </AvisoPendente>
            )}
          </CabecaSecao>
        </div>

        <ul className="border-t border-line">
          {tratamentos.itens.map((item) => (
            <li
              key={item.nome}
              className="grid gap-1 border-b border-line py-5 sm:grid-cols-[13.5rem_1fr] sm:gap-6 sm:py-6"
            >
              <h3 className="display text-[1.1875rem] leading-snug text-vinho">
                {item.nome}
              </h3>
              <p className="text-[1rem] leading-relaxed text-ink/75">{item.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </Secao>
  );
}
