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
    <header className="sticky top-0 z-40 bg-vinho text-paper shadow-[0_1px_0_0_var(--color-linha-inv)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 sm:h-[4.5rem] lg:px-8">
        <a
          href="#topo"
          className="toque flex items-center"
          aria-label={`${clinica.nome} — início`}
        >
          <Marca />
        </a>

        <nav aria-label="Seções do site" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {secoes.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  className="toque flex items-center rounded px-3 text-[0.9375rem] text-nude/85 transition-colors hover:text-ouro"
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
            className="toque hidden items-center gap-2 rounded-md border border-linha-inv px-3.5 text-[0.9375rem] font-medium text-nude transition-colors hover:border-ouro hover:text-ouro sm:flex"
          >
            <IconeTelefone className="h-[1.05rem] w-[1.05rem]" />
            {clinica.telefoneExibicao}
          </a>
          <a
            href={clinica.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="toque flex items-center gap-2 rounded-md bg-paper px-4 text-[0.9375rem] font-semibold text-vinho transition-colors hover:bg-ouro-claro"
          >
            <IconeWhatsApp className="h-[1.05rem] w-[1.05rem]" />
            Agendar
          </a>
        </div>
      </div>
    </header>
  );
}
