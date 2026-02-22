# 📜 Constituição do Projeto - Pudim Merecido Landing Page

## 🎯 Missão

Criar uma landing page de alta conversão que apresente o Pudim Merecido como um produto premium, artesanal e desejável, capaz de transformar visitantes em clientes através de uma experiência digital excepcional.

## 💎 Visão

Ser a referência em landing pages de alimentos artesanais, demonstrando que simplicidade, elegância e foco em conversão podem existir harmoniosamente.

## 🌟 Valores Fundamentais

### 1. **Clareza e Simplicidade**
- Cada elemento deve ter um propósito claro
- Evitar poluição visual e complexidade desnecessária
- Uma ideia por seção, uma ação por CTA

### 2. **Qualidade Premium**
- Design refinado que reflita a qualidade artesanal do produto
- Imagens em alta resolução
- Tipografia elegante e legível
- Espaçamento generoso (white space)

### 3. **Foco em Conversão**
- Todo design serve ao objetivo de vender
- CTAs destacados e estrategicamente posicionados
- Jornada do usuário otimizada (TOFU → MOFU → BOFU)
- Confiança antes de tudo (depoimentos, qualidade, clareza)

### 4. **Experiência do Usuário (UX)**
- Mobile-first: 60%+ do tráfego vem de dispositivos móveis
- Velocidade: Carregamento em menos de 3 segundos
- Acessibilidade: Utilizável por todos, sem exceções
- Intuitivo: O usuário não deve pensar, apenas agir

### 5. **Sustentabilidade Digital**
- Código limpo e bem documentado
- Dependências mínimas (JavaScript vanilla preferido)
- Hospedagem gratuita e escalável (GitHub Pages)
- Zero débito técnico

---

## ⚙️ Princípios Técnicos

### Arquitetura
```
landing-page/
├── index.html           (Semântico HTML5)
├── style.css           (Um único arquivo CSS)
├── script.js           (JavaScript vanilla, ES6+)
├── CONSTITUTION.md     (Este arquivo)
├── README.md           (Documentação do projeto)
├── DEPLOY.md           (Guia de publicação)
├── context.md          (Arquitetura técnica)
│
└── images/
    └── PUDIM/          (Assets da marca)
```

### Princípios de Código

#### HTML
- ✅ Semântico: Usar tags corretas (`<header>`, `<section>`, `<article>`, `<footer>`)
- ✅ Acessível: Atributos alt em imagens, labels em formulários
- ✅ SEO-friendly: Meta tags, estrutura correta de headings (h1 → h6)
- ✅ Performance: Lazy loading em imagens, preconnect em fonts
- ❌ Não usar `<div>` para tudo
- ❌ Não misturar lógica na markup

#### CSS
- ✅ Mobile-first: Começar pelo mobile, depois adicionar media queries
- ✅ BEM (Block Element Modifier) para nomenclatura: `.hero__title--primary`
- ✅ Variáveis CSS: `--color-primary`, `--spacing-md`
- ✅ Flexbox/Grid: Preferir para layout
- ✅ Evitar !important (99% dos casos)
- ❌ Não usar classes genéricas como `.container-div`
- ❌ Não escrever CSS no HTML

#### JavaScript
- ✅ Vanilla ES6+: Sem frameworks pesados (jQuery é overkill)
- ✅ Funções puras: Evitar side effects
- ✅ Nomes descritivos: `smoothScrollToSection()` não `go()`
- ✅ Comentários explicativos em lógica complexa
- ✅ Event delegation para performance
- ❌ Não usar bibliotecas desnecessárias
- ❌ Não poluir o escopo global (`window.myvariable`)

---

## 🎨 Padrões de Design

### Paleta de Cores
```css
--color-primary: #8B4513      /* Marrom (caramelo) */
--color-secondary: #D2691E    /* Marrom mais claro */
--color-accent: #FFB347       /* Dourado (brilho) */
--color-text-dark: #2C1810    /* Marrom escuro (texto) */
--color-text-light: #FFFFFF   /* Branco (texto em escuro) */
--color-background: #FFF8F0   /* Bege claro (fundo) */
--color-success: #27AE60      /* Verde (validação) */
--color-error: #E74C3C        /* Vermelho (erro) */
```

### Tipografia
- **Títulos (H1-H3)**: Playpen Sans Bold (700) - Moderna e amigável
- **Subtítulos (H4-H5)**: Playfair Display Bold - Elegância
- **Corpo/Texto**: Telegraf Regular (400) - Legibilidade
- **Tamanhos base**: 16px mobile, 18px desktop

