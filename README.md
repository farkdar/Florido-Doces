# Florido Doces

Site institucional da confeitaria **Florido Doces**, desenvolvido em HTML, CSS e JavaScript utilizando Bootstrap 5 como base visual.  
O projeto foi adaptado para representar a identidade visual da marca com foco em:

- apresentação de produtos;
- divulgação de combos promocionais;
- contato rápido via WhatsApp;
- experiência responsiva para dispositivos móveis;
- visual sofisticado e acolhedor.

---

# 📁 Estrutura Principal do Projeto

```bash
FloridoDoces/
│
├── index.html              # Página inicial
├── about.html              # Página sobre a empresa
├── menu.html               # Cardápio e preços
├── team.html               # Página das chefes
├── contact.html            # Página de contato
├── footer.html             # Rodapé reutilizável
│
├── css/
│   ├── bootstrap.min.css
│   └── style.css           # Estilos personalizados do projeto
│
├── js/
│   ├── main.js             # Scripts principais do template
│   └── menu-render.js      # Renderização dinâmica do cardápio
│
├── img/
│   ├── hero.jpg
│   ├── offer.jpg
│   ├── bg.jpg
│   ├── teamm-1.png
│   ├── teamm-2.png
│   ├── logo-florido.png
│   └── ...
│
├── lib/
│   ├── owlcarousel/
│   ├── easing/
│   ├── waypoints/
│   └── counterup/
│
└── README.md
```

---

# 🎨 Identidade Visual

A paleta principal utilizada no projeto:

| Uso | Cor |
|---|---|
| Primária | `#FB9483` |
| Secundária | `#F2E9D4` |
| Destaques | `#F3B5A6` |
| Escuro | `#A56E44` |
| Fundo Claro | `#FBFAF6` |

---

# 🛠 Tecnologias Utilizadas

- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- Owl Carousel
- Bootstrap Icons
- Font Awesome

---

# 📱 Responsividade

O site foi desenvolvido para funcionar em:

- celulares;
- tablets;
- notebooks;
- desktops.

Alguns elementos possuem comportamento específico para mobile:
- menu colapsável;
- logo adaptada para telas menores;
- reorganização automática dos cards;
- imagens responsivas.

---

# 📞 Contato via WhatsApp

O formulário de contato foi adaptado para funcionar em site estático utilizando envio direto para WhatsApp.

Número utilizado:

```txt
(44) 9 9995-4447
```

Formato do link:

```html
https://wa.me/5544999954447
```

---

# 🧩 Estrutura das Seções da Home

## Hero Header
Apresentação principal da marca.

## Sobre Nós
Descrição da confeitaria e diferenciais.

## Cardápio
Produtos organizados em categorias.

## Serviços
Cards promocionais para:
- festas;
- casamentos;
- personalizados.

## Combos Especiais
Área promocional com CTA para WhatsApp.

## Equipe
Apresentação das chefes da confeitaria.

## Footer
Rodapé reutilizável com:
- contato;
- redes sociais;
- links rápidos.

---

# 📂 Componentes Reutilizáveis

## Footer Dinâmico

O rodapé é carregado automaticamente:

```javascript
fetch("footer.html")
```

Isso evita repetição de código em várias páginas.

---

# 🧠 Organização Recomendada

## Imagens
Todas as imagens devem ficar em:

```bash
/img
```

## Estilos
Customizações devem ser feitas em:

```bash
/css/style.css
```

## Scripts
Scripts personalizados:

```bash
/js
```

---

# 🚀 Melhorias Futuras

Possíveis melhorias que pretendo tentar implementar

- integração com Instagram API;
- sistema de orçamento automático;
- painel administrativo;
- catálogo dinâmico;
- animações suaves;
- galeria de fotos;
- SEO avançado;
- versão PWA;
- integração com pedidos online.

---

# 📌 Observações

- O projeto utiliza Bootstrap 5.
- O layout foi adaptado de template HTML base.
- Algumas bibliotecas externas dependem de internet/CDN.
- O site pode ser hospedado em:
  - Netlify;
  - Vercel;
  - GitHub Pages;
  - Hostinger;
  - cPanel tradicional.

---

# 👩‍🍳 Florido Doces

Transformando momentos especiais em experiências ainda mais doces.
