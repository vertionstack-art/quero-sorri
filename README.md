# Clínica Quero Sorrir — site de prévia

Site de demonstração da **Clínica Quero Sorrir** (Av. Goiás, 1997 — Setor União I,
Gurupi/TO), feito pela **Vertion Stack** para apresentar ao dono.

Next.js 16 + TypeScript + Tailwind CSS 4. Página única, estática, sem banco de
dados e sem biblioteca de componentes.

## Onde se troca o conteúdo

Tudo o que está escrito no site fica em **um arquivo só**:

```
content/clinica.ts
```

Telefone, endereço, textos, lista de tratamentos, perguntas frequentes, horários
e textos de SEO estão lá. Nenhum texto foi escrito direto dentro dos componentes.

### Os marcadores laranja

Trechos que dependem de informação que a clínica ainda não passou aparecem no
site com fundo laranja e o texto "a confirmar". No arquivo de conteúdo eles estão
marcados com `pendente: true`.

Para trocar um deles: substitua o texto e mude `pendente: true` para
`pendente: false`.

Para esconder **todos** os marcadores de uma vez (versão final, sem avisos),
abra `content/clinica.ts` e mude a primeira linha de configuração:

```ts
export const MOSTRAR_MARCADORES = false;
```

## Fotos

As três fotos em `public/fotos/` são do Unsplash (uso livre) e servem só para a
prévia. Para trocar por fotos reais, salve as novas imagens em `public/fotos/`
com os mesmos nomes:

| Arquivo | Onde aparece |
| --- | --- |
| `hero-atendimento.jpg` | topo da página |
| `exame.jpg` | seção "Quem atende você" |
| `consultorio.jpg` | faixa larga na seção "Onde fica" |

Se os nomes forem outros, ajuste os caminhos em `content/clinica.ts`.

## Rodar na sua máquina

```bash
npm install
npm run dev
```

O site abre em http://localhost:3000.

## O que já está pronto

- Botão de WhatsApp fixo, com mensagem já escrita
- Alvos de toque de no mínimo 44px e navegação por teclado com foco visível
- `title`, `description`, Open Graph e imagem de compartilhamento gerada no build
- Dados estruturados `schema.org/Dentist` com endereço, coordenadas e mapa
- `sitemap.xml` e `robots.txt`
- Mapa leve por OpenStreetMap (sem chave de API e sem script pesado)

A nota do Google **não** entra nos dados estruturados de propósito: o Google só
aceita `aggregateRating` quando a avaliação foi coletada pelo próprio site.
Ela aparece na página, com link para a ficha de origem no Maps.

## Antes de publicar como site definitivo

1. Preencher tudo que está marcado como pendente (veja `PEDIR-AO-CLIENTE.md`).
2. Trocar as fotos.
3. Trocar `seo.url` em `content/clinica.ts` pelo domínio real.
4. Mudar `MOSTRAR_MARCADORES` para `false`.
