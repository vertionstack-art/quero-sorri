type Props = { className?: string };

export function IconeWhatsApp({ className = "h-5 w-5" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23a8.18 8.18 0 0 1 8.23 8.24c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.79.97-.14.16-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.21.88 2.39 1.01 2.55.12.17 1.74 2.65 4.21 3.72.59.25 1.05.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

export function IconeTelefone({ className = "h-5 w-5" }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M6.6 3h-.9A2.7 2.7 0 0 0 3 5.7C3 14.15 9.85 21 18.3 21a2.7 2.7 0 0 0 2.7-2.7v-.9a1 1 0 0 0-.76-.97l-3.3-.83a1 1 0 0 0-1.03.38l-.94 1.25a12.5 12.5 0 0 1-5.17-5.17l1.25-.94a1 1 0 0 0 .38-1.03l-.83-3.3A1 1 0 0 0 6.6 3Z" />
    </svg>
  );
}

export function IconeEstrela({ className = "h-4 w-4" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="m12 2.6 2.86 5.8 6.4.93-4.63 4.52 1.1 6.38L12 17.22l-5.73 3.01 1.1-6.38-4.63-4.52 6.4-.93L12 2.6Z" />
    </svg>
  );
}

export function IconeLocal({ className = "h-5 w-5" }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function IconeRelogio({ className = "h-5 w-5" }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 1.9" />
    </svg>
  );
}

export function IconeMais({ className = "h-4 w-4" }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

/** Dente estilizado do logotipo, em dourado. */
export function MarcaDente({ className = "h-7 w-7" }: Props) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="ouroDente" x1="0" y1="0" x2="0.25" y2="1">
          <stop offset="0%" stopColor="#F2DDA2" />
          <stop offset="46%" stopColor="#D9AE52" />
          <stop offset="100%" stopColor="#A87F2E" />
        </linearGradient>
      </defs>
      <path
        fill="url(#ouroDente)"
        d="M24 6c3.4 0 4.6-1.6 8.4-1.6 5.6 0 9.6 4 9.6 10.2 0 5-1.5 8.4-2.7 13.2-1 4-1.6 8-2.4 11.2-.7 2.9-1.8 4.6-3.6 4.6-2.2 0-3.1-2.2-3.8-5.6-.8-3.8-1.4-8.4-3.1-10.6-.7-.9-1.5-1.3-2.4-1.3s-1.7.4-2.4 1.3c-1.7 2.2-2.3 6.8-3.1 10.6-.7 3.4-1.6 5.6-3.8 5.6-1.8 0-2.9-1.7-3.6-4.6-.8-3.2-1.4-7.2-2.4-11.2C7.5 23 6 19.6 6 14.6 6 8.4 10 4.4 15.6 4.4 19.4 4.4 20.6 6 24 6Z"
      />
    </svg>
  );
}

/**
 * Lockup da marca: reprodução aproximada do logotipo da clínica
 * (nome em dourado degradê sobre vermelho) para uso nesta prévia.
 * Trocar pelo arquivo original assim que a clínica enviar.
 */
export function Marca({
  className = "",
  compacto = false,
}: Props & { compacto?: boolean }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span className="leading-none">
        <span className="ouro-degrade block text-[1.3125rem] leading-none font-semibold tracking-[-0.015em] whitespace-nowrap">
          Quero<span className="font-extrabold">Sorrir</span>
        </span>
        {!compacto && (
          <span className="mt-0.5 block text-[0.6875rem] font-medium tracking-[0.17em] text-ouro">
            Odontologia
          </span>
        )}
      </span>
      <MarcaDente className="h-7 w-7 shrink-0" />
    </span>
  );
}
