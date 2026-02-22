# Tasks: First Purchase Discount Announcement

**Input**: Design documents from `/specs/001-first-purchase-discount/`
**Prerequisites**: [plan.md](./plan.md) ✅, [spec.md](./spec.md) ✅
**Feature Branch**: `001-first-purchase-discount`
**Status**: Ready for Implementation

**Tests**: Manual testing (browser) + automated GA4 event validation (no unit tests required for this frontend feature)

**Organization**: Tasks grouped by user story (US1, US2, US3) to enable independent implementation, testing, and delivery

---

## Format Reference

- **[P]**: Task can run in parallel (different files, no dependencies)
- **[US#]**: User story label (US1, US2, US3)
- **File paths**: Relative to repository root (`index.html`, `style.css`, `script.js`)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Validate environment and prepare for feature implementation

- [ ] T001 Validate GA4 integration in `script.js` - confirm `gtag()` global exists and is functional
- [ ] T002 Review CONSTITUTION.md color palette and typography variables for consistency
- [ ] T003 Verify existing HTML structure in `index.html` - identify hero section location for banner insertion

**Checkpoint**: Environment validated, ready for user story implementation ✅

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before user stories

**⚠️ CRITICAL**: No user story work can begin until this phase completes

- [X] T004 Create CSS variables for discount feature in `style.css`: `--discount-banner-bg`, `--discount-text` (using CONSTITUTION.md palette)
- [X] T005 [P] Add HTML semantic structure for banner container in `index.html` (after hero section, before beneficios section)
- [X] T006 [P] Add HTML semantic structure for modal overlay + dialog in `index.html` (before closing `</body>`)
- [X] T007 Create JavaScript namespace for discount feature: `window.discountFeature = {}` in `script.js`
- [X] T008 Configure GA4 event tracker setup in `script.js` - ensure events will fire with proper payload structure

**Checkpoint**: Foundation ready - user story implementation can now begin ✅

---

## Phase 3: User Story 1 - Discover First-Time Buyer Discount on Hero Section (Priority: P1) 🎯

**Goal**: Visitor arrives and immediately sees banner announcing 10% discount above the fold (no scroll needed)

**Independent Test**:
1. Load page in desktop browser → banner visible in hero section
2. Load page in mobile (320px) → banner visible without scroll, text not truncated
3. Load page in tablet (768px) → banner properly sized

### Implementation for User Story 1

- [X] T009 [US1] Update `.hero` section in `index.html` - add semantic `<section class="discount-banner">` after hero-content
- [X] T010 [US1] Write banner HTML structure in `index.html`:
  - Wrapper: `<section class="discount-banner" role="region" aria-label="First purchase discount">`
  - Content: `<p>Você ganhou 10% de desconto em sua primeira compra! Clique para revelar seu código</p>`
  - Interactive hint: Include visual indicator (cursor: pointer, chevron icon)
- [X] T011 [P] [US1] Create `.discount-banner` base styles in `style.css`:
  - Background color: `--color-accent` (#FFB347) or `--color-secondary` (#D2691E)
  - Padding: `--spacing-md` (24px) per CONSTITUTION.md
  - Text: Playpen Sans Bold, font-size 18px mobile / 20px desktop
  - Border-radius: `--border-radius` (8px)
  - Margin: `--spacing-md` vertical spacing
- [X] T012 [P] [US1] Create `.discount-banner` interactive styles in `style.css`:
  - Default: neutral appearance, pointer cursor
  - Hover: subtle background shift, slight scale (1.02x)
  - Active: shadow feedback (--shadow-md)
- [X] T013 [P] [US1] Add mobile responsivity for `.discount-banner` in `style.css`:
  - Media query: (min-width: 641px) → adjust padding and font-size
  - Ensure no text truncation on 320px screens
  - Test breakpoints: 320px, 640px, 1024px, 1920px
- [X] T014 [US1] Add accessibility features to banner in `style.css`:
  - High contrast text (dark text on light background, min 4.5:1 ratio per WCAG AA)
  - Add focus styles for keyboard navigation: `outline: 2px solid --color-primary`
  - Ensure skip-link or direct keyboard access

**Checkpoint**: User Story 1 complete - banner visible, styled, responsive, and keyboard accessible ✅

---

## Phase 4: User Story 2 - Reveal Code via Modal when Clicking Banner (Priority: P1)

**Goal**: When banner is clicked, modal opens revealing code MEUMERECIDO prominently, with copy and close functionality

**Independent Test**:
1. Click banner → modal appears centered
2. Code MEUMERECIDO visible in 48px+ font
3. Copy button works → code copied to clipboard
4. Close button works → modal closes
5. GA4 events tracked: `click_discount_code`, `copy_code_success`

### Implementation for User Story 2

- [X] T015 [US2] Write modal HTML structure in `index.html` (before `</body>`):
  - Overlay: `<div id="discountModal" class="modal-overlay" role="dialog" aria-labelledby="modalTitle">`
  - Content: Code MEUMERECIDO in `<span class="promo-code">MEUMERECIDO</span>`
  - Actions: Copy button, Close button (X)
  - Accessibility: `aria-modal="true"`, `aria-label`, focus trap
- [X] T016 [P] [US2] Create `.modal-overlay` styles in `style.css`:
  - Fixed positioning, full viewport coverage (100vh, 100vw)
  - Semi-transparent backdrop: `rgba(0, 0, 0, 0.6)`
  - Flexbox center alignment
  - z-index: 9999 (prevent conflicts, documented in CSS)
- [X] T017 [P] [US2] Create `.discount-modal` card styles in `style.css`:
  - Background: white (#FFFFFF)
  - Padding: `--spacing-lg` (32px)
  - Border-radius: `--border-radius` (8px)
  - Shadow: `--shadow-lg`
  - Width: 90vw mobile / 600px desktop (max-width: 600px)
  - Center positioned
- [X] T018 [P] [US2] Style `.promo-code` display in `style.css`:
  - Font-size: 48px mobile / 64px desktop
  - Font-weight: Bold (700)
  - Font-family: Playpen Sans (brand-aligned)
  - Color: `--color-primary` (#8B4513) for high contrast
  - Letter-spacing: 2px (readability)
  - User-select: all (easy copy)
  - Border: 2px dashed `--color-accent` (visual emphasis)
  - Padding: `--spacing-md`
- [X] T019 [P] [US2] Style modal action buttons in `style.css`:
  - `.copy-button`: Background `--color-accent`, hover state, active feedback
  - `.close-button`: Minimal style (X icon), positioned top-right, contrast-compliant
  - Both: Focus states for keyboard nav, min 44px clickable area (mobile-friendly)
- [X] T020 [US2] Implement modal open/close logic in `script.js`:
  - Function: `discountFeature.openModal()` - shows modal, prevents body scroll
  - Function: `discountFeature.closeModal()` - hides modal, restores scroll
  - Event: Click banner → calls `openModal()`
  - Event: Click close button → calls `closeModal()`
  - Event: Click overlay (outside modal) → calls `closeModal()`
  - Keyboard: ESC key → calls `closeModal()`
- [X] T021 [US2] Implement clipboard copy functionality in `script.js`:
  - Function: `discountFeature.copyPromoCode()`
  - Uses Clipboard API: `navigator.clipboard.writeText("MEUMERECIDO")`
  - Fallback: If Clipboard API unavailable, show input field with text selected
  - Feedback: Change copy button text to "Copiado!" for 2 seconds
  - Event: GA4 event `copy_code_success` triggered
- [X] T022 [US2] Implement GA4 event tracking in `script.js`:
  - Event 1: `click_discount_code` - fired when banner is clicked
    - Properties: `discount_percentage: 10`, `promo_code: "MEUMERECIDO"`, `interaction_type: "click_banner"`
  - Event 2: `copy_code_success` - fired when copy button clicked
    - Properties: `discount_percentage: 10`, `promo_code: "MEUMERECIDO"`, `interaction_type: "copy"`
  - Ensure `gtag('event', ...)` respects GDPR/consent settings if applicable
- [X] T023 [US2] Add keyboard accessibility to modal in `script.js`:
  - Focus trap: Tab stays within modal when open
  - ESC closes modal
  - Focus management: Focus modal on open, restore focus on close
  - Arrow keys: Optional (previous/next in multi-code scenario - N/A for MVP)

**Checkpoint**: User Story 2 complete - modal fully functional with interaction and tracking ✅

---

## Phase 5: User Story 3 - Reinforce Discount Code in Footer (Priority: P2)

**Goal**: Footer contains a secondary reminder of code MEUMERECIDO for visitors who scrolled without noticing the banner

**Independent Test**:
1. Scroll to footer in desktop/mobile
2. Code MEUMERECIDO visible in footer section
3. Text clarifies it applies to first purchase only
4. No functional interaction required (informational only)

### Implementation for User Story 3

- [X] T024 [US3] Locate footer section in `index.html` and identify footer contact area
- [X] T025 [US3] Add footer reminder text in `index.html`:
  - Within footer contact section, add: `<p class="promo-reminder">Primeira compra? Use o código <strong>MEUMERECIDO</strong> para ganhar 10% de desconto!</p>`
  - Keep it subtle (informational, not pushy)
- [X] T026 [P] [US3] Create `.promo-reminder` styles in `style.css`:
  - Font-size: 14px
  - Font-family: Telegraf (body text, per CONSTITUTION.md)
  - Color: `--color-text-dark` with sufficient contrast
  - Margin: `--spacing-sm` (16px)
  - Font-weight: Normal, with `<strong>` emphasis on code
- [X] T027 [P] [US3] Add mobile responsivity for footer reminder in `style.css`:
  - Ensure readable on 320px screens
  - Maintain line-length < 80 characters for readability

**Checkpoint**: User Story 3 complete - footer reinforcement in place ✅

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Validation, optimization, and documentation

### Testing & Validation

- [ ] T028 [P] Manual browser testing - desktop (Chrome, Firefox, Safari):
  - Banner visible above fold on load
  - Banner clickable, modal opens/closes
  - Code copyable
  - Keyboard navigation (Tab, ESC)
  - All text readable, no truncation
- [ ] T029 [P] Manual browser testing - mobile (iOS Safari, Android Chrome):
  - Banner visible at 320px, 375px, 425px screen widths
  - Modal responsive (doesn't overflow, clickable buttons)
  - Keyboard (on-screen) navigation functional
  - Clipboard works (or fallback input shows)
- [ ] T030 [P] Manual browser testing - tablet (iPad, Android tablets):
  - Banner and modal properly scaled
  - Landscape orientation functional
- [ ] T031 Validate Lighthouse scores in Chrome DevTools:
  - Performance: ≥ 90
  - Accessibility: ≥ 90 (WCAG AA)
  - SEO: ≥ 95
  - Best Practices: ≥ 90
  - Document baseline scores before/after
- [ ] T032 Validate page load time:
  - Full page load: < 3 seconds (verify via Lighthouse Metrics)
  - Modal reveal: < 100ms (manual testing with DevTools Timing)
  - GA4 event latency: < 50ms (Network tab monitoring)

### Accessibility Compliance

- [ ] T033 WCAG 2.1 AA compliance check:
  - Color contrast: Use WebAIM Contrast Checker (min 4.5:1)
  - Keyboard navigation: All interactive elements accessible via Tab
  - Screen reader: Test with NVDA (Windows) or VoiceOver (Mac)
  - Semantics: Banner and modal use correct `role`, `aria-label`, `aria-modal`
- [ ] T034 Test with accessibility tools:
  - WAVE (webaim.org/wave) → no errors
  - Axe DevTools → no critical/serious violations
  - Lighthouse Accessibility → ≥ 90 score
- [ ] T035 Document accessibility features in code comments:
  - Modal focus trap implementation
  - Keyboard event handlers
  - ARIA labels and roles

### Cross-Browser Compatibility

- [ ] T036 [P] Test in older/less common browsers:
  - Safari 12+ (iOS 12+)
  - Edge 18+ (Chromium-based)
  - Firefox 80+
  - Chrome 90+
  - No JavaScript errors in console
- [ ] T037 Fallback testing:
  - Clipboard API not available → input field fallback works
  - CSS Grid/Flexbox fallback → layout degrades gracefully
  - Document any known limitations

### Code Quality & Documentation

- [ ] T038 [P] Code review for best practices:
  - HTML: Valid HTML5, semantic tags, no console errors
  - CSS: Follows BEM naming (`.discount-banner`, `.modal-overlay`), uses variables, no !important
  - JavaScript: ES6+, named functions, comments on complex logic, no global pollution
  - References CONSTITUTION.md patterns throughout
- [ ] T039 Add inline comments/documentation:
  - HTML: Comment on banner and modal sections
  - CSS: Comment media query breakpoints, animation triggers
  - JavaScript: Comment modal state management, GA4 tracking logic, keyboard handling
- [ ] T040 Verify GA4 events in Google Analytics dashboard:
  - Check Real-time Events view for `click_discount_code` and `copy_code_success`
  - Verify event properties (discount_percentage, promo_code, interaction_type) populated correctly
  - Take screenshot for documentation

### Performance Optimization

- [ ] T041 [P] Optimize CSS:
  - Remove unused styles
  - Combine media queries where possible
  - Check CSS file size impact (should add < 5KB)
- [ ] T042 [P] Optimize JavaScript:
  - Minimize function calls in event listeners (debounce if needed)
  - Check JS file size impact (should add < 8KB)
  - Verify no memory leaks with DevTools Memory profiler
- [ ] T043 Image optimization (if any):
  - N/A for this feature (text-based, no new images)

### Deployment Preparation

- [ ] T044 Git commit strategy:
  - Commit T001-T008: "feat: setup discount feature infrastructure"
  - Commit T009-T014: "feat: implement discount banner (US1)"
  - Commit T015-T023: "feat: implement discount modal with GA4 tracking (US2)"
  - Commit T024-T027: "feat: add footer discount reminder (US3)"
  - Commit T028-T043: "test: validate accessibility, performance, cross-browser"
- [ ] T045 Update README.md (Optional):
  - Add feature to "✨ Funcionalidades" section if not already there
  - Add GA4 events to documentation if applicable
- [ ] T046 Tag version and prepare release notes:
  - Describe: "First Purchase Discount Announcement"
  - Highlight: Modal interaction, GA4 tracking, WCAG AA compliance
  - Link to spec and plan for reference

### Final Validation

- [ ] T047 Smoke test final version:
  - Load page fresh (Shift+Refresh to clear cache)
  - Banner visible, clickable
  - Modal opens/closes, copy works
  - GA4 events tracked
  - All text readable, no layout breaks
- [ ] T048 Create test evidence (screenshots/videos):
  - Desktop banner and modal
  - Mobile banner and modal
  - GA4 events in dashboard
  - Lighthouse scores
  - Accessibility report
  - Store in specs/001-first-purchase-discount/evidence/ folder (optional)

**Checkpoint**: All validation complete - feature ready for production ✅

---

## Dependencies & Execution Order

### Phase Dependencies

```
Phase 1: Setup
    ↓ (validates environment)
Phase 2: Foundational (CSS variables, HTML structure, GA4 setup)
    ↓ (BLOCKS user story implementation)
Phase 3: User Story 1 (P1 - Banner)
    ↓ (can proceed in parallel with US2)
Phase 4: User Story 2 (P1 - Modal)
    ↓ (can proceed in parallel with US3)
Phase 5: User Story 3 (P2 - Footer)
    ↓ (all stories complete)
Phase 6: Polish & Validation
    ↓
✅ Feature Ready for Merge
```

### Within Each Phase: Parallel Opportunities

**Phase 2 (Foundational)**:
- T004 & T005 & T006 & T007 → all independent, can run in parallel
- Result: Foundational phase takes ~30 min (1 dev) vs 2 hours if sequential

**Phase 3 (US1 - Banner)**:
- T011, T012, T013 → all CSS tasks, can run in parallel
- Result: Banner styling takes ~30 min instead of 1.5 hours

**Phase 4 (US2 - Modal)**:
- T016, T017, T018, T019 → all CSS/HTML tasks, can run in parallel
- T020, T021, T022, T023 → JS logic tasks, sequential (depend on HTML/CSS structure)
- Result: Can pipeline CSS work while planning JS implementation

**Phase 6 (Polish)**:
- T028, T029, T030 → manual testing runs in parallel on different browsers
- T033, T034 → accessibility testing can start once T023 (modal) complete
- T041, T042 → performance optimization in parallel

---

## Parallel Example: Full Feature with 2 Developers

```
Developer A (Frontend Designer)          Developer B (JavaScript)
========================================  ========================================
T001-T008 Setup + Foundational
    (30 min)
           ↓
T009-T014 Banner HTML + CSS(P1 us1)      T015-T023 Modal JS + GA4(P1 US2)
(1 hour, parallel work)                  (1.5 hours)
           ↓
                                         (B waiting) → Helps A test

T024-T027 Footer reminder (P2 US3)       T028-T037 Testing & Validation
(30 min)                                 (1.5 hours)
           ↓                              ↓
Complete Setup                           Complete QA
(4 hours total for 2 devs)               (vs 7-9 hours for 1 dev)
```

---

## Implementation Strategy

### ✅ MVP (Minimum Viable Product)

All three user stories should be completed for MVP:
1. **Phase 3 (US1)**: Banner visible - core value delivered
2. **Phase 4 (US2)**: Modal functional - conversion enabled
3. **Phase 5 (US3)**: Footer reminder - awareness reinforced

After US1 + US2, feature is actually usable and can be deployed if needed (MVP point).
US3 is quick follow-up for completeness.

### Incremental Delivery

```
Day 1 Afternoon: Phase 1 Setup + Phase 2 Foundational (1 hour)
Day 2 Morning: Phase 3 US1 Banner (1-1.5 hours)
Day 2 Afternoon: Phase 4 US2 Modal (1.5-2 hours)
Day 3 Morning: Phase 5 US3 Footer (0.5 hour)
Day 3 Afternoon: Phase 6 Testing & Validation (2-3 hours)

Total: ~8-9 hours of development | ~1-1.5 days of calendar time
```

### Validation Checkpoints

- ✅ **After Phase 2**: Infrastructure ready (don't proceed until GA4 confirmed working)
- ✅ **After Phase 3**: US1 testable (banner visible on all screen sizes)
- ✅ **After Phase 4**: US2 testable (modal works, GA4 events firing)
- ✅ **After Phase 5**: US3 testable (footer reminder present)
- ✅ **After Phase 6**: Production ready (all tests pass, accessibility compliant)

---

## Acceptance Criteria by Task Group

### Setup Phase (T001-T003)
- [ ] GA4 gtag() global confirmed in window
- [ ] CONSTITUTION.md pallete visible in color reference
- [ ] Hero section location identified in index.html

### Foundational Phase (T004-T008)
- [ ] CSS variables created for banner/modal colors
- [ ] HTML structure placeholders added (empty, ready for content)
- [ ] JavaScript namespace initialized
- [ ] GA4 setup validated - no errors in console

### User Story 1 (T009-T014)
- [ ] Banner HTML added after hero section
- [ ] Banner visible on page load (no scroll needed)
- [ ] Banner responsive: 320px mobile, 768px tablet, 1024px desktop
- [ ] Banner text readable, no truncation
- [ ] Banner keyboard accessible (Tab focus visible)
- [ ] Banner hover/active states provide visual feedback

### User Story 2 (T015-T023)
- [ ] Modal HTML structure in place
- [ ] Modal opens on banner click
- [ ] Modal closes on: close button, X button, ESC key, overlay click
- [ ] Code MEUMERECIDO displayed in 48px+ font
- [ ] Copy button copies code to clipboard
- [ ] GA4 `click_discount_code` event fired on banner click
- [ ] GA4 `copy_code_success` event fired on copy button click
- [ ] Modal keyboard accessible, focus trap functional
- [ ] Modal responsive on mobile (no overflow)

### User Story 3 (T024-T027)
- [ ] Footer reminder text added
- [ ] Text includes "MEUMERECIDO" code
- [ ] Text indicates first purchase applicability
- [ ] Footer reminder styled, not truncated
- [ ] Footer reminder responsive on all sizes

### Testing & Validation (T028-T047)
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility ≥ 90
- [ ] Lighthouse SEO ≥ 95
- [ ] Page load time < 3 seconds
- [ ] Modal open/close < 100ms
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)
- [ ] Mobile tested (320px, 375px, 425px widths)
- [ ] WCAG AA accessibility verified
- [ ] Screen reader tested
- [ ] GA4 events validated in dashboard
- [ ] All git commits follow convention
- [ ] No console errors on any page state

---

## Common Pitfalls & Mitigations

| Pitfall | Risk | Mitigation |
|---------|------|-----------|
| GA4 gtag() not loaded on page | Event tracking fails | T001 validates; add fallback check in T022 |
| Modal z-index conflicts | Modal hidden behind other elements | Document z-index: 9999 in CSS comment; test overlay |
| Clipboard API not available | Copy button breaks | T021 includes fallback input field |
| Mobile modal overflows | CTA buttons cut off | T019 limits modal width to 90vw; test 320px screens |
| Color contrast insufficient | WCAG AA fails | T018 uses color palette; T033 validates contrast |
| Focus trap not working | Keyboard only users stuck in modal | T023 implements Tab trap; T032 keyboard tests |
| Event duplicates in GA4 | Inflated metrics | T022 uses single gtag call per interaction |

---

## Notes & Decision Log

- **No unit tests**: Frontend feature, UI-driven. Manual testing sufficient. (Georgia4 tracking validated via dashboard)
- **No database**: Data is transient (modal state only), persisted in memory
- **GA4 only**: No custom pixel required (integration point established in T008)
- **Bootstrap not used**: Vanilla CSS per CONSTITUTION.md preference (no framework dependencies)
- **Mobile-first approach**: All styles start at 320px, expand via media queries (T013, T027)
- **Accessibility first**: WCAG AA compliance built in from T014, T023, T033

---

## References & Links

- 📄 **Spec**: [spec.md](./spec.md) - Requirements & acceptance scenarios
- 📋 **Plan**: [plan.md](./plan.md) - Architecture & phases
- 📜 **Constitution**: [CONSTITUTION.md](../../CONSTITUTION.md) - Design principles & patterns
- 🎨 **Color Reference**: [CONSTITUTION.md - Design Patterns](../../CONSTITUTION.md#🎨-padrões-de-design)
- 🔤 **Typography**: [CONSTITUTION.md - Typography](../../CONSTITUTION.md#tipografia)
- ✅ **Lighthouse**: [https://web.dev/measure/](https://web.dev/measure/)
- 🎯 **WCAG 2.1**: [https://www.w3.org/WAI/WCAG21/quickref/](https://www.w3.org/WAI/WCAG21/quickref/)

---

## Estimated Effort Summary

```
Phase 1: Setup              0.25 hours (15 min)
Phase 2: Foundational       0.5 hours (30 min)
Phase 3: User Story 1       1 hour
Phase 4: User Story 2       1.5 hours
Phase 5: User Story 3       0.5 hours
Phase 6: Testing & Polish   2.5 hours
─────────────────────────────────────
TOTAL                       6.25 - 9 hours
CALENDAR TIME              1 - 1.5 days*

*Assumes 1 developer, 6-8 hour work sessions
With 2 devs working in parallel: ~1 day
```

---

**Status**: ✅ TASKS READY FOR IMPLEMENTATION
**Next Step**: Begin Phase 1 Setup (T001-T003)
**Date Generated**: 21 de fevereiro de 2026
**Branch**: `001-first-purchase-discount`
