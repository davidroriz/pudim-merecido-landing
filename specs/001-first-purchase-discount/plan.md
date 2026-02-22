# Implementation Plan: First Purchase Discount Announcement

**Branch**: `001-first-purchase-discount` | **Date**: 21 de fevereiro de 2026 | **Spec**: [specs/001-first-purchase-discount/spec.md](./spec.md)
**Status**: Planning Complete | **Next**: Execute `/speckit.tasks` para gerar task breakdown

**Note**: Implementation plan gerado via `/speckit.plan` command.

## Summary

**Primary Requirement**: Implementar um banner de anúncio de desconto de 10% na seção hero da landing page que, quando clicado, revela um modal com o código promocional MEUMERECIDO. O clique no banner e a cópia do código devem ser rastreados via Google Analytics GA4.

**Technical Approach**:
- Banner HTML5 semântico + CSS responsivo (mobile-first, conforme CONSTITUTION.md)
- Modal CSS com JavaScript vanilla ES6+ para abrir/fechar
- GA4 event tracking integrado com gtag.js existente
- Sem dependências externas (zero bibliotecas novas)
- Feature completa em 3 arquivos: `index.html`, `style.css`, `script.js`

## Technical Context

**Language/Version**: HTML5 + CSS3 + JavaScript ES6+ (Vanilla, sem frameworks)
**Primary Dependencies**: Nenhuma (zero dependências externas)
**Storage**: N/A (apenas código frontend)
**Testing**: Manual (browser testing) + Google Analytics events
**Target Platform**: Web (navegadores desktop, tablet, mobile - 320px+)
**Project Type**: Landing page / Single-page application (SPA)
**Performance Goals**:
  - Page load: < 3 segundos
  - Modal reveal: < 100ms
  - GA4 EventTracker: < 50ms
  - Lighthouse: ≥ 90 em Performance, Accessibility, SEO
**Constraints**:
  - Nenhuma degradação de performance existente
  - WCAG 2.1 AA compliance (acessibilidade)
  - Responsividade: 320px (mobile) até 1920px (desktop)
  - Browser support: Chrome, Firefox, Safari, Edge (2 últimas versões)
**Scale/Scope**:
  - 3 arquivos modificados (index.html, style.css, script.js)
  - Estimado 150-200 linhas de novo código
  - 1 feature com 3 user stories (P1, P1, P2)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Verificação contra CONSTITUTION.md

**Valor 1 - Clareza e Simplicidade**: ✅ PASS
- Feature é single-purpose (anúncio + modal)
- Sem poluição visual (banner discreto, modal focal)
- Uma ação clara por elemento (clicar → revelar)

**Valor 2 - Qualidade Premium**: ✅ PASS
- Design refinado: Cores da paleta (marrom, dourado)
- Tipografia: Playpen Sans Bold (títulos), Telegraf (corpo)
- Espaçamento: Segue grid 8px (spacing variables)

**Valor 3 - Foco em Conversão**: ✅ PASS
- Todo elemento serve o objetivo: converter visitante em cliente
- CTA clara (banner clicável) com incentivo visível ("ganhou 10%")
- Jornada otimizada: Awareness (hero) → Interest (modal) → Action (copy code)

**Valor 4 - Experiência do Usuário**: ✅ PASS
- Mobile-first: Banner responsivo 320px+
- Performance: < 100ms para modal reveal, JavaScript otimizado
- Acessibilidade: Modal com close button, keyboard navigation, WCAG AA
- Intuitivo: Usuário entende: vê banner → clica → copia código

**Valor 5 - Sustentabilidade Digital**: ✅ PASS
- Código vanilla ES6+ (sem jQuery, React, etc.)
- Dependências mínimas: Zero novos npm packages
- Hospedagem: GitHub Pages (sem custos)
- Zero débito técnico: HTML semântico, CSS modular, JS puro

**FR Compliance**:
- FR-001 a FR-009: Respeitam padrões de semântica, responsividade, acessibilidade
- FR-010, FR-011: GA4 events integrados com gtag.js existente

**RESULTADO**: ✅ PASS - Feature está 100% alinhada com CONSTITUTION.md

## Project Structure

### Documentation (this feature)

```text
specs/001-first-purchase-discount/
├── plan.md                          # This file (planning)
├── spec.md                          # Feature specification
├── research.md                      # (não aplicável - spec sem ambiguidades)
├── data-model.md                    # (não aplicável - feature não tem persistência)
├── quickstart.md                    # (não aplicável - feature é frontend simples)
├── contracts/                       # (não aplicável - sem API/contracts públicas)
├── tasks.md                         # Será gerado via /speckit.tasks
└── checklists/
    └── requirements.md              # Validação de qualidade da spec
```

