# Feature Specification: Substituir Botão Copiar por Link WhatsApp

**Feature Branch**: `002-whatsapp-buy-button`
**Created**: 21 de fevereiro de 2026
**Status**: Implemented
**Implemented**: 21 de fevereiro de 2026
**Commit**: faf9951
**Input**: Substituir o botão de copiar código do banner de desconto por um link de Comprar que leve para o link do pudim merecido no whatsapp

## User Scenarios & Testing

### User Story 1 - Comprar Direto via WhatsApp com Código (Priority: P1)

Visitante clica no banner de desconto, visualiza o código MEUMERECIDO no modal e clica em "Comprar via WhatsApp". O WhatsApp abre automaticamente com mensagem pré-preenchida contendo o código de desconto, facilitando a conversão imediata.

**Why this priority**: Reduz fricção no funil de conversão ao eliminar o passo de copiar/colar manualmente o código. Leva o usuário diretamente à ação de compra no momento de maior interesse (após descobrir o desconto).

**Independent Test**: Clicar no banner de desconto → Modal abre → Botão "Comprar via WhatsApp" visível → Clicar no botão → WhatsApp web/app abre com mensagem pré-preenchida incluindo "MEUMERECIDO"

**Acceptance Scenarios**:

1. **Given** visitante está na landing page, **When** clica no banner de desconto, **Then** modal abre exibindo código MEUMERECIDO e botão "Comprar via WhatsApp"
2. **Given** modal de desconto está aberto, **When** clica em "Comprar via WhatsApp", **Then** WhatsApp abre em nova aba com número 5561981375389 e mensagem "Olá! Gostaria de encomendar um Pudim Merecido. Tenho o código MEUMERECIDO para 10% de desconto!"
3. **Given** modal de desconto está aberto, **When** clica no botão WhatsApp, **Then** GA4 registra evento "whatsapp_buy_click" com promo_code "MEUMERECIDO"
4. **Given** usuário está em mobile, **When** clica no botão WhatsApp, **Then** app WhatsApp nativo abre (não web)
5. **Given** modal está aberto, **When** clica no botão WhatsApp, **Then** modal permanece aberto (não fecha automaticamente)

---

### Edge Cases

- **Usuário sem WhatsApp instalado (desktop)**: Link abre WhatsApp Web, solicitando login
- **Usuário sem WhatsApp instalado (mobile)**: Sistema operacional tenta abrir app ou oferece instalação
- **Bloqueio de pop-ups**: Botão pode não funcionar se navegador bloqueia janelas novas (adicionar target="_blank" e rel="noopener")
- **Código já usado**: Mensagem não valida se código foi usado - responsabilidade do atendente via WhatsApp

## Requirements

### Functional Requirements

- **FR-001**: Modal MUST exibir botão "Comprar via WhatsApp" em vez do botão "Copiar Código"
- **FR-002**: Botão WhatsApp MUST usar link formatado: `https://wa.me/5561981375389?text=[mensagem_url_encoded]`
- **FR-003**: Mensagem pré-preenchida MUST incluir: "Olá! Gostaria de encomendar um Pudim Merecido. Tenho o código MEUMERECIDO para 10% de desconto!"
- **FR-004**: Botão MUST abrir link em nova aba (_blank) com rel="noopener noreferrer"
- **FR-005**: Botão MUST manter estilo visual consistente com design system (cores, fontes, espaçamento)
- **FR-006**: GA4 MUST rastrear evento "whatsapp_buy_click" quando botão é clicado
- **FR-007**: Botão MUST ser responsivo (funcionando em desktop, tablet, mobile)
- **FR-008**: Botão MUST ser acessível via teclado (Tab + Enter)
- **FR-009**: Modal MUST continuar exibindo o código MEUMERECIDO visualmente (para referência)
- **FR-010**: Botão "Fechar" (X) MUST permanecer funcional no modal

### Key Entities

- **Discount Modal**: Elemento UI que exibe código de desconto e call-to-action
  - Código promocional: MEUMERECIDO (10% desconto)
  - WhatsApp número: 5561981375389
  - Mensagem template: "Olá! Gostaria de encomendar um Pudim Merecido. Tenho o código MEUMERECIDO para 10% de desconto!"

## Success Criteria

**Quantitative**:
- 80% dos usuários que abrem o modal clicam no botão WhatsApp (comparado a <30% que copiavam código anteriormente)
- Tempo médio de conversão (banner → WhatsApp) < 5 segundos
- Taxa de abertura do WhatsApp > 95% (clicks que efetivamente abrem WhatsApp)
- Eventos GA4 "whatsapp_buy_click" rastreados com 100% de precisão

**Qualitative**:
- Usuários conseguem completar ação de compra sem precisar lembrar/digitar código manualmente
- Botão é visualmente proeminente no modal (cor primária, tamanho adequado)
- Experiência é fluida em todos os dispositivos (desktop/mobile/tablet)

## Assumptions

- WhatsApp é o canal principal de vendas do Pudim Merecido (validado por CONSTITUTION.md e presença de botão flutuante)
- Número WhatsApp 5561981375389 está ativo e monitora mensagens
- Usuários têm WhatsApp instalado ou acesso ao WhatsApp Web
- Conversão via WhatsApp é mais efetiva que copiar código manualmente
- Código MEUMERECIDO continua válido e aplicável a primeira compra

## Constraints

**Technical**:
- Botão usa link wa.me (não requer bibliotecas externas)
- Mensagem URL-encoded para suportar caracteres especiais
- Modal já existe (feature 001), apenas modificar ações internas

**Business**:
- Não alterar valor do desconto (10%)
- Não alterar código promocional (MEUMERECIDO)
- Não remover display visual do código (usuários podem preferir anotar)

## Dependencies

- Feature 001-first-purchase-discount (modal de desconto já implementado)
- WhatsApp business número 5561981375389 ativo
- Google Analytics 4 configurado (para tracking)

## Out of Scope

- Validação automática de código (será feita manualmente pelo atendente)
- Múltiplos códigos de desconto
- Integração com sistema de cupons
- Rastreamento de conversões pós-WhatsApp (fora da landing page)
- Opção de escolher outro canal de contato (email, telefone)
