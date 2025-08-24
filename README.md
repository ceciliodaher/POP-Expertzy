# POPs Expertzy - Portal de Procedimentos Operacionais Padrão

![Expertzy Logo](https://img.shields.io/badge/Expertzy-Intelig%C3%AAncia%20Tribut%C3%A1ria-FF002D?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Em%20Produ%C3%A7%C3%A3o-success?style=for-the-badge)
![Version](https://img.shields.io/badge/Vers%C3%A3o-1.0.0-blue?style=for-the-badge)

> Portal web moderno e responsivo para acesso aos Procedimentos Operacionais Padrão da Expertzy Inteligência Tributária.

## 🎯 Visão Geral

Este projeto disponibiliza uma interface web elegante e funcional para consulta, visualização e download dos POPs da Expertzy. A plataforma foi desenvolvida seguindo rigorosamente as diretrizes da marca e oferece uma experiência otimizada para diferentes dispositivos.

### ✨ Funcionalidades Principais

- 📱 **Interface Responsiva**: Compatível com desktop, tablet e mobile
- 🔍 **Busca Inteligente**: Filtros por categoria e busca textual
- 📄 **Visualização Integrada**: Modal com renderização HTML dos POPs
- 💾 **Downloads Múltiplos**: Arquivos MD e PDF
- 🖨️ **Impressão Otimizada**: Layout específico para impressão
- 📧 **Contato Direto**: Links para WhatsApp e email
- 🚀 **Performance**: Carregamento rápido e otimizado

## 📋 POPs Disponíveis

### 📊 Tributário
- **Escrituração das Operações com Cartão Combustível** (v1.0)
- **Procedimentos de Impostos de Importação** (v1.0)

### 🚛 Transporte
- **Fluxos Transportadora** (v2.0)

### 💊 Farmacêutico
- **Remessa para Incineração de Produtos Farmacêuticos** (v1.0)

## 🚀 Acesso Rápido

### 🌐 Site Principal
**[Acessar POPs](https://ceciliodaher.github.io/POP-Expertzy/)**

### 🚀 Como Inicializar para Desenvolvimento

**IMPORTANTE**: Para evitar erros CORS, sempre use um servidor HTTP local:

```bash
# Navegue para o diretório do projeto
cd /caminho/para/POP-Expertzy

# Opção 1: Python (Recomendado)
python3 -m http.server 8000
# Acesse: http://localhost:8000

# Opção 2: Node.js
npx serve .
# Acesse: http://localhost:3000

# Opção 3: PHP
php -S localhost:8000
```

⚠️ **Não abra o arquivo `index.html` diretamente no navegador** - isso causará erros CORS.

### 📞 Contato e Suporte
- **📧 Email**: [contato@expertzy.com.br](mailto:contato@expertzy.com.br)
- **📱 WhatsApp**: [Clique aqui](https://wa.me/5511999999999)
- **🌍 Site Oficial**: [expertzy.com.br](https://expertzy.com.br)

## 🎨 Identidade Visual

### Paleta de Cores
- **🔴 Vermelho Expertzy**: `#FF002D`
- **🔵 Azul Naval**: `#091A30`
- **⚪ Branco**: `#FFFFFF`

### Tipografia
- **Principal**: Inter (fallback: gadeg thin)
- **Secundária**: Inter (fallback: BRFirma Medium)

## 💻 Tecnologias

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=flat-square&logo=markdown&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-181717?style=flat-square&logo=github&logoColor=white)

## 📱 Como Usar

### 1. **Navegação**
- Use o menu superior para navegar entre seções
- Clique em "POPs" para acessar todos os procedimentos

### 2. **Busca e Filtros**
- Digite palavras-chave no campo de busca
- Use o filtro de categorias para refinar resultados
- Os resultados são atualizados em tempo real

### 3. **Visualização**
- Clique em "Visualizar" em qualquer POP
- O documento abre em modal para leitura
- Use os botões do cabeçalho para ações específicas

### 4. **Downloads**
- **📄 MD**: Arquivo Markdown original
- **📑 PDF**: Versão formatada para impressão
- **🖨️ Imprimir**: Impressão direta otimizada

## 🔧 Para Desenvolvedores

### Estrutura do Projeto
```
├── index.html              # Página principal
├── assets/
│   ├── css/style.css      # Estilos principais
│   └── js/script.js       # Funcionalidades
├── pop/                   # Arquivos dos POPs
├── docs/                  # PDFs gerados
└── marca/                 # Assets da marca
```

### Adicionando Novos POPs

1. **Criar arquivo MD** na pasta `pop/`
2. **Atualizar `script.js`** no array `popsData`:

```javascript
{
    id: 'novo-pop',
    title: 'Título do POP',
    category: 'tributario', // ou 'transporte', 'farmaceutico'
    categoryLabel: 'Tributário',
    description: 'Descrição...',
    version: 'v1.0',
    date: '2025-08-24',
    filename: 'novo-pop.md'
}
```

### Desenvolvimento Local

```bash
# 1. Clone o repositório
git clone https://github.com/ceciliodaher/POP-Expertzy.git

# 2. Navegue para o diretório
cd POP-Expertzy

# 3. SEMPRE use um servidor HTTP local:
python3 -m http.server 8000
# Acesse: http://localhost:8000
```

## 🌟 Características Técnicas

### Performance
- ⚡ First Paint otimizado
- 📱 Mobile-first design
- 🔄 Lazy loading quando aplicável
- 💾 Cache inteligente

### Acessibilidade
- ♿ Navegação por teclado
- 🎯 Contraste WCAG 2.1
- 📖 Estrutura HTML semântica
- 🔊 Compatível com leitores de tela

### SEO
- 🏷️ Meta tags otimizadas
- 📍 Estrutura semântica
- 🔗 URLs amigáveis
- 📈 Sitemap automático

## 📞 Suporte e Feedback

### 🐛 Reportar Problemas
Se encontrar algum problema ou tiver sugestões:

1. **📧 Email**: [contato@expertzy.com.br](mailto:contato@expertzy.com.br)
2. **📱 WhatsApp**: Entre em contato direto
3. **🐞 GitHub Issues**: Para problemas técnicos específicos

### 💡 Solicitações de Melhorias
- Novos POPs
- Funcionalidades adicionais
- Melhorias na interface
- Integrações específicas

### 🤝 Como Contribuir
1. Fork este repositório
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Abra um Pull Request

## 📄 Licença e Direitos

**© 2025 Expertzy Inteligência Tributária**

Este projeto e todos os POPs são propriedade exclusiva da Expertzy Inteligência Tributária. O uso é restrito aos fins autorizados pela empresa.

### 🔒 Política de Privacidade
- Não coletamos dados pessoais dos usuários
- Não utilizamos cookies de rastreamento
- Logs básicos do servidor para manutenção

## 🏆 Créditos

### Desenvolvimento
- **🤖 Claude Code (Anthropic)**: Desenvolvimento completo da aplicação
- **🎨 Expertzy**: Diretrizes de marca e conteúdo dos POPs

### Tecnologias Open Source
- **🚀 GitHub Pages**: Hospedagem gratuita
- **📝 Markdown**: Formato de documentação
- **🌐 Web Standards**: HTML5, CSS3, ES6+

---

<div align="center">

**Desenvolvido com ❤️ para a Expertzy Inteligência Tributária**

[![Expertzy](https://img.shields.io/badge/Visite-expertzy.com.br-FF002D?style=for-the-badge&logo=safari&logoColor=white)](https://expertzy.com.br)
[![GitHub Pages](https://img.shields.io/badge/Acesse-POP--Expertzy-FF002D?style=for-the-badge&logo=github&logoColor=white)](https://ceciliodaher.github.io/POP-Expertzy/)

*Última atualização: 24 de agosto de 2025*

</div>