import { clinica } from "@/content/clinica";
import { Secao } from "@/components/Secao";
import { Pendente } from "@/components/Marcador";
import { IconeMais } from "@/components/Icones";

export function Faq() {
  const { faq } = clinica;

  return (
    <div className="bg-nude/45">
      <Secao id="perguntas">
        <div className="grid gap-10 lg:grid-cols-[22rem_1fr] lg:gap-16">
          <h2 className="display text-title text-balance lg:sticky lg:top-28 lg:self-start">
            {faq.titulo}
          </h2>

          <div className="border-t border-nude-forte">
            {faq.itens.map((item) => (
              <details key={item.p} className="group border-b border-nude-forte">
                <summary className="toque flex items-center justify-between gap-5 py-5 text-left">
                  <h3 className="display text-[1.125rem] leading-snug text-vinho">
                    {item.p}
                  </h3>
                  <IconeMais className="h-[1.15rem] w-[1.15rem] shrink-0 text-rubi transition-transform duration-200 group-open:rotate-45" />
                </summary>
                <p className="medida-larga pb-6 text-[1rem] leading-relaxed text-ink/78">
                  {item.pendente ? (
                    <Pendente>{item.r}</Pendente>
                  ) : (
                    item.r
                  )}
                  {"complemento" in item && item.complemento ? (
                    <>
                      {" "}
                      <Pendente>{item.complemento}</Pendente>
                    </>
                  ) : null}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Secao>
    </div>
  );
}
