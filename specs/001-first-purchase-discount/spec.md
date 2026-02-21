# Feature Specification: First Purchase Discount Announcement

**Feature Branch**: `001-first-purchase-discount`  
**Created**: 21 de fevereiro de 2026  
**Status**: In Clarification  
**Input**: User description: "Desejo incluir em algum lugar da página um anúncio que informe ao usuário que ele acabou de ganhar 10% de desconto em sua primeira compra. Para ter direito ao desconto ele deverá informar o código MEUMERECIDO quando entrar em contato para efetuar a compra."

## Clarifications

### Session 21-02-2026

- Q: Como exatamente o usuário acessa o código quando clica no anúncio? → A: Modal/Popup (Opção A) - Um modal aparecerá ao clicar no banner de desconto, revelando o código de forma destacada
- Q: Confirmar mudança de código ADOROPUDIM para novo código → A: MEUMERECIDO (Opção Outro) - Código de 10 caracteres, memorável e alinhado ao brand
- Q: Qual tipo de rastreamento para métrica de cliques? → A: Google Analytics Event (Opção A) - Evento GA4 "click_discount_code" para integração com GA existente

---

## User Scenarios & Testing *(mandatory)*

<!--
  IMPORTANT: User stories should be PRIORITIZED as user journeys ordered by importance.
  Each user story/journey must be INDEPENDENTLY TESTABLE - meaning if you implement just ONE of them,
  you should still have a viable MVP (Minimum Viable Product) that delivers value.
  
  Assign priorities (P1, P2, P3, etc.) to each story, where P1 is the most critical.
  Think of each story as a standalone slice of functionality that can be:
  - Developed independently
  - Tested independently
  - Deployed independently
  - Demonstrated to users independently
-->

### User Story 1 - Discover First-Time Buyer Discount on Hero Section (Priority: P1)

Um visitante chega na landing page pela primeira vez e logo no topo vê um anúncio destacado informando que ganhou 10% de desconto automático por ser primeira compra.

**Why this priority**: É o valor máximo da feature. Sem essa seção visível, o desconto não será conhecido pelo cliente. Deve estar acima da dobra (above the fold) para máxima visibilidade.

**Independent Test**: Pode ser testado acessando a página no desktop/mobile e verificando se o anúncio apareça antes de qualquer scroll. Entrega valor imediato ao visitante.

**Acceptance Scenarios**:

1. **Given** um visitante nunca viu a página, **When** acessa pudimmerecido.com.br no navegador, **Then** vê um anúncio destacado sobre o desconto de 10% na seção hero ou logo abaixo
2. **Given** o anúncio está visível, **When** o visitante lê o texto, **Then** compreende claramente que ganhou desconto de 10% por ser primeira compra
3. **Given** um dispositivo mobile, **When** o visitante visualiza a página, **Then** o anúncio ocupa espaço adequado e é legível sem necessidade de corte de texto

---

### User Story 2 - Reveal Code via Modal when Clicking Banner (Priority: P1)

Quando o visitante clica no anúncio de desconto na seção hero, um modal se abre revelando o código promocional MEUMERECIDO em grande destaque, permitindo fácil cópia e memorização.

**Why this priority**: Crítico para conversão. O código deve estar facilmente acessível e destacado. Um modal cria um momento de atenção visual que garante que o cliente não esqueça. Sem isso, a promoção não se concretiza.

**Independent Test**: Pode ser testado clicando no banner de desconto e verificando se o modal aparece com o código MEUMERECIDO destacado. Aumento direto em conversões com desconto aplicado.

**Acceptance Scenarios**:

1. **Given** um visitante clicou no anúncio de desconto, **When** um modal se abre, **Then** o código MEUMERECIDO é exibido em grande destaque e fácil leitura
2. **Given** o modal está aberto, **When** o visitante legue o código, **Then** ele é claro e pode ser facilmente copiado ou anotado
3. **Given** o visitante copiou o código, **When** ele entra em contato (WhatsApp/email), **Then** pode usar o código MEUMERECIDO para ativar o desconto

---

### User Story 3 - Reinforce Discount Code in Footer (Priority: P2)

No rodapé da página, há um pequeno lembrete do código MEUMERECIDO para garantir que visitantes que não viram o anúncio principal tenham acesso à informação.

**Why this priority**: Reforço de mensagem. Visitantes que scrollaram toda a página sem notar o anúncio principal terão uma última oportunidade de ver o código antes de sair.

**Independent Test**: Pode ser testado fazendo scroll até o footer e verificando se o código está presente. Melhora a cobertura de awareness da promoção.

**Acceptance Scenarios**:

1. **Given** um visitante está no footer, **When** lê a seção de contato ou CTA final, **Then** vê menção ao código MEUMERECIDO como lembrete
2. **Given** o texto no footer, **When** lido, **Then** é claro que o código se aplica a primeira compra

### Edge Cases

- O que acontece se um cliente visitante acessa a página em um dispositivo desktop e depois vira a conversa WhatsApp no mobile? O código ainda deve ser claro em ambos contextos.
- Como o sistema comunica o desconto se o cliente entra em contato por email em vez de WhatsApp? O código deve estar documentado para ser comunicado manualmente.
- Que passa se a promoção expira em uma data futura? (Futuro) O anúncio ainda deve aparecer enquanto válido, ou será removido completamente.
- Cliente recebe o código mas não consegue achar - há um lugar secundário onde pode ver (FAQ, rodapé, email de confirmação)?