### Source Code (repository root)

```text
pudim-merecido-landing/
├── index.html                       # MODIFICAR: Adicionar banner + modal HTML
├── style.css                        # MODIFICAR: Adicionar CSS modal, banner styling
├── script.js                        # MODIFICAR: Adicionar JS para modal + GA4 tracking
├── images/
│   └── PUDIM/                       # (sem mudanças)
├── CONSTITUTION.md                  # (referência, sem mudanças)
├── README.md                        # (atualizar seção de features - sem mudanças obrigatórias)
├── DEPLOY.md                        # (sem mudanças)
├── context.md                       # (sem mudanças)
└── .github/
    └── prompts/                     # (path para speckit, sem mudanças)
```

**Structure Decision**:
Este é um projeto **Single-file Landing Page** (Opção 1 simplificada). Feature é pura frontend, sem backend/API/database. Modificações serão incrementais em 3 arquivos principais:
1. **index.html**: Adicionar HTML do banner (após hero section) e modal (antes de closing body tag)
2. **style.css**: Adicionar CSS para banner, modal, animações, responsividade
3. **script.js**: Adicionar JS para modal interaction + GA4 event tracking

Nenhuma nova pasta ou arquivo será criado no root. feature permanece encapsulada e isolada.

## Complexity Tracking

**Result**: ✅ ZERO violations detected

Feature está completamente alinhada com CONSTITUTION.md. Nenhuma justificativa de complexidade incomum necessária. Implementação segue padrões estabelecidos:
- Single-file landing page (já existente)
- HTML5 semântico + CSS BEM + JavaScript vanilla
- Mobile-first approach
- Zero dependências externas
- Performance-conscious (sub-100ms para interações)

| Aspecto | Abordagem | Justificação |
|--------|----------|-------------|
| Modalidade UI | CSS + JS vanilla | Simpleza, sem framework, performance |
| Rastreamento | Google Analytics GA4 | Já implementado, integração nativa |
| Responsividade | Media queries mobile-first | Padrão do projeto conforme CONSTITUTION |
| Acessibilidade | WCAG 2.1 AA | Requisito obrigatório (FR-005, SC-010) |

---

## Phase 0: Research *(Skipped)*

Nenhuma pesquisa necessária. Todas as ambiguidades foram resolvidas na sessão de clarification:
- ✅ UI Pattern: Modal/Popup
- ✅ Promo Code: MEUMERECIDO
- ✅ Tracking: GA4 Events

Spec está limpa de "NEEDS CLARIFICATION" flags.

---

## Phase 1: Design & Architecture *(Completed in Context Above)*

### Data Model

N/A - Feature não persiste dados. Apenas armazena/passa dados de estado (modal open/close).

```javascript
// Estado da feature (em memória)
{
  isDiscountModalOpen: boolean,
  promoCode: "MEUMERECIDO",
  discountPercentage: 10,
  gaTrackingReady: boolean (será true após gtag.js load)
}
```

### UI Components

