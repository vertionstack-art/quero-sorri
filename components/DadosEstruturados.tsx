import { clinica } from "@/content/clinica";

/**
 * Dados estruturados de negócio local (schema.org/Dentist).
 *
 * A nota do Google NÃO entra aqui de propósito: o Google só aceita
 * `aggregateRating` quando a avaliação foi coletada pelo próprio site.
 * Repetir a nota da ficha do Maps no código pode invalidar o resultado rico.
 * Ela aparece na página, com link para a ficha de origem.
 */
export function DadosEstruturados() {
  const { endereco, coordenadas, seo, horarios } = clinica;

  const horariosSchema = horarios.map((h) => h.schema).filter(Boolean);

  const negocio = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${seo.url}/#clinica`,
    name: clinica.nome,
    description: seo.description,
    url: seo.url,
    image: `${seo.url}/fotos/hero-atendimento.jpg`,
    telephone: clinica.telefoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: endereco.linha1,
      addressLocality: endereco.cidade,
      addressRegion: endereco.estado,
      postalCode: endereco.cep,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: coordenadas.lat,
      longitude: coordenadas.lng,
    },
    hasMap: clinica.mapsUrl,
    areaServed: {
      "@type": "City",
      name: `${endereco.cidade}, ${endereco.estado}`,
    },
    medicalSpecialty: "Dentistry",
    ...(horariosSchema.length > 0 ? { openingHours: horariosSchema } : {}),
    sameAs: [clinica.mapsUrl],
  };

  // Só entram no schema as perguntas com resposta já confirmada.
  const perguntas = clinica.faq.itens.filter((i) => !("pendente" in i && i.pendente));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: perguntas.map((i) => ({
      "@type": "Question",
      name: i.p,
      acceptedAnswer: { "@type": "Answer", text: i.r },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(negocio) }}
      />
      {perguntas.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
