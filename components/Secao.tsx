export function Secao({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24">{children}</div>
    </section>
  );
}

/** Cabeça de seção em coluna própria: o título fica ancorado à esquerda. */
export function CabecaSecao({
  titulo,
  children,
}: {
  titulo: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="display text-title text-balance">{titulo}</h2>
      {children}
    </div>
  );
}
