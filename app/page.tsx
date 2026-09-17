import { Topo } from "@/components/Topo";
import { Tratamentos } from "@/components/Tratamentos";
import { Etapas } from "@/components/Etapas";
import { Convenios } from "@/components/Convenios";
import { Equipe } from "@/components/Equipe";
import { Local } from "@/components/Local";
import { Faq } from "@/components/Faq";
import { CtaFinal } from "@/components/CtaFinal";

export default function Page() {
  return (
    <>
      <Topo />
      <Tratamentos />
      <Etapas />
      <Convenios />
      <Equipe />
      <Local />
      <Faq />
      <CtaFinal />
    </>
  );
}
