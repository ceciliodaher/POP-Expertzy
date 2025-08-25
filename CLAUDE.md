# CLAUDE.md - Projeto POPs Expertzy

## Visão Geral do Projeto

Este projeto foi desenvolvido para criar uma página web moderna e funcional para disponibilizar os Procedimentos Operacionais Padrão (POPs) da **Expertzy Inteligência Tributária**. A página foi projetada para ser integrada ao site oficial https://expertzy.com.br, seguindo rigorosamente as diretrizes de marca estabelecidas.

## Objetivos

- ✅ Criar interface moderna, elegante, simples e intuitiva
- ✅ Seguir fielmente as diretrizes da marca Expertzy
- ✅ Permitir visualização, download (MD/PDF) e impressão dos POPs
- ✅ Prever expansão futura com novos procedimentos
- ✅ Integrar canais de contato (WhatsApp e email)
- ✅ Disponibilizar via GitHub Pages

## Estrutura do Projeto

```
POP-Expertzy/
├── index.html                 # Página principal
├── assets/
│   ├── css/
│   │   └── style.css         # Estilos com paleta Expertzy
│   ├── js/
│   │   └── script.js         # Funcionalidades interativas
│   ├── fonts/                # Fontes corporativas (reservado)
│   └── images/               # Imagens e recursos visuais
├── pop/                      # Arquivos dos POPs organizados por categoria
│   ├── tributario/           # POPs da área tributária (7 arquivos)
│   │   ├── Ticket-Solucoes.md
│   │   ├── pop_ajustes_inventario.md
│   │   ├── pop_fomentar_padronizado.md
│   │   ├── pop_impostos_importacao_v1.md
│   │   ├── pop_ciap_goias.md
│   │   ├── pop_icms_st_energia_goias.md
│   │   └── pop_icms_st_frete.md
│   ├── transporte/           # POPs da área de transporte (1 arquivo)
│   │   └── transportes_fluxos_pop_v2.md
│   └── farmaceutico/         # POPs da área farmacêutica (1 arquivo)
│       └── procedimento-incineracao-farmaceutica.md
├── marca/                    # Diretrizes e assets da marca
│   ├── _Arquivos da Marca/
│   │   └── expertzy-brand-guidelines.md
│   └── Avatar/               # Logotipos e elementos visuais
├── CLAUDE.md                 # Este arquivo de documentação
└── README.md                 # Documentação do usuário
```

## Diretrizes de Marca Implementadas

### Paleta de Cores
- **Vermelho Expertzy**: #FF002D (elementos principais, botões, destaques)
- **Azul Naval**: #091A30 (textos, navegação, backgrounds secundários)
- **Branco**: #FFFFFF (backgrounds, contraste, áreas de respiro)

### Tipografia
- **Principal**: Inter (fallback para gadeg thin) - títulos e destaques
- **Secundária**: Inter (fallback para BRFirma Medium) - textos corridos

### Elementos Visuais
- Logo reservado no header superior esquerdo
- Rodapé corporativo obrigatório: "© 2025 Expertzy Inteligência Tributária"
- Botões seguindo hierarquia visual (primário/secundário)
- Gradientes sutis nos elementos de destaque

## Funcionalidades Implementadas

### 1. Interface Principal
- **Design responsivo** compatível com desktop, tablet e mobile
- **Header fixo** com navegação suave
- **Hero section** com estatísticas em tempo real
- **Grid de POPs** com cartões informativos
- **Sistema de busca e filtros** por categoria
- **Seção de contato** com links diretos

### 2. Sistema de POPs
- **Visualização modal** com renderização HTML dos arquivos MD
- **Download duplo**: arquivos MD originais e versão PDF via impressão
- **Impressão otimizada** com estilos específicos
- **Categorização automática**: Tributário, Transporte, Farmacêutico
- **Busca inteligente** por título, descrição e categoria

### 3. Gerenciamento de Conteúdo
- **Estrutura modular** para fácil adição de novos POPs
- **Dados centralizados** em JavaScript para manutenção simplificada
- **Conversão Markdown→HTML** em tempo real
- **Sistema de versionamento** integrado