## Requirements *(mandatory)*

<!--
  ACTION REQUIRED: The content in this section represents placeholders.
  Fill them out with the right functional requirements.
-->

### Functional Requirements

- **FR-001**: Sistema DEVE exibir um anúncio destacado sobre o desconto de 10% para primeira compra na seção hero ou logo após, visível no primeiro viewport (acima da dobra)
- **FR-002**: O anúncio DEVE incluir explicitamente texto indicando que o código pode ser revelado ao clicar
- **FR-003**: O anúncio DEVE ser responsivo e legível em mobile (320px+), tablet (640px+) e desktop (1024px+)
- **FR-004**: Quando o visitante clica no anúncio de desconto, DEVE aparecer um modal/popup revelando o código promocional **MEUMERECIDO** em grande destaque
- **FR-005**: O código no modal DEVE ter contraste máximo para legibilidade (conforme WCAG AA) e ser facilmente copiável
- **FR-006**: O código MEUMERECIDO DEVE constar no link/mensagem de WhatsApp ou em local de fácil acesso antes da finalização
- **FR-007**: O rodapé da página DEVE conter uma menção ao código MEUMERECIDO como reforço de mensagem
- **FR-008**: O modal NÃO DEVE poluir indevidamente (deve ter botão de fechar claro)
- **FR-009**: O texto do anúncio DEVE ser claro e direto: "Você ganhou 10% de desconto em sua primeira compra! Clique para revelar seu código"
- **FR-010**: Sistema DEVE registrar evento GA4 "click_discount_code" toda vez que visitante clica no banner/modal para rastrear métrica
- **FR-011**: Evento GA4 DEVE incluir propriedades: discount_percentage (10), promo_code (MEUMERECIDO), interaction_type (click_banner ou copy_code)

### Key Entities

- **Discount Announcement**: Entidade visual que exibe informações sobre a promoção (percentual, código, validade)
- **Promotional Code**: MEUMERECIDO - código de 10 caracteres que cliente informa ao entrar em contato
- **First Purchase Context**: Informação que aplica apenas a novos clientes (primeira compra)

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% dos visitantes novos no desktop conseguem ver o anúncio do desconto no primeiro carregamento da página (sem scroll)
- **SC-002**: 100% dos visitantes em mobile conseguem ver o anúncio do desconto sem truncamento ou corte de texto
- **SC-003**: Ao clicar no anúncio, 100% dos usuários conseguem visualizar o modal com código MEUMERECIDO claro e facilmente copiável
- **SC-004**: 85%+ dos usuários que veem o modal conseguem copiar/anotar o código MEUMERECIDO com uma ação
- **SC-005**: A taxa de clique no banner de desconto é rastreada via GA4 e atinge mínimo 10% do tráfego (event: click_discount_code)
- **SC-006**: 70%+ dos usuários que clicam no banner copiam o código (evento GA4: copy_code_success)
- **SC-007**: 80% das conversões mensais que informam "MEUMERECIDO" como código referem-se a primeiras compras
- **SC-008**: Tempo de carregamento da página continua abaixo de 3 segundos (a adição do anúncio não impacta performance)
- **SC-009**: Lighthouse score mantém-se acima de 90 em Performance, Accessibility e SEO (anúncio não degrada qualidade)
- **SC-010**: 100% dos usuários conseguem navegar com teclado até o código e acessar informações de compra (acessibilidade)

---

## Assumptions *(context for implementation)*

- O anúncio será sempre ativo (válido indefinidamente até futura alteração)
- "Primeira compra" é determinada pelo cliente ao informar o código ADOROPUDIM (sem verificação automatizada de histórico)
- O desconto é manual - deve ser informado pelo cliente, não aplicado automaticamente no checkout
- Não há restrições legais ou de duplicação de código (cada cliente pode usar uma vez)
- O anúncio não substitui nenhum elemento existente, apenas é adicionado ou integrado na seção hero
- Layout da página mantém estrutura conforme CONSTITUTION.md - anúncio respeita padrões de espaçamento e paleta de cores
- Google Analytics já está implementado no projeto (conforme README.md), eventos serão ligados ao gtag.js existente
- Modal deve ter comportamento responsivo em mobile (não cobrir 100% da tela, permitir fechar facilmente)

---

## Notes & Context

- **Localização primária**: Hero section ou banner logo após header (acima da dobra) - clicável para revelar modal
- **Localização secundária**: Rodapé e no CTA de compra (WhatsApp/Email)
- **Design**: Usar cores de destaque conforme CONSTITUTION.md - cor accent ou cor secondary
- **Tipografia**: Playpen Sans Bold para chamada principal, Telegraf para detalhes
- **Urgência**: A promoção é permanente, mas o anúncio deve ter design que atraia atenção
- **Interação**: Banner como gatilho, modal como revelação do código (interactive storytelling)
- **Métricas**: Todos os cliques rastreados via Google Analytics GA4 com eventos customizados
- **Código**: MEUMERECIDO (10 caracteres, memorável, alinhado ao brand)
