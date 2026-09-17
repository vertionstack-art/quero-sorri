import { clinica } from "@/content/clinica";
import { Secao } from "@/components/Secao";

export function Etapas() {
  const { etapas } = clinica;

  return (
    <div className="bg-sage/45">
      <Secao id="primeira-consulta">
        <h2 className="display text-title text-balance">{etapas.titulo}</h2>

        <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {etapas.itens.map((etapa, i) => (
            <li key={etapa.titulo} className="border-t-2 border-moss/35 pt-4">
              <span
                className="display block text-[1.75rem] leading-none text-moss"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h3 className="display mt-3 text-[1.1875rem] text-pine">{etapa.titulo}</h3>
              <p className="mt-2 text-[1rem] leading-relaxed text-ink/75">{etapa.texto}</p>
            </li>
          ))}
        </ol>
      </Secao>
    </div>
  );
}
