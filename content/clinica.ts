/**
 * ===========================================================================
 *  ARQUIVO ÚNICO DE CONTEÚDO — CLÍNICA QUERO SORRIR
 * ---------------------------------------------------------------------------
 *  Tudo que aparece escrito no site está aqui. Para trocar um texto, troque
 *  nesta página e salve. Não é preciso mexer em mais nenhum arquivo.
 *
 *  Itens marcados com `pendente: true` aparecem no site com um marcador
 *  laranja de "a confirmar". Depois que o cliente enviar a informação real,
 *  troque o texto e mude para `pendente: false`.
 *
 *  Para esconder TODOS os marcadores de uma vez (ex.: versão final),
 *  mude `MOSTRAR_MARCADORES` para false, logo abaixo.
 * ===========================================================================
 */

export const MOSTRAR_MARCADORES = true;

/** Texto que pode ou não estar confirmado pelo cliente. */
export type Texto = { valor: string; pendente?: boolean };

export const clinica = {
  nome: "Clínica Quero Sorrir",
  nomeCurto: "Quero Sorrir",
  descricaoCurta:
    "Clínica odontológica em Gurupi, no Tocantins. Atendimento com hora marcada, no Setor União I.",

  // --- Contato -------------------------------------------------------------
  telefoneExibicao: "(77) 99823-8810",
  telefoneLink: "tel:+5577998238810",
  telefoneE164: "+55 77 99823-8810",
  whatsappUrl:
    "https://wa.me/5577998238810?text=" +
    encodeURIComponent(
      "Olá! Vim pelo site da Clínica Quero Sorrir e gostaria de agendar uma avaliação.",
    ),
  whatsappUrlSimples: "https://wa.me/5577998238810",

  // --- Endereço ------------------------------------------------------------
  endereco: {
    linha1: "Av. Goiás, 1997",
    bairro: "Setor União I",
    cidade: "Gurupi",
    estado: "TO",
    cep: "77410-010",
    completo: "Av. Goiás, 1997 — Setor União I, Gurupi - TO, 77410-010",
  },
  coordenadas: { lat: -11.7287784, lng: -49.0669941 },
  mapsUrl:
    "https://www.google.com/maps/place/CL%C3%8DNICA+QUERO+SORRIR/data=!4m7!3m6!1s0x933e9500673129f1:0xc04054eae7176127!8m2!3d-11.7287784!4d-49.0669941!16s%2Fg%2F11yc71dtjj",
  rotaUrl:
    "https://www.google.com/maps/dir/?api=1&destination=-11.7287784,-49.0669941",

  // --- Reputação (dado real da ficha do Google Maps) -----------------------
  google: { nota: 4.8, avaliacoes: 70 },

  // --- Horários ------------------------------------------------------------
  // Preencha com o horário real e mude `pendente` para false.
  // O campo `schema` alimenta os dados estruturados do Google no formato
  // "Mo-Fr 08:00-18:00". Deixe "" enquanto não souber o horário.
  horarios: [
    { dia: "Segunda a sexta", valor: "a confirmar", pendente: true, schema: "" },
    { dia: "Sábado", valor: "a confirmar", pendente: true, schema: "" },
    { dia: "Domingo", valor: "a confirmar", pendente: true, schema: "" },
  ],

  // --- Topo ----------------------------------------------------------------
  hero: {
    titulo: "Cuidar dos dentes sem adiar mais um ano",
    subtitulo:
      "A Quero Sorrir atende em Gurupi com hora marcada, no Setor União I. Você chega, é avaliado e sai sabendo o que precisa ser feito, em quantas sessões e quanto custa.",
    ctaPrimario: "Agendar pelo WhatsApp",
    ctaSecundario: "Ligar agora",
    foto: {
      src: "/fotos/hero-atendimento.jpg",
      alt: "Dentista conversando com uma paciente sentada na cadeira odontológica, em consultório iluminado por luz natural.",
    },
  },

  // --- Tratamentos ---------------------------------------------------------
  // ATENÇÃO: confirme com a clínica quais destes tratamentos ela realmente
  // realiza e remova os que não fizerem parte.
  tratamentos: {
    titulo: "O que a clínica faz",
    intro:
      "A avaliação inicial define o tratamento. Nada começa antes de você entender o procedimento, o prazo e o valor.",
    pendente: true,
    itens: [
      {
        nome: "Avaliação e clínica geral",
        texto:
          "Exame da boca inteira, diagnóstico e plano de tratamento por escrito.",
      },
      {
        nome: "Limpeza e prevenção",
        texto:
          "Remoção de tártaro e placa, aplicação de flúor e orientação de higiene.",
      },
      {
        nome: "Restaurações",
        texto: "Tratamento de cáries e recomposição do dente com resina.",
      },
      {
        nome: "Tratamento de canal",
        texto: "Endodontia para dentes com inflamação ou infecção da polpa.",
      },
      {
        nome: "Extrações e pequenas cirurgias",
        texto: "Inclui a retirada de sisos, com avaliação por radiografia.",
      },
      {
        nome: "Próteses",
        texto: "Reposição de dentes ausentes com prótese fixa ou removível.",
      },
      {
        nome: "Implantes",
        texto: "Instalação do implante e da coroa sobre ele, em etapas planejadas.",
      },
      {
        nome: "Aparelho ortodôntico",
        texto:
          "Correção do alinhamento dos dentes e da mordida, com acompanhamento mensal.",
      },
      {
        nome: "Odontopediatria",
        texto:
          "Atendimento de crianças, com foco em prevenção e na adaptação ao consultório.",
      },
      {
        nome: "Clareamento dental",
        texto: "Procedimento feito no consultório ou supervisionado em casa.",
      },
    ],
  },

  // --- Como funciona -------------------------------------------------------
  etapas: {
    titulo: "Como funciona a primeira consulta",
    itens: [
      {
        titulo: "Você agenda",
        texto:
          "Pelo WhatsApp ou por telefone. Diga se está com dor, se é a primeira vez e se usa algum convênio.",
      },
      {
        titulo: "A clínica avalia",
        texto:
          "Exame da boca e, quando necessário, radiografia. É aqui que se descobre o que existe além do que dói.",
      },
      {
        titulo: "Você recebe o plano",
        texto:
          "A lista de procedimentos, a ordem em que serão feitos, quantas sessões e o valor de cada etapa.",
      },
      {
        titulo: "Você decide",
        texto:
          "O tratamento só começa depois que você concorda. Dá para fazer por partes, respeitando a urgência de cada caso.",
      },
    ],
  },

  // --- Convênios -----------------------------------------------------------
  convenios: {
    titulo: "Convênios e formas de pagamento",
    texto:
      "A clínica atende particular e também por convênio odontológico. Antes de agendar, mande o nome do seu plano pelo WhatsApp: a recepção confirma na hora se ele é aceito e o que ele cobre.",
    listaTitulo: "Convênios atendidos",
    lista: [{ valor: "Lista dos convênios aceitos", pendente: true }] as Texto[],
    pagamentoTitulo: "Pagamento particular",
    pagamento: [
      { valor: "Formas de pagamento e parcelamento", pendente: true },
    ] as Texto[],
  },

  // --- Equipe / responsável técnico ----------------------------------------
  equipe: {
    titulo: "Quem atende você",
    texto:
      "Todo procedimento é feito por cirurgião-dentista inscrito no Conselho Regional de Odontologia. O registro fica visível na clínica e aparece aqui no site.",
    responsavel: {
      rotulo: "Responsável técnico",
      nome: {
        valor: "Nome do cirurgião-dentista responsável",
        pendente: true,
      } as Texto,
      registro: { valor: "CRO-TO 00000", pendente: true } as Texto,
      formacao: { valor: "Formação e especializações", pendente: true } as Texto,
    },
    foto: {
      src: "/fotos/exame.jpg",
      alt: "Profissional de odontologia examinando os dentes de um paciente com espelho clínico.",
    },
  },

  // --- Estrutura -----------------------------------------------------------
  estrutura: {
    titulo: "A clínica por dentro",
    texto:
      "As fotos desta prévia são de banco de imagens. Serão trocadas pelas fotos reais da Quero Sorrir.",
    pendente: true,
    foto: {
      src: "/fotos/consultorio.jpg",
      alt: "Consultório odontológico com cadeira, equipamento e bancada de apoio.",
    },
  },

  // --- Perguntas frequentes ------------------------------------------------
  faq: {
    titulo: "Perguntas frequentes",
    itens: [
      {
        p: "Preciso marcar ou posso chegar direto?",
        r: "O atendimento é com hora marcada. Mande mensagem no WhatsApp ou ligue para (77) 99823-8810 e a recepção encaixa você no primeiro horário livre.",
      },
      {
        p: "Estou com dor. Consigo ser atendido hoje?",
        r: "Avise no WhatsApp que é dor. Casos de urgência são priorizados dentro dos horários disponíveis no dia.",
        pendente: true,
      },
      {
        p: "Quanto custa a avaliação?",
        r: "Valor da consulta de avaliação.",
        pendente: true,
      },
      {
        p: "A clínica atende crianças?",
        r: "Sim. O atendimento infantil é feito com foco em prevenção e na adaptação da criança ao consultório.",
        pendente: true,
      },
      {
        p: "Onde fica e tem estacionamento?",
        r: "A clínica fica na Av. Goiás, 1997, Setor União I, em Gurupi.",
        complemento: "Informação sobre estacionamento",
        pendente: true,
      },
      {
        p: "Meu convênio é aceito?",
        r: "Mande o nome do plano pelo WhatsApp. A recepção confirma na hora se ele é atendido e quais procedimentos estão cobertos.",
      },
    ],
  },

  // --- Chamada final -------------------------------------------------------
  ctaFinal: {
    titulo: "Marque sua avaliação",
    texto:
      "Mande uma mensagem agora e a recepção responde com os horários disponíveis.",
  },

  // --- Rodapé --------------------------------------------------------------
  rodape: {
    aviso:
      "Este site tem caráter informativo e não substitui a consulta com cirurgião-dentista. O resultado de qualquer tratamento varia de pessoa para pessoa.",
    autor: "Vertion Stack",
    autorUrl: "https://vertionstack.com.br",
  },

  // --- SEO -----------------------------------------------------------------
  seo: {
    title: "Clínica Quero Sorrir — Dentista em Gurupi, TO",
    description:
      "Clínica odontológica em Gurupi (TO), no Setor União I. Avaliação, limpeza, restaurações, canal, próteses e implantes. Agende pelo WhatsApp: (77) 99823-8810.",
    url: "https://quero-sorri.vercel.app",
  },
};

export type Clinica = typeof clinica;