### Espaçamento (8px grid)
```css
--spacing-xs: 8px
--spacing-sm: 16px
--spacing-md: 24px
--spacing-lg: 32px
--spacing-xl: 48px
--spacing-2xl: 64px
```

### Bordas e Sombras
```css
--border-radius: 8px          /* Sutileza, não agressivo */
--shadow-sm: 0 2px 4px rgba(0,0,0,0.1)
--shadow-md: 0 4px 8px rgba(0,0,0,0.15)
--shadow-lg: 0 8px 16px rgba(0,0,0,0.2)
```

---

## 📱 Responsividade - Breakpoints

```css
/* Mobile-first approach */
/* Base: 320px - 640px */

@media (min-width: 641px) {
  /* Tablet: 641px - 1024px */
}

@media (min-width: 1025px) {
  /* Desktop: 1025px+ */
}
```

---

## 🎯 Estrutura de Seções Obrigatórias

### 1. **Header** ✅
- Logo + Nome da marca
- Menu de navegação (máx. 3 links)
- Sticky ou flutuante no scroll
- CTA secundário (ex: WhatsApp)

### 2. **Hero Section** ✅
- Headline impactante (máx. 10 palavras)
- Subheadline explicativa (máx. 20 palavras)
- CTA primária em destaque
- Imagem/visual do produto
- Clearness about the value proposition

### 3. **Problema & Solução**
- O que é o problema? (por que pudim artesanal?)
- Como o Pudim Merecido resolve?
- Benefícios concretos (não características genéricas)

### 4. **Social Proof** ✅
- Depoimentos reais (com foto, nome, rating)
- Número de clientes satisfeitos
- Prêmios ou menções (se houver)
- Reviews (Google, redes sociais)

### 5. **Features/Benefícios** ✅
- Máx. 4-5 características principais
- Ícones visuais + texto curto
- Alinhado ao problema do cliente

### 6. **Midia/Galeria** ✅
- Imagens do produto em diferentes ângulos
- Qualidade máxima (720p+)
- Alt text descritivo
- Lazy loading implementado

### 7. **Call-to-Action Final** ✅
- Preço claro e destacado
- Botão primário em cor de contraste
- Garantia ou diferencial
- Urgência (estoque, oferta por tempo limitado)

### 8. **FAQ (Opcional mas Recomendado)**
- Perguntas comuns respondidas brevemente
- Accordion para economizar espaço
- Boas para SEO (rich snippets)

### 9. **Footer**
- Links de contato (WhatsApp, email)
- Endereço/localização
- Links legais (Privacidade, Termos)
- Redes sociais

---

## 🚀 Performance

### Métricas Alvo (Lighthouse)
- 📊 Desempenho: ≥ 90
- 🎨 Acessibilidade: ≥ 90
- 🔍 SEO: ≥ 95
- ✅ Boas Práticas: ≥ 90

### Otimizações Obrigatórias
- ✅ Imagens comprimidas (WebP com fallback)
- ✅ CSS crítico inline no header (< 15KB)
- ✅ JavaScript deferido ou assincrono
- ✅ Font display: swap (não bloqueia renderização)
- ✅ Preload/Prefetch estratégico
- ✅ Cache bursting para assets

### Tamanho Final da Página
- Alvo: < 2MB total
- HTML: < 50KB
- CSS: < 30KB
- JS: < 50KB
- Imagens: < 1.8MB (otimizadas)

---

## ♿ Acessibilidade

### Checklist WCAG 2.1 AA
- ✅ Contraste mínimo: 4.5:1 (texto pequeno), 3:1 (texto grande)
- ✅ Todas as imagens com alt text descritivo
- ✅ Formulários com labels associadas
- ✅ Navegação por teclado (Tab, Enter)
- ✅ Sem captchas que bloqueiem usuários
- ✅ Escala de até 200% sem quebra de layout
- ✅ Motion: Respeitar `prefers-reduced-motion`
- ✅ Cores não como único diferenciador

### Implementação
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🔍 SEO

### On-Page
- ✅ H1 único, descritivo, com keyword principal
- ✅ Meta description (120-160 chars)
- ✅ URL amigável (pudimmerecido.com.br, não pudim-merecido.com.br/page?id=1)
- ✅ Structured data (JSON-LD): Product, Review, Organization
- ✅ Open Graph tags (Facebook sharing)
- ✅ Twitter Card tags
- ✅ Mobile-friendly (viewport, responsive)

