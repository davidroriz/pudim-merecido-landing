# 🍮 Pudim Merecido - Landing Page

Landing page profissional para venda de pudim artesanal. Site moderno, responsivo e otimizado para conversão.

## 🚀 Demo

Acesse: [https://seu-usuario.github.io/pudim-merecido-landing](https://seu-usuario.github.io/pudim-merecido-landing)

## ✨ Funcionalidades

- 🎨 Design moderno e atrativo
- 📱 Totalmente responsivo (mobile-first)
- ⚡ Animações suaves ao scroll
- 🛒 Múltiplos CTAs para conversão (WhatsApp e E-mail)
- 💬 Botão flutuante do WhatsApp
- ⭐ Seção de depoimentos de clientes
- 🖼️ Galeria de imagens do produto
- 🎯 SEO otimizado

## 🛠️ Tecnologias

- HTML5
- CSS3 (Flexbox, Grid, Animações)
- JavaScript Vanilla (ES6+)
- Google Fonts (Poppins & Playfair Display)

## 📁 Estrutura do Projeto

```
pudim-merecido-landing/
├── index.html          # Página principal
├── style.css          # Estilos e responsividade
├── script.js          # Interatividade e animações
├── context.md         # Documentação de arquitetura
├── README.md          # Este arquivo
└── images/            # Imagens do produto
```

## 🎨 Seções da Landing Page

1. **Header** - Logo e menu de navegação
2. **Hero** - Seção principal com CTA destacado
3. **Produto** - Descrição e características principais
4. **Benefícios** - Diferenciais do pudim artesanal
5. **Galeria** - Fotos do produto
6. **Depoimentos** - Avaliações de clientes (5 estrelas)
7. **CTA Final** - Preço e botões de compra
8. **Footer** - Contatos e redes sociais

## 🚀 Como Usar

### Visualizar localmente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/pudim-merecido-landing.git
cd pudim-merecido-landing
```

2. Inicie um servidor local:
```bash
# Opção 1: Python
python3 -m http.server 8000

# Opção 2: Node.js (npx)
npx serve

# Opção 3: VS Code Live Server
# Instale a extensão "Live Server" e clique em "Go Live"
```

3. Acesse no navegador:
```
http://localhost:8000
```

### Publicar no GitHub Pages

1. Faça push do código para o GitHub
2. Vá em **Settings** → **Pages**
3. Em **Source**, selecione:
   - Branch: `main` (ou `master`)
   - Folder: `/ (root)`
4. Clique em **Save**
5. Aguarde alguns minutos e acesse o site em:
   ```
   https://seu-usuario.github.io/pudim-merecido-landing
   ```

## ⚙️ Personalização

### Atualizar informações de contato

Edite os seguintes elementos no [index.html](index.html):

- **WhatsApp**: `5511999999999` (substitua pelo número real)
- **E-mail**: `contato@pudimmerecido.com`
- **Redes sociais**: Links no footer

### Adicionar imagens reais

1. Adicione suas fotos na pasta `images/`
2. Substitua os placeholders 🍮 pelas tags `<img>`:

```html
<!-- Antes -->
<div class="pudim-placeholder">🍮</div>

<!-- Depois -->
<img src="images/pudim-01.jpg" alt="Pudim Merecido">
```

### Alterar cores

Modifique as variáveis CSS no [style.css](style.css):

```css
:root {
    --primary-color: #FFB800;    /* Amarelo principal */
    --secondary-color: #FF6B00;  /* Laranja secundário */
    --dark-color: #2C1810;       /* Marrom escuro */
    --light-color: #FFF5E6;      /* Bege claro */
}
```

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.

## 👨‍💻 Autor

Desenvolvido com ❤️ para venda de pudins artesanais

---

**⭐ Se este projeto te ajudou, deixe uma estrela no repositório!**
