# O que pedir à Clínica Quero Sorrir

Lista do que falta para o site sair da prévia. Cada item abaixo corresponde a um
marcador azul no site. O campo entre parênteses é onde ele fica em
`content/clinica.ts`.

## Essencial (sem isso o site não vai ao ar)

1. **Horário de atendimento** — dias e horas, incluindo sábado (`horarios`).
   Também alimenta o resultado do Google. Formato do campo `schema`:
   `"Mo-Fr 08:00-18:00"`, `"Sa 08:00-12:00"`.
2. **Nome do cirurgião-dentista responsável técnico e o número do CRO-TO**
   (`equipe.responsavel`). É exigência do Conselho Federal de Odontologia:
   site de clínica precisa exibir o responsável técnico e o registro.
3. **Formação e especializações do responsável** (`equipe.responsavel.formacao`).
4. **Lista de convênios aceitos** (`convenios.lista`). É a primeira pergunta do
   paciente.
5. **Confirmação da lista de tratamentos** (`tratamentos.itens`). A lista atual
   foi montada por nós a partir do ramo; a clínica precisa dizer o que realmente
   faz e o que não faz.

## Importante

6. **Formas de pagamento e parcelamento** no particular (`convenios.pagamento`).
7. **Valor da consulta de avaliação**, ou a decisão de não publicar valor
   (`faq`, pergunta "Quanto custa a avaliação?").
8. **Como funciona o atendimento de urgência / dor** (`faq`).
9. **Se atende crianças** e a partir de que idade (`faq`).
10. **Estacionamento**: tem vaga, é na rua, ou convênio com algum
    estacionamento (`faq`).

## Fotos e identidade

11. **Logotipo em arquivo** (`.svg`, `.ai`, `.pdf` ou PNG em alta com fundo
    transparente). Hoje o site usa uma **reprodução** do lettering dourado
    feita por nós a partir da imagem da logo; a versão final precisa do
    arquivo original. Peça junto os **códigos das cores** (o vermelho e o
    dourado) — enquanto isso, os valores usados foram lidos da imagem e ficam
    em `app/globals.css`, no bloco do topo.
12. **Fotos reais**: fachada, recepção, um consultório, e a equipe. De
    preferência em horizontal, com boa luz, sem paciente identificável (ou com
    autorização de uso de imagem assinada).
13. **Fotos com o vermelho da marca em cena** (recepção, fachada, jaleco da
    equipe) valorizam muito mais do que foto genérica de banco de imagens.

## Depois

14. **Domínio próprio** (ex.: `clinicaquerosorrir.com.br`). Hoje o endereço é
    provisório, da Vercel.
15. **E-mail de contato**, se quiserem exibir.
16. **Redes sociais** (Instagram, Facebook), para linkar no rodapé.

## Pontos que precisam ser resolvidos antes de mostrar ao dono

### É Gurupi-TO ou Barreiras-BA?

Os dados que temos se contradizem:

| Sinal | Aponta para |
| --- | --- |
| Endereço e ficha do Google Maps | Av. Goiás, 1997 — Setor União I, **Gurupi/TO** |
| Texto dentro da logo | **Barreiras-Ba** |
| DDD do telefone, (77) | **Barreiras/BA** (o DDD de todo o Tocantins é 63) |

Duas explicações possíveis: a clínica tem unidades nas duas cidades e a logo é
a da unidade da Bahia, ou a logo veio do perfil de outra unidade.

O site inteiro está montado para **Gurupi/TO**, porque é o que a ficha do Maps
diz — cidade, endereço, mapa, coordenadas, dados estruturados e palavras-chave
de busca. Se a unidade certa for Barreiras, tudo isso muda; é troca de meia
hora, mas precisa ser decidida antes de o link ir para o dono.