### Off-Page
- ✅ Domínio próprio (não subdomain)
- ✅ HTTPS (obrigatório)
- ✅ Google Analytics + Search Console
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Backlinks estratégicos

### Conteúdo
- ✅ Atualizar blog/notícias mensalmente
- ✅ Incluir long-tail keywords naturalmente
- ✅ Responder perguntas comuns (FAQ)
- ✅ Usar islas de conteúdo (#produto, #beneficios)

---

## 🛡️ Segurança

### Implementação Obrigatória
- ✅ HTTPS ativa (certificado Let's Encrypt gratuito no GitHub Pages)
- ✅ CSP headers (Content Security Policy)
- ✅ X-Frame-Options: DENY (previne clickjacking)
- ✅ X-Content-Type-Options: nosniff
- ✅ Sanitizar inputs de formulário
- ✅ Validar dados no servidor (mesmo com client-side validation)
- ✅ Sem secrets (API keys, tokens) no código

### Dados de Usuário
- ✅ LGPD compliant (consentimento para coleta de dados)
- ✅ Política de Privacidade clara e acessível
- ✅ Termos de Serviço atualizados
- ✅ Não rastrear sem consentimento

---

## 💬 CTA (Call-to-Action)

### Estratégia
- ✅ **Primário**: Comprar/Pedido (cor de contraste máximo)
- ✅ **Secundário**: WhatsApp direto (urgência, chat)
- ✅ **Terciário**: Email/Formulário (lead generation)
- ✅ **Navigation**: Scroll suave para seções

### Colocação
1. **Hero**: CTA primária em destaque
2. **Meio da página**: CTA secundária (WhatsApp flutuante)
3. **Final**: CTA primária + links alternativos
4. **Mobile**: Botão flutuante do WhatsApp (sempre visível)

### Mensagens
- ✅ Ação clara: "Comprar Agora", não "Clique Aqui"
- ✅ Urgência: "Pedir Agora", "Aproveite a Promoção"
- ✅ Confiança: "Garantido", "Seguro", "Sem compromisso"
- ✅ Benefício: "Ganhe um Presente", "Frete Grátis"

---

## 📊 Conversão

### Funil de Conversão
```
1. TOFU (Top of Funnel)
   └─ Atrair visitantes com Headline + Hero

2. MOFU (Middle of Funnel)
   └─ Educaçãocom benefícios e social proof

3. BOFU (Bottom of Funnel)
   └─ Fechamento com preço, CTA, garantia
```

### Métrica de Sucesso
- Taxa de clique para WhatsApp: ≥ 3%
- Taxa de clique para compra: ≥ 2%
- Tempo médio na página: ≥ 1:30
- Scroll depth: ≥ 70%

---

## 🔄 Versionamento e Contribuição

### Branches
- `main`: Produção (sempre estável)
- `develop`: Desenvolvimento (integração)
- `feature/*`: Novas funcionalidades
- `hotfix/*`: Correções urgentes

### Commits
```
Padrão: <tipo>: <descrição curta>

feat:    Nova funcionalidade
fix:     Correção de bug
docs:    Documentação
style:   Formatação, whitespace
refactor: Refatoração sem mudança funcional
perf:    Melhoria de performance
chore:   Tarefas sem código (deps, config)
```

### Pull Requests
- ✅ Descrição clara do que foi alterado
- ✅ Screenshots para mudanças visuais
- ✅ Testar em mobile (≥ 1 breakpoint diferente)
- ✅ Validar Lighthouse antes de mesclar
- ✅ Rebase antes de merge (history limpo)

---

## 🎓 Princípios Específicos para Landing Pages

### 1. **Uma Conversão por Página**
- Foco em um objetivo único
- Remover distrações (links externos, menu complexo)
- Todo elemento apoia o CTA principal

### 2. **Contar uma História**
- Jornada lógica: Problema → Solução → Ação
- Narrativa emocional que ressoe com o cliente
- Linguagem em primeira/segunda pessoa ("você", "seu")

### 3. **Prova Social**
- Depoimentos com contexto (antes/depois)
- Números reais (X mil clientes, Y+ 5-stars)
- Logos de clientes ou mídia (se aplicável)
- Garantia com peso legal/financeiro

### 4. **Urgência e Escassez**
- "Apenas X unidades em estoque"
- "Oferta válida até dia XX"
- "Primeiros Y pedidos ganham Z"
- Usar com moderação (credibilidade acima de tudo)

### 5. **Página de Objeções**
- Antecipar e responder dúvidas
- "Demora quanto?" "Qual a forma de pagamento?"
- Remover fricção (frete grátis, troca fácil)

### 6. **Call-Out Boxes (Destaques)**
```
┌─────────────────────────────┐
│ ⚡ Frete Grátis Acima de R$50 │
└─────────────────────────────┘
```

### 7. **Tipografia Hierárquica**
- H1: Antes de qualquer coisa (SEO + impacto)
- H2: Seções principais
- H3: Subseções
- P: Corpo de texto (máx. 80 caracteres por linha)

### 8. **Cores com Significado**
- Verde: Ação, sucesso, compra segura
- Vermelho: Urgência, estoque limitado
- Azul: Confiança, informação
- Amarelo: Atenção, destaque
- Cinza: Suporte, informação secundária

### 9. **Imagens Estratégicas**
- Produto em alta qualidade (10x melhor que apenas descrição)
- Pessoas usando/desfrutando (aspiração)
- Passo-a-passo de ordering (reduz fricção)
- Não usar stock photos genéricas

### 10. **Teste AB Contínuo**
- Testar headlines (3-5 variações)
- Cores de botão (vermelho vs. verde)
- Posição de CTA (topo vs. meio vs. fundo)
- Texto do botão ("Comprar" vs. "Pedir Agora")
- Medir: CTR, conversão, tempo na página

---

## 📈 Métricas e KPIs

### Traffic
- Google Analytics (visitas, origem do tráfego)
- Taxa de rejeição (bounce rate)
- Tempo médio de sessão
- Páginas por sessão

### Engagement
- Scroll depth (até onde o usuário desce)
- Cliques em CTAs
- Cliques em links (menu, FAQ)
- Interações (hover, modal views)

### Conversion
- Taxa de clique para WhatsApp
- Taxa de clique para compra
- Taxa de complementação de formulário
- ROI (receita vs. custo de aquisição)

### Technical
- Lighthouse scores (Performance, SEO, Accessibility)
- Page load time (< 3s)
- First Contentful Paint (< 1.5s)
- Largest Contentful Paint (< 2.5s)

---

## 🚀 Roadmap Futuro

### Curto Prazo (1-3 meses)
- [ ] Galeria de fotos interativa (zoom, carousel)
- [ ] Mais depoimentos (video testimonials)
- [ ] Blog com 5 artigos sobre pudim/receitas
- [ ] Integração com Mercado Pago/PIX

### Médio Prazo (3-6 meses)
- [ ] Chatbot simples para perguntas frequentes
- [ ] Programa de referência (indique e ganhe)
- [ ] Portal do cliente (histórico de pedidos)
- [ ] Email marketing automation

### Longo Prazo (6-12 meses)
- [ ] Sistema de assinatura (entrega mensal)
- [ ] Virtual tour do processo de produção
- [ ] Configurador de sabores
- [ ] Aplicativo mobile

---

## 📋 Checklist de Lançamento

Antes de publicar qualquer versão:

- [ ] Todos os links funcionando (internos e externos)
- [ ] Imagens otimizadas e com alt text
- [ ] Sem erros de digitação ou português incorreto
- [ ] Mobile responsivo (testar em 3+ devices)
- [ ] Performance Lighthouse ≥ 90
- [ ] HTTPS ativo
- [ ] Google Analytics implementado
- [ ] Meta tags preenchidas
- [ ] WhatsApp com número correto
- [ ] Email de contato funcional
- [ ] Sem console errors (F12)
- [ ] Acessibilidade testada (tab navigation)
- [ ] PDF de Termos e Privacidade linkados

---

## 📞 Contato e Suporte

- **WhatsApp**: (61) 98137-5389
- **Email**: pudimmerecido@gmail.com.br
- **Instagram**: @pudimmerecido

---

## 📄 Histórico de Versões

| Versão | Data | Mudança |
|--------|------|---------|
| 1.0 | 21/02/2026 | Constituição inicial |
| ... | ... | ... |

---

**Última atualização**: 21 de fevereiro de 2026

*Esta Constituição é um documento vivo. Deve ser revisado regularmente e adaptado conforme o projeto evolui.*
