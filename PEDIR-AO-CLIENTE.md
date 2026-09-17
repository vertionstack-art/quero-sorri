# O que pedir à Clínica Quero Sorrir

Lista do que falta para o site sair da prévia. Cada item abaixo corresponde a um
marcador laranja no site. O campo entre parênteses é onde ele fica em
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

11. **Logotipo** em arquivo vetorial (`.svg`, `.ai` ou `.pdf`) ou PNG com fundo
    transparente, em alta. Hoje o site usa uma marca provisória feita por nós.
12. **Fotos reais**: fachada, recepção, um consultório, e a equipe. De
    preferência em horizontal, com boa luz, sem paciente identificável (ou com
    autorização de uso de imagem assinada).
13. **Cores da marca**, se a clínica já tiver.

## Depois

14. **Domínio próprio** (ex.: `clinicaquerosorrir.com.br`). Hoje o endereço é
    provisório, da Vercel.
15. **E-mail de contato**, se quiserem exibir.
16. **Redes sociais** (Instagram, Facebook), para linkar no rodapé.

## Ponto para conferir com o cliente

- O telefone informado é **(77) 99823-8810**. O DDD de Gurupi e de todo o
  Tocantins é **63**; o 77 é da Bahia. O número foi usado exatamente como veio
  da ficha, mas vale confirmar antes de mandar o link para o dono — se estiver
  errado, o botão de WhatsApp leva para outro lugar.