### 4. Contato e Interação
- **Links diretos** para WhatsApp (placeholder) e email contato@expertzy.com.br
- **Chamadas para ação** claras para sugestões de melhoria
- **Formulários intuitivos** de contato

## POPs Catalogados

### Categoria Tributário (7 POPs)
1. **Escrituração das Operações com Cartão Combustível** (v1.0)
   - Ticket Soluções, ICMS, créditos fiscais
   
2. **Procedimentos de Impostos de Importação Consolidado** (v2.0)
   - II, IPI, PIS, COFINS, ICMS em comércio exterior
   - **ATUALIZADO**: Versão consolidada com novos procedimentos

3. **Ajustes de Inventário na Indústria Farmacêutica** (v2.0)
   - Diretrizes para execução de ajustes de inventário
   - Conformidade com NBC TG 16 e legislação fiscal
   - Medicamentos controlados e SNGPC
   - **ATUALIZADO**: Novos fluxogramas com Mermaid

4. **Apuração do ICMS - Programa FOMENTAR** (v2.0)
   - Procedimentos de apuração mensal para beneficiários FOMENTAR
   - Classificação por CFOPs e cálculo do financiamento
   - Preenchimento da EFD ICMS/IPI
   - **ATUALIZADO**: Novos fluxogramas com Mermaid

5. **Controle de Crédito de ICMS do Ativo Permanente (CIAP) - Goiás** (v1.0) **NOVO**
   - Metodologia completa para apropriação parcelada de créditos
   - Específico para Estado de Goiás
   - Inclui fluxogramas detalhados

6. **ICMS-ST sobre Energia Elétrica em Mercado Livre - Goiás** (v1.0) **NOVO**
   - Cálculo e registro do ICMS-ST para ACL
   - Procedimentos específicos para Goiás
   - Inclui fluxogramas detalhados

7. **ICMS-ST sobre Frete** (v1.0) **NOVO**
   - Metodologia padronizada para substituição tributária
   - Aplicável a transportes interestaduais
   - Inclui fluxogramas detalhados

### Categoria Transporte (1 POP)
8. **Fluxos Transportadora - Medicamentos** (v3.0)
   - Operações de transporte e armazenamento
   - Foco especial em medicamentos e farmacêuticos
   - **ATUALIZADO**: Versão 3.0 com novos fluxogramas Mermaid

### Categoria Farmacêutico (1 POP)
9. **Remessa para Incineração de Produtos Farmacêuticos** (v2.0)
   - Procedimentos fiscais e operacionais para descarte
   - **ATUALIZADO**: Versão 2.0 com novos procedimentos

## Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilos avançados com variáveis CSS e Flexbox/Grid
- **JavaScript ES6+** - Funcionalidades interativas e modernas
- **Markdown** - Formato padrão para documentação dos POPs
- **Mermaid.js** - Renderização de diagramas e fluxogramas
- **GitHub Pages** - Hospedagem gratuita e automática

## Como Adicionar Novos POPs

### 1. Criar o arquivo Markdown
```bash
# Criar novo POP na pasta apropriada por categoria
touch pop/tributario/novo-procedimento-tributario.md
touch pop/transporte/novo-procedimento-transporte.md
touch pop/farmaceutico/novo-procedimento-farmaceutico.md
```

### 2. Atualizar o JavaScript
```javascript
// Adicionar entrada no array popsData em assets/js/script.js
{
    id: 'novo-procedimento',
    title: 'Título do Novo Procedimento',
    category: 'tributario', // ou 'transporte', 'farmaceutico'
    categoryLabel: 'Tributário',
    description: 'Descrição detalhada do procedimento...',
    version: 'v1.0',
    date: '2025-08-25',
    filename: 'tributario/novo-procedimento-tributario.md' // Incluir pasta da categoria
}
```

