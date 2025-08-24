# Diretrizes de Implementação da Identidade Visual Expertzy

## Introdução

A presente documentação estabelece os padrões técnicos obrigatórios para implementação da identidade visual da Expertzy Inteligência Tributária em todos os códigos e interfaces desenvolvidos. O objetivo é garantir a consistência visual, o reconhecimento da marca e o alinhamento com os valores corporativos expressos através dos elementos visuais.

## Paleta de Cores Corporativa

A implementação da identidade visual deve seguir rigorosamente a paleta de cores definida, respeitando os valores hexadecimais específicos e suas aplicações conceituais:

### Cor Primária - Vermelho Expertzy
- **Código Hexadecimal**: #FF002D
- **RGB**: 255, 0, 45
- **Aplicação**: Elementos principais, botões de ação, destaques, headers
- **Significado**: Energia, Velocidade, Força

### Cor Secundária - Azul Naval
- **Código Hexadecimal**: #091A30
- **RGB**: 9, 26, 48
- **Aplicação**: Textos principais, elementos de navegação, backgrounds secundários
- **Significado**: Segurança, Intelecto, Precisão

### Cor Terciária - Cinza Claro
- **Código Hexadecimal**: #FFFFFF
- **RGB**: 255, 255, 255
- **Aplicação**: Backgrounds principais, elementos de contraste, áreas de respiro
- **Significado**: Respeito, Proteção, Transparência

## Tipografia Corporativa

A tipografia constitui elemento fundamental da identidade visual e deve ser implementada seguindo as especificações estabelecidas:

### Fonte Principal - gadeg thin
- **Aplicação**: Títulos principais, elementos de destaque, logotipo
- **Características**: Moderna, minimalista, tecnológica
- **Peso**: Thin (100)

### Fonte Secundária - BRFirma Medium
- **Aplicação**: Textos corridos, subtítulos, elementos informativos
- **Características**: Legibilidade otimizada, profissional
- **Peso**: Medium (500)

## Implementação Técnica Obrigatória

### Cabeçalho Padrão
Todos os códigos desenvolvidos devem incluir um cabeçalho padronizado contendo:

```python
"""
EXPERTZY INTELIGÊNCIA TRIBUTÁRIA
© 2025 Expertzy Inteligência Tributária
Desenvolvido com tecnologia avançada para soluções tributárias

Cores Corporativas:
- Vermelho Expertzy: #FF002D
- Azul Naval: #091A30  
- Cinza Claro: #FFFFFF

Tipografia:
- Principal: gadeg thin
- Secundária: BRFirma Medium
"""
```

### Estrutura CSS Base
Para interfaces web, implementar a seguinte estrutura CSS fundamental:

```css
:root {
    --expertzy-red: #FF002D;
    --expertzy-blue: #091A30;
    --expertzy-light: #FFFFFF;
    --font-primary: 'gadeg thin', sans-serif;
    --font-secondary: 'BRFirma Medium', sans-serif;
}

.expertzy-header {
    background-color: var(--expertzy-red);
    color: var(--expertzy-light);
    font-family: var(--font-primary);
}

.expertzy-content {
    background-color: var(--expertzy-light);
    color: var(--expertzy-blue);
    font-family: var(--font-secondary);
}
```

### Espaço Reservado para Logotipo
Em todas as interfaces gráficas, deve ser reservado um espaço específico para o logotipo da Expertzy, respeitando as seguintes especificações:

- **Posição**: Canto superior esquerdo ou centro superior
- **Dimensões mínimas**: 120px x 40px (proporção 3:1)
- **Área de respiro**: Margem mínima de 20px em todas as direções
- **Background**: Preferencialmente sobre fundo branco (#FFFFFF) ou vermelho (#FF002D)

### Rodapé Corporativo Obrigatório
Todos os códigos e interfaces devem incluir o rodapé padronizado:

```
© 2025 Expertzy Inteligência Tributária
```

Este elemento deve estar posicionado na parte inferior da interface, utilizando:
- **Cor do texto**: #091A30
- **Fonte**: BRFirma Medium
- **Tamanho**: 12px ou equivalente
- **Alinhamento**: Centralizado

## Diretrizes de Interface Gráfica

### Elementos de Navegação
Os elementos de navegação devem seguir o padrão cromático estabelecido:

- **Estados normais**: Texto em #091A30, background em #FFFFFF
- **Estados ativos/hover**: Texto em #FFFFFF, background em #FF002D
- **Bordas e separadores**: #091A30 com opacity 0.2

### Botões e Elementos Interativos
A implementação de botões deve respeitar a hierarquia visual:

#### Botão Primário
- **Background**: #FF002D
- **Texto**: #FFFFFF
- **Hover**: #FF002D com opacity 0.8
- **Fonte**: BRFirma Medium

#### Botão Secundário
- **Background**: Transparente
- **Texto**: #FF002D
- **Borda**: 1px solid #FF002D
- **Hover**: Background #FF002D, texto #FFFFFF

### Tratamento de Dados e Tabelas
Para elementos de visualização de dados:

- **Headers**: Background #091A30, texto #FFFFFF
- **Linhas alternadas**: Background #FFFFFF e #F8F9FA
- **Bordas**: #091A30 com opacity 0.1
- **Números destacados**: Cor #FF002D

## Implementação em Python/Tkinter

Para interfaces desenvolvidas em Python utilizando Tkinter, implementar as seguintes configurações base:

```python
# Configurações de cores
EXPERTZY_RED = "#FF002D"
EXPERTZY_BLUE = "#091A30"
EXPERTZY_WHITE = "#FFFFFF"

# Configurações de fonte
FONT_PRIMARY = ("gadeg thin", 12)
FONT_SECONDARY = ("BRFirma Medium", 10)

# Configuração da janela principal
root.configure(bg=EXPERTZY_WHITE)
root.title("Expertzy Inteligência Tributária")
```

## Implementação em Web (HTML/CSS/JavaScript)

Para aplicações web, incluir no head do documento:

```html
<meta name="author" content="Expertzy Inteligência Tributária">
<meta name="description" content="Soluções avançadas em inteligência tributária">
<link rel="stylesheet" href="expertzy-brand.css">
```

## Validação e Conformidade

Todos os códigos desenvolvidos devem passar por validação quanto à implementação correta dos elementos visuais, verificando:

1. Utilização exclusiva das cores aprovadas
2. Implementação correta das fontes corporativas
3. Presença do rodapé obrigatório
4. Espaço adequado reservado para o logotipo
5. Consistência visual entre diferentes telas/módulos

## Considerações Técnicas Específicas

### Responsividade
A implementação deve garantir que os elementos visuais se adaptem adequadamente a diferentes resoluções, mantendo a proporção do logotipo e a legibilidade dos textos.

### Acessibilidade
O contraste entre as cores deve atender aos padrões WCAG 2.1, garantindo legibilidade adequada para usuários com deficiências visuais.

### Performance
A implementação das fontes deve considerar o carregamento otimizado, utilizando web fonts apenas quando necessário e fornecendo fallbacks apropriados.

Esta documentação constitui o padrão obrigatório para todos os desenvolvimentos realizados, garantindo a consistência da identidade visual da Expertzy Inteligência Tributária em todas as soluções tecnológicas implementadas.