import { MOSTRAR_MARCADORES } from "@/content/clinica";

/**
 * Marca no site um texto que ainda precisa ser confirmado com a clínica.
 * Some de toda a página quando MOSTRAR_MARCADORES vira false.
 */
export function Pendente({
  children,
  escuro = false,
}: {
  children: React.ReactNode;
  escuro?: boolean;
}) {
  if (!MOSTRAR_MARCADORES) return <>{children}</>;
  return (
    <span className={escuro ? "pendente pendente-escuro" : "pendente"}>
      {children}
      <span className="sr-only"> (informação a confirmar com a clínica)</span>
    </span>
  );
}

/** Versão em bloco, para seções inteiras que dependem de dado do cliente. */
export function AvisoPendente({
  children,
  escuro = false,
}: {
  children: React.ReactNode;
  escuro?: boolean;
}) {
  if (!MOSTRAR_MARCADORES) return null;
  return (
    <p
      className={[
        "mt-5 flex items-start gap-2.5 border-l-2 py-1 pl-3 text-[0.9375rem] leading-relaxed",
        escuro
          ? "border-[#f2b169]/60 text-[#f2b169]"
          : "border-pend/50 text-pend",
      ].join(" ")}
    >
      <span aria-hidden="true" className="mt-[0.45rem] block h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
      <span>{children}</span>
    </p>
  );
}
