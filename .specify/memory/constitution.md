# Pudim Merecido Landing Page Constitution

## Core Principles

### I. User-Centric Conversion
Every design and technical decision MUST prioritize user conversion (purchase, inquiry, engagement). Navigation, copy, imagery, and interactions must guide visitors toward clear calls-to-action. Performance and clarity directly impact conversion rates; ambiguity is an enemy.

### II. Mobile-First Responsiveness
Design and development MUST start with mobile (320px+). Mobile is the primary experience; desktop enhancements follow. All features MUST work flawlessly on small screens before desktop refinement. JavaScript enhancements are progressive—the page remains functional without them.

### III. Performance & Accessibility
Page load time MUST be <3s on 4G connections. Images MUST be optimized (WebP with fallbacks, lazy-loaded). Semantic HTML is mandatory; all content MUST be accessible without JavaScript (WCAG 2.1 AA standard). Alt text on images, proper heading hierarchy, sufficient color contrast are non-negotiable.

### IV. Design Consistency
Visual language is limited: maximum 2 fonts, consistent color palette aligned to product identity, unified component library (cards, buttons, sections follow a single pattern). No "just this once" exceptions; consistency builds brand trust and reduces maintenance.

### V. Simplicity & Maintainability
Vanilla JavaScript only; no framework dependencies. HTML structure MUST be semantic and self-documenting. CSS is organized by section/component. No premature optimization; YAGNI (You Aren't Gonna Need It). Code MUST be understood by new contributors in <30 minutes.

## Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Hosting**: GitHub Pages, Netlify, or Vercel (free tier acceptable)
- **Images**: Optimized formats (WebP primary, JPEG fallback); compression tools required
- **Analytics**: Google Analytics 4, Meta Pixel
- **Integration**: WhatsApp Business API, Mercado Pago or PagSeguro (if payment required)

## Development Workflow

1. **Feature branches** named `###-feature-name` (e.g., `001-hero-section`)
2. **Before merge**: Code review confirms all principles upheld; mobile preview tested; performance check (<3s load)
3. **Accessibility check**: Lighthouse score ≥90 (mobile), no contrast errors, alt text complete
4. **Deployment**: Merge to main triggers automatic deployment to hosting platform; no manual steps

## Governance

This constitution supersedes all ad-hoc decisions. All PRs and reviews MUST verify compliance with the five core principles before acceptance. If a feature conflicts with a principle, it MUST be redesigned—not exempted. Complexity introduced without clear user value MUST be justified in the PR description with explicit principle alignment.

Amendments to this constitution require:
- Written proposal documenting the principle or section affected
- Justification with concrete examples
- Version bump (semantic versioning)
- Update to affected templates in `.specify/templates/`

**Version**: 1.0.0 | **Ratified**: 2026-02-07 | **Last Amended**: 2026-02-07
