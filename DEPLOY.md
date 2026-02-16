# 🚀 Guia de Deploy - Pudim Merecido

Este guia contém o passo a passo completo para publicar o site com domínio customizado.

## 📋 Checklist Pré-Deploy

- [ ] Domínio registrado no Registro.br: **pudimmerecido.com.br** ✅
- [ ] Arquivo CNAME criado com `www.pudimmerecido.com.br` ✅
- [ ] Imagens reais adicionadas (opcional, mas recomendado)
- [ ] Números de WhatsApp atualizados
- [ ] E-mails de contato atualizados
- [ ] Links de redes sociais configurados

---

## 📦 Passo 1: Publicar no GitHub

### 1.1 Criar repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Nome do repositório: `pudim-merecido-landing`
3. Escolha **Public** (necessário para GitHub Pages grátis)
4. **Não** inicialize com README (já temos um)
5. Clique em **Create repository**

### 1.2 Fazer push do código

```bash
# No terminal, dentro da pasta do projeto
cd /Users/davidfrn/Documents/projetos/pudim-merecido-landing

# Inicializar git (se ainda não fez)
git init

# Adicionar todos os arquivos
git add .

# Criar commit
git commit -m "feat: landing page completa do Pudim Merecido"

# Adicionar remote (substitua SEU-USUARIO pelo seu username)
git remote add origin https://github.com/SEU-USUARIO/pudim-merecido-landing.git

# Criar branch main (se necessário)
git branch -M main

# Enviar para o GitHub
git push -u origin main
```

---

## 🌐 Passo 2: Configurar DNS no Registro.br

### 2.1 Acessar painel DNS

1. Acesse: [registro.br](https://registro.br)
2. Login com sua conta
3. Clique em **"Meus domínios"**
4. Selecione **pudimmerecido.com.br**
5. Clique em **"Editar zona DNS"** ou **"DNS"**

### 2.2 Adicionar registros DNS

#### Registro CNAME (para www)

```
Tipo:   CNAME
Host:   www
Aponta para: SEU-USUARIO.github.io.
TTL:    3600
```

> **Nota:** Substitua `SEU-USUARIO` pelo seu username do GitHub
> **Importante:** Alguns painéis exigem o ponto final (.)

#### Registros A (para domínio raiz)

Adicione **4 registros** do tipo A:

```
Tipo: A
Host: @ (ou deixe vazio)
Aponta para: 185.199.108.153
TTL: 3600
```

```
Tipo: A
Host: @
Aponta para: 185.199.109.153
TTL: 3600
```

```
Tipo: A
Host: @
Aponta para: 185.199.110.153
TTL: 3600
```

```
Tipo: A
Host: @
Aponta para: 185.199.111.153
TTL: 3600
```

### 2.3 Salvar alterações

- Clique em **"Salvar"** ou **"Aplicar mudanças"**
- Anote o horário (para calcular tempo de propagação)

⏱️ **Tempo de propagação:** 15 minutos a 48 horas (geralmente 1-2 horas)

---

## ⚙️ Passo 3: Configurar GitHub Pages

### 3.1 Ativar GitHub Pages

1. No seu repositório, vá em **Settings** (⚙️)
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Clique em **Save**

### 3.2 Adicionar domínio customizado

1. Ainda na página **Pages**
2. Em **Custom domain**, digite: `www.pudimmerecido.com.br`
3. Clique em **Save**
4. Aguarde aparecer a mensagem: ✅ **"DNS check successful"**

> Se aparecer erro, verifique se já passou tempo suficiente para propagação DNS

### 3.3 Ativar HTTPS

1. Após o DNS check passar
2. Marque a opção: ☑️ **"Enforce HTTPS"**
3. Aguarde alguns minutos para o certificado SSL ser emitido

---

## ✅ Passo 4: Verificar e Testar

### 4.1 Verificar propagação DNS

**Opção 1: Terminal**
```bash
nslookup www.pudimmerecido.com.br
# Deve retornar: SEU-USUARIO.github.io

nslookup pudimmerecido.com.br
# Deve retornar os IPs do GitHub (185.199.108.153, etc)
```

**Opção 2: Online**
- Acesse: [whatsmydns.net](https://www.whatsmydns.net/)
- Digite: `www.pudimmerecido.com.br`
- Verifique se os servidores do Brasil já propagaram

### 4.2 Testar URLs

Teste se todos os URLs funcionam:

- ✅ https://www.pudimmerecido.com.br
- ✅ http://www.pudimmerecido.com.br (deve redirecionar para https)
- ✅ https://pudimmerecido.com.br (deve redirecionar para www)
- ✅ http://pudimmerecido.com.br (deve redirecionar para https://www)

### 4.3 Verificar certificado SSL

1. Acesse: https://www.pudimmerecido.com.br
2. Clique no cadeado 🔒 na barra de endereços
3. Verifique se o certificado é válido

---

## 🔧 Solução de Problemas

### Problema: "DNS check failed"

**Soluções:**
1. Aguarde mais tempo (pode levar até 48h)
2. Verifique se os registros DNS estão corretos
3. Confirme que usou `SEU-USUARIO.github.io` (com seu username real)
4. Tente adicionar um ponto final: `SEU-USUARIO.github.io.`

### Problema: Site não carrega

**Soluções:**
1. Limpe o cache do navegador (Ctrl+Shift+R ou Cmd+Shift+R)
2. Tente em modo anônimo/privado
3. Tente outro navegador
4. Verifique se o GitHub Pages está ativo em Settings → Pages

### Problema: Certificado SSL não funciona

**Soluções:**
1. Aguarde mais tempo (pode levar até 1 hora)
2. Desmarque e marque novamente "Enforce HTTPS"
3. Verifique se o DNS check passou

### Problema: Mudanças não aparecem

**Soluções:**
```bash
# Faça push das alterações
git add .
git commit -m "update: suas mudanças"
git push

# Aguarde 1-2 minutos para o GitHub Pages reconstruir
# Limpe o cache do navegador
```

---

## 📝 Manutenção e Atualizações

### Fazer alterações no site

```bash
# 1. Edite os arquivos necessários
# 2. Commit e push
git add .
git commit -m "update: descrição das mudanças"
git push

# 3. Aguarde 1-2 minutos
# 4. Acesse www.pudimmerecido.com.br para ver as mudanças
```

### Alterar domínio no futuro

1. Edite o arquivo `CNAME` com o novo domínio
2. Configure o novo DNS
3. Atualize em Settings → Pages → Custom domain

---

## 📞 Suporte

Se tiver problemas:

1. **GitHub Pages Status:** https://www.githubstatus.com/
2. **Documentação oficial:** https://docs.github.com/pt/pages
3. **Suporte Registro.br:** https://registro.br/suporte/

---

## 🎉 Pronto!

Seu site está no ar em: **https://www.pudimmerecido.com.br**

Compartilhe nas redes sociais e boas vendas! 🍮
