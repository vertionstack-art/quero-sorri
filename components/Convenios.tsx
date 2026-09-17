import { clinica } from "@/content/clinica";
import { Secao } from "@/components/Secao";
import { Pendente } from "@/components/Marcador";
import { IconeWhatsApp } from "@/components/Icones";

export function Convenios() {
  const { convenios } = clinica;

  return (
    <Secao id="convenios">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="display text-title text-balance">{convenios.titulo}</h2>
          <p className="medida mt-5 text-ink/75">{convenios.texto}</p>
          <a
            href={clinica.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="toque mt-7 inline-flex items-center gap-2.5 rounded-md bg-vinho px-5 py-3 font-medium text-paper transition-colors hover:bg-rubi"
          >
            <IconeWhatsApp className="h-[1.05rem] w-[1.05rem]" />
            Consultar meu convênio
          </a>
        </div>

        <div className="rounded-lg bg-nude/55 p-7 sm:p-9">
          <div>
            <h3 className="display text-[1.1875rem] text-vinho">
              {convenios.listaTitulo}
            </h3>
            <ul className="mt-3.5 space-y-2.5">
              {convenios.lista.map((item) => (
                <li key={item.valor} className="text-[1rem] leading-relaxed">
                  {item.pendente ? <Pendente>{item.valor}</Pendente> : item.valor}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 border-t border-nude-forte pt-7">
            <h3 className="display text-[1.1875rem] text-vinho">
              {convenios.pagamentoTitulo}
            </h3>
            <ul className="mt-3.5 space-y-2.5">
              {convenios.pagamento.map((item) => (
                <li key={item.valor} className="text-[1rem] leading-relaxed">
                  {item.pendente ? <Pendente>{item.valor}</Pendente> : item.valor}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-7 border-t border-nude-forte pt-7 text-[0.9375rem] leading-relaxed text-ink/70">
            O que o convênio não cobre pode ser feito como particular, na mesma
            consulta. A recepção informa o que entra em cada caso antes de
            começar o tratamento.
          </p>
        </div>
      </div>
    </Secao>
  );
}
