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

/** Marca da clínica: arco de sorriso. Substituir pelo logo real do cliente. */
export function Marca({ className = "h-9 w-9" }: Props) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <rect width="40" height="40" rx="11" fill="currentColor" />
      <path
        d="M11 17.5c0 6 4 9.5 9 9.5s9-3.5 9-9.5"
        fill="none"
        stroke="#F2F4F1"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <circle cx="14.6" cy="13.4" r="1.9" fill="#F2F4F1" />
      <circle cx="25.4" cy="13.4" r="1.9" fill="#F2F4F1" />
    </svg>
  );
}