### 3. Atualizar contadores
Os contadores de POPs são atualizados automaticamente baseado no array `popsData`. Para contadores estáticos no HTML, atualizar manualmente:
- Navigation badge: `#popsBadge`  
- Hero section: `#popCount`
- Mobile menu badge

## Estrutura de Arquivos MD

### Cabeçalho Padrão
```markdown
# PROCEDIMENTO OPERACIONAL PADRÃO
## TÍTULO DO PROCEDIMENTO - VERSÃO X.X

**Área:** [Tributário/Transporte/Farmacêutico]
**Versão:** vX.X
**Data de Elaboração:** [Data]
**Revisão:** [Periodicidade]

---

## 1. OBJETIVO E ESCOPO
[Descrição dos objetivos...]

## 2. FUNDAMENTAÇÃO LEGAL
[Base legal aplicável...]

## 3. PROCEDIMENTOS
[Detalhamento dos procedimentos...]

---

**Elaborado por:** [Responsável]
**Aprovado por:** [Aprovador]
**Próxima Revisão:** [Data]

© 2025 Expertzy Inteligência Tributária
```

## Performance e Otimização

### Carregamento
- **CSS inline crítico** para faster first paint
- **Fontes web otimizadas** com fallbacks locais
- **JavaScript modular** carregado de forma assíncrona
- **Imagens otimizadas** com lazy loading quando aplicável

### SEO e Acessibilidade
- **Estrutura HTML semântica** (headers, nav, main, sections)
- **Meta tags otimizadas** para busca
- **Alt texts descritivos** em imagens
- **Contraste adequado** seguindo diretrizes WCAG 2.1
- **Navegação por teclado** totalmente funcional

### Responsividade
- **Mobile-first design** com breakpoints estratégicos
- **Grid CSS flexível** que se adapta a diferentes telas
- **Tipografia fluida** com unidades relativas
- **Touch targets** adequados para dispositivos móveis

## Manutenção e Atualizações

### Cronograma Recomendado
- **Mensal**: Verificar links e funcionalidades
- **Trimestral**: Adicionar novos POPs conforme demanda
- **Semestral**: Revisar diretrizes de marca e atualizar estilos
- **Anual**: Auditoria completa de acessibilidade e performance

### Controle de Versões
- **Branch main**: Versão estável em produção
- **Features branches**: Desenvolvimento de novas funcionalidades
- **Tags de release**: Marcos importantes do projeto

### Monitoramento
- **GitHub Pages**: Status de build e deploy
- **Analytics**: Acompanhar uso e engajamento (se implementado)
- **Feedback dos usuários**: Via WhatsApp e email

## Segurança

### Considerações Implementadas
- **Sanitização de HTML** em conteúdo dinâmico
- **Validação de inputs** em filtros e busca
- **CSP headers** recomendados para produção
- **HTTPS obrigatório** via GitHub Pages

## Backup e Recuperação

### Estratégia de Backup
- **Repositório Git** como backup principal
- **GitHub** como repositório remoto seguro
- **Arquivos MD originais** preservados na pasta `/pop/`
- **Documentação de marca** preservada na pasta `/marca/`

## Contatos e Suporte

### Para Desenvolvimento
- **Claude Code**: Assistente IA que desenvolveu o projeto
- **GitHub Issues**: Para reportar bugs ou solicitar features

### Para Conteúdo
- **Email**: contato@expertzy.com.br
- **WhatsApp**: +55 62 99654-3141

## Licença e Direitos

Este projeto foi desenvolvido especificamente para **Expertzy Inteligência Tributária** e contém propriedade intelectual da empresa. Todos os POPs, diretrizes de marca e conteúdos são de propriedade exclusiva da Expertzy.

**Direitos Reservados**: © 2025 Expertzy Inteligência Tributária

---

**Última atualização**: 25 de agosto de 2025
**Desenvolvido por**: Claude Code (Anthropic)
**Status do projeto**: ✅ Atualizado - 9 POPs disponíveis (3 novos POPs adicionados, 5 atualizados)
**Novidade**: ✨ Suporte completo para diagramas Mermaid implementado