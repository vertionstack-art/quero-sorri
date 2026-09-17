import { clinica } from "@/content/clinica";
import { IconeTelefone, IconeWhatsApp, Marca } from "@/components/Icones";

const secoes = [
  { href: "#tratamentos", rotulo: "Tratamentos" },
  { href: "#convenios", rotulo: "Convênios" },
  { href: "#equipe", rotulo: "Quem atende" },
  { href: "#local", rotulo: "Onde fica" },
  { href: "#perguntas", rotulo: "Perguntas" },
];

export function Cabecalho() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/92 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 sm:h-[4.5rem] lg:px-8">
        <a
          href="#topo"
          className="toque flex items-center gap-2.5 text-pine"
          aria-label={`${clinica.nome} — início`}
        >
          <Marca className="h-9 w-9 shrink-0" />
          <span className="display text-[1.0625rem] leading-none text-ink">
            Quero Sorrir
            <span className="mt-1 block font-sans text-[0.6875rem] font-medium text-moss">
              Clínica odontológica em Gurupi
            </span>
          </span>
        </a>

        <nav aria-label="Seções do site" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {secoes.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  className="toque flex items-center rounded px-3 text-[0.9375rem] text-ink/75 transition-colors hover:text-pine"
                >
                  {s.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <a
            href={clinica.telefoneLink}
            className="toque hidden items-center gap-2 rounded-md border border-line px-3.5 text-[0.9375rem] font-medium text-ink transition-colors hover:border-moss hover:text-pine sm:flex"
          >
            <IconeTelefone className="h-[1.05rem] w-[1.05rem] text-moss" />
            {clinica.telefoneExibicao}
          </a>
          <a
            href={clinica.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="toque flex items-center gap-2 rounded-md bg-pine px-4 text-[0.9375rem] font-medium text-paper transition-colors hover:bg-moss"
          >
            <IconeWhatsApp className="h-[1.05rem] w-[1.05rem]" />
            Agendar
          </a>
        </div>
      </div>
    </header>
  );
}
