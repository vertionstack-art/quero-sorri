import { clinica } from "@/content/clinica";
import { IconeWhatsApp } from "@/components/Icones";

/** Botão fixo, sempre alcançável, com a mensagem já escrita. */
export function BotaoWhatsApp() {
  return (
    <a
      href={clinica.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar avaliação pelo WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex h-14 items-center gap-2.5 rounded-full bg-[#1a7f4b] pr-5 pl-4 text-[1rem] font-semibold text-white shadow-[0_6px_24px_rgba(6,37,31,0.32)] transition-colors hover:bg-[#166b40] sm:right-6 sm:bottom-6"
    >
      <IconeWhatsApp className="h-6 w-6" />
      <span>Agendar</span>
    </a>
  );
}