**1. Banner (Hero Section)**
- Localização: Logo após `.hero` section no HTML
- Semântica: `<section class="discount-banner">`
- Content: "Você ganhou 10% de desconto em sua primeira compra! Clique para revelar seu código"
- Styling: Cores accent (#FFB347) ou secondary (#D2691E), padding 24px, border-radius 8px
- Interatividade: Clicável (event listener), muda cursor, feedback visual (hover)

**2. Modal (Overlay)**
- Localização: Antes de closing `</body>` tag
- Semântica: `<div class="discount-modal" role="dialog">`
- Content: Código MEUMERECIDO em grande destaque (font-size: 48px+), botão Copy, botão Close
- Styling: Semi-transparent backdrop, modal card centered, responsive (mobile-friendly)
- Interatividade:
  - Close button (X top-right)
  - Copy button (copy to clipboard)
  - Keyboard: ESC para fechar, Tab navigation

### Integration Points

**Google Analytics GA4**:
```javascript
// Eventos a registrar:
gtag('event', 'click_discount_code', {
  'discount_percentage': 10,
  'promo_code': 'MEUMERECIDO',
  'interaction_type': 'click_banner'
});

gtag('event', 'copy_code_success', {
  'discount_percentage': 10,
  'promo_code': 'MEUMERECIDO',
  'interaction_type': 'copy'
});
```

### Files Modified

1. **index.html**
   - Adicionar seção `.discount-banner` após hero section (estimado 5-10 linhas)
   - Adicionar `.discount-modal` antes de `</body>` (estimado 15-20 linhas)

2. **style.css**
   - Adicionar `.discount-banner` styles (estimado 20-30 linhas)
   - Adicionar `.discount-modal` + overlay backdrop styles (estimado 40-50 linhas)
   - Adicionar media queries para responsividade (estimado 15-20 linhas)
   - Total: ~100 linhas

3. **script.js**
   - Funcionalidade de abertura/fechamento do modal (estimado 20-30 linhas)
   - Funcionalidade de cópia para clipboard (estimado 15-20 linhas)
   - GA4 event tracking integration (estimado 20-30 linhas)
   - Event listeners e inicialização (estimado 10-15 linhas)
   - Total: ~80-100 linhas

**Total de Código**: ~180-200 linhas (conforme estimativa em Technical Context)

---

## Phase 2: Task Breakdown *(Ready for /speckit.tasks)*

próximo passo: Execute `/speckit.tasks` para gerar `tasks.md` com breakdown detalhado de cada tarefa implementável.

Tasks previstas (alto-nível):
- T1: Implementar HTML do banner + modal
- T2: Implementar CSS para banner (styling + responsividade)
- T3: Implementar CSS para modal (styling + animações)
- T4: Implementar JavaScript para modal interaction
- T5: Implementar GA4 event tracking
- T6: Testar responsividade (mobile, tablet, desktop)
- T7: Testar acessibilidade (WCAG AA, keyboard nav)
- T8: Validar Lighthouse scores (Performance, Accessibility, SEO)

---

## Assumptions & Dependencies

### Assumptions
- ✅ GTM/GA4 já está implementado no site (conforme README.md menciona Google Analytics)
- ✅ `gtag` global object está disponível no window
- ✅ jQuery NÃO é requisito (vanilla ES6+)
- ✅ Navegadores modernos suportam ES6 (template literals, arrow functions, const/let)
- ✅ CSS Grid/Flexbox suportado (alinhado com CONSTITUTION.md)

### External Dependencies
- ❌ Nenhuma (zero npm packages)
- ✅ Google Analytics (já implementado)
- ✅ Fonts (Playpen Sans, Telegraf) já carregadas

### Known Risks & Mitigations
| Risk | Severity | Mitigation |
|------|----------|-----------|
| GA4 não inicializado quando modal abre | Low | Check `window.gtag` before sending events |
| Modal z-index conflict com outros elementos | Low | Usar `z-index: 9999` e documentar no CSS |
| Clipboard API não suportada em browsers antigos | Low | Fallback: mostrar input field para manual copy |
| Modal não responsivo em telas muito pequenas | Low | Media query para mobile: modal 90vw max |

---

## Success Criteria *(Measurable)*

Veja [spec.md - Success Criteria](./spec.md#measurable-outcomes) para SCs completos.

**Critical SCs for This Planning**:
- SC-001: 100% desktop users veem banner sem scroll
- SC-003: 100% de users conseguem ver modal ao clicar
- SC-005: Cliques rastreados via GA4 ≥ 10% do tráfego
- SC-008: Page load continua < 3s
- SC-009: Lighthouse ≥ 90 em todas métricas

---

## Timeline & Effort *(Estimate)*

| Phase | Task | Effort | Days |
|-------|------|--------|------|
| Dev | T1-T5: Feature Implementation | 4-6 hours | 0.5-1 |
| QA | T6-T8: Testing & Validation | 2-3 hours | 0.25-0.5 |
| **Total** | | **6-9 hours** | **1-1.5 days** |

**Recomendação**: Implementação em 1 dia (assuming 6-8 horas de trabalho continuado).

---

## Commits & Versioning

Branch: `001-first-purchase-discount`

Expected commits:
```bash
git commit -m "feat: add discount banner + modal HTML structure"
git commit -m "feat: implement discount banner styling + responsividade"
git commit -m "feat: implement discount modal styling + animations"
git commit -m "feat: implement modal interaction logic"
git commit -m "feat: implement GA4 event tracking"
git commit -m "test: validate responsividade + accessibility"
# After all tests pass:
git commit -m "ci: ready for merge to main"
```

---

## References & Links

- **Specification**: [specs/001-first-purchase-discount/spec.md](./spec.md)
- **Constitution**: [CONSTITUTION.md](../../CONSTITUTION.md) - Design & code principles
- **Landing Page**: [index.html](../../index.html)
- **Styles**: [style.css](../../style.css)
- **Scripts**: [script.js](../../script.js)
- **Google Analytics Setup**: Refer to [README.md](../../README.md) section "Integração com Google Analytics"

---

**Status**: ✅ PLANNING COMPLETE
**Date Completed**: 21 de fevereiro de 2026
**Next Action**: Execute `/speckit.tasks` para task breakdown detalhado
