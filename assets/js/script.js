/**
 * EXPERTZY INTELIGÊNCIA TRIBUTÁRIA
 * © 2025 Expertzy Inteligência Tributária
 * Desenvolvido com tecnologia avançada para soluções tributárias
 */

// Dados dos POPs (será expandido conforme novos procedimentos forem adicionados)
const popsData = [
    {
        id: 'ticket-solucoes',
        title: 'Escrituração das Operações com Cartão Combustível',
        category: 'tributario',
        categoryLabel: 'Tributário',
        description: 'Procedimentos fiscais e contábeis para operações com cartão combustível da Ticket Soluções, incluindo escrituração obrigatória e aproveitamento de créditos de ICMS.',
        version: 'v1.0',
        date: '2025-08-24',
        filename: 'tributario/Ticket-Solucoes.md'
    },
    {
        id: 'transportes-fluxos',
        title: 'Fluxos Transportadora - Medicamentos',
        category: 'transporte',
        categoryLabel: 'Transporte',
        description: 'Procedimentos operacionais padrão para atividades de transporte e armazenamento, com ênfase em medicamentos e produtos farmacêuticos. Inclui fluxogramas detalhados.',
        version: 'v3.0',
        date: '2025-08-25',
        filename: 'transporte/transportes_fluxos_pop_v2.md'
    },
    {
        id: 'incineracao-farmaceutica',
        title: 'Remessa para Incineração de Produtos Farmacêuticos',
        category: 'farmaceutico',
        categoryLabel: 'Farmacêutico',
        description: 'Procedimentos fiscais, contábeis e operacionais para remessa de produtos farmacêuticos vencidos ou deteriorados para incineração.',
        version: 'v2.0',
        date: '2025-08-25',
        filename: 'farmaceutico/procedimento-incineracao-farmaceutica.md'
    },
    {
        id: 'impostos-importacao',
        title: 'Procedimentos de Impostos de Importação Consolidado',
        category: 'tributario',
        categoryLabel: 'Tributário',
        description: 'Diretrizes consolidadas para cálculo e recolhimento de impostos de importação, incluindo II, IPI, PIS, COFINS e ICMS em operações de comércio exterior.',
        version: 'v2.0',
        date: '2025-08-25',
        filename: 'tributario/pop_impostos_importacao_v1.md'
    },
    {
        id: 'ajustes-inventario',
        title: 'Ajustes de Inventário na Indústria Farmacêutica',
        category: 'tributario',
        categoryLabel: 'Tributário',
        description: 'Diretrizes para execução de ajustes de inventário em indústrias farmacêuticas, assegurando conformidade com NBC TG 16 e legislação fiscal aplicável, incluindo tratamento de medicamentos controlados e SNGPC.',
        version: 'v2.0',
        date: '2025-08-25',
        filename: 'tributario/pop_ajustes_inventario.md'
    },
    {
        id: 'fomentar-padronizado',
        title: 'Apuração do ICMS - Programa FOMENTAR',
        category: 'tributario',
        categoryLabel: 'Tributário',
        description: 'Procedimentos para apuração mensal do ICMS por estabelecimentos industriais beneficiários do Programa FOMENTAR, incluindo classificação por CFOPs, cálculo do financiamento e preenchimento da EFD ICMS/IPI.',
        version: 'v2.0',
        date: '2025-08-25',
        filename: 'tributario/pop_fomentar_padronizado.md'
    },
    {
        id: 'ciap-goias',
        title: 'Controle de Crédito de ICMS do Ativo Permanente (CIAP) - Goiás',
        category: 'tributario',
        categoryLabel: 'Tributário',
        description: 'Metodologia completa para o Controle de Crédito de ICMS do Ativo Permanente no Estado de Goiás, incluindo apropriação parcelada dos créditos tributários.',
        version: 'v1.0',
        date: '2025-08-25',
        filename: 'tributario/pop_ciap_goias.md'
    },
    {
        id: 'icms-st-energia',
        title: 'ICMS-ST sobre Energia Elétrica em Mercado Livre - Goiás',
        category: 'tributario',
        categoryLabel: 'Tributário',
        description: 'Procedimentos para cálculo e registro do ICMS-ST sobre energia elétrica adquirida em Ambiente de Contratação Livre (ACL) por empresas em Goiás.',
        version: 'v1.0',
        date: '2025-08-25',
        filename: 'tributario/pop_icms_st_energia_goias.md'
    },
    {
        id: 'icms-st-frete',
        title: 'ICMS-ST sobre Frete',
        category: 'tributario',
        categoryLabel: 'Tributário',
        description: 'Metodologia padronizada para identificação, cálculo, apuração e recolhimento do ICMS por Substituição Tributária incidente sobre serviços de transporte de cargas.',
        version: 'v1.0',
        date: '2025-08-25',
        filename: 'tributario/pop_icms_st_frete.md'
    }
];

// Estado da aplicação
const appState = {
    currentPops: [...popsData],
    selectedPop: null,
    filters: {
        search: '',
        category: ''
    }
};

// Elementos DOM
const elements = {
    popsGrid: document.getElementById('popsGrid'),
    searchInput: document.getElementById('searchInput'),
    categoryFilter: document.getElementById('categoryFilter'),
    noResults: document.getElementById('noResults'),
    popCount: document.getElementById('popCount'),
    modal: document.getElementById('popModal'),
    modalTitle: document.getElementById('modalTitle'),
    modalContent: document.getElementById('modalContent'),
    closeModal: document.getElementById('closeModal'),
    downloadMd: document.getElementById('downloadMd'),
    downloadPdf: document.getElementById('downloadPdf'),
    printPop: document.getElementById('printPop')
};

// Utilitários
const utils = {
    formatDate: (dateString) => {
        return new Date(dateString).toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },

    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    sanitizeHtml: (str) => {
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    },

    downloadFile: (content, filename, mimeType) => {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
};

// Renderização
const renderer = {
    renderPopCard: (pop) => {
        return `
            <div class="pop-card" data-id="${pop.id}">
                <div class="pop-card-header">
                    <span class="pop-category">${pop.categoryLabel}</span>
                    <h3 class="pop-title">${utils.sanitizeHtml(pop.title)}</h3>
                    <div class="pop-version">${pop.version}</div>
                </div>
                <div class="pop-card-body">
                    <p class="pop-description">${utils.sanitizeHtml(pop.description)}</p>
                    <div class="pop-meta">
                        <div class="pop-date">
                            <span>📅</span>
                            <span>${utils.formatDate(pop.date)}</span>
                        </div>
                        <div class="pop-actions">
                            <button class="btn btn-primary" onclick="popManager.openPop('${pop.id}')">
                                <span>👁️</span> Visualizar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    renderPopsGrid: () => {
        if (appState.currentPops.length === 0) {
            elements.popsGrid.style.display = 'none';
            elements.noResults.style.display = 'block';
            return;
        }

        elements.popsGrid.style.display = 'grid';
        elements.noResults.style.display = 'none';
        elements.popsGrid.innerHTML = appState.currentPops
            .map(pop => renderer.renderPopCard(pop))
            .join('');
    },

    updatePopCount: () => {
        elements.popCount.textContent = popsData.length;
    }
};

// Gerenciador de filtros
const filterManager = {
    applyFilters: () => {
        let filteredPops = [...popsData];

        // Filtro de busca
        if (appState.filters.search) {
            const searchTerm = appState.filters.search.toLowerCase();
            filteredPops = filteredPops.filter(pop => 
                pop.title.toLowerCase().includes(searchTerm) ||
                pop.description.toLowerCase().includes(searchTerm) ||
                pop.categoryLabel.toLowerCase().includes(searchTerm)
            );
        }

        // Filtro de categoria
        if (appState.filters.category) {
            filteredPops = filteredPops.filter(pop => 
                pop.category === appState.filters.category
            );
        }

        appState.currentPops = filteredPops;
        renderer.renderPopsGrid();
    },

    handleSearch: utils.debounce((searchTerm) => {
        appState.filters.search = searchTerm;
        filterManager.applyFilters();
    }, 300),

    handleCategoryFilter: (category) => {
        appState.filters.category = category;
        filterManager.applyFilters();
    },

    resetFilters: () => {
        appState.filters = { search: '', category: '' };
        elements.searchInput.value = '';
        elements.categoryFilter.value = '';
        filterManager.applyFilters();
    }
};

// Gerenciador de POPs
const popManager = {
    openPop: async (popId) => {
        const pop = popsData.find(p => p.id === popId);
        if (!pop) return;

        appState.selectedPop = pop;
        
        // Atualizar título do modal
        elements.modalTitle.textContent = pop.title;
        
        // Carregar conteúdo do POP
        try {
            const response = await fetch(`pop/${pop.filename}`);
            if (!response.ok) throw new Error('Erro ao carregar POP');
            
            const markdown = await response.text();
            const html = popManager.markdownToHtml(markdown);
            elements.modalContent.innerHTML = html;
            
            // Mostrar modal
            elements.modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        } catch (error) {
            console.error('Erro ao carregar POP:', error);
            elements.modalContent.innerHTML = `
                <div style="padding: 2rem; text-align: center; color: #6C757D;">
                    <h3>Erro ao carregar procedimento</h3>
                    <p>Não foi possível carregar o conteúdo deste POP. Tente novamente mais tarde.</p>
                </div>
            `;
            elements.modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    },

    closePop: () => {
        elements.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        appState.selectedPop = null;
    },

    markdownToHtml: (markdown) => {
        let mermaidCounter = 0;
        const mermaidBlocks = [];
        
        // Primeiro, extrair e substituir blocos Mermaid temporariamente
        markdown = markdown.replace(/```mermaid\n([\s\S]*?)```/g, (match, mermaidCode) => {
            const placeholder = `__MERMAID_BLOCK_${mermaidCounter}__`;
            mermaidBlocks.push({
                id: `mermaid-diagram-${mermaidCounter}`,
                code: mermaidCode.trim()
            });
            mermaidCounter++;
            return placeholder;
        });
        
        // Conversão básica de Markdown para HTML
        let html = markdown
            // Headers
            .replace(/^### (.*$)/gm, '<h3>$1</h3>')
            .replace(/^## (.*$)/gm, '<h2>$1</h2>')
            .replace(/^# (.*$)/gm, '<h1>$1</h1>')
            
            // Links
            .replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
            
            // Bold and Italic
            .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
            .replace(/\*([^*]+)\*/g, '<em>$1</em>')
            
            // Code blocks (não-mermaid)
            .replace(/```([^`]+)```/g, '<pre><code>$1</code></pre>')
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            
            // Lists
            .replace(/^\- (.+)$/gm, '<li>$1</li>')
            .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
            
            // Line breaks
            .replace(/\n\n/g, '</p><p>')
            .replace(/\n/g, '<br>');
        
        // Wrap in paragraphs and fix lists
        html = '<p>' + html + '</p>';
        html = html.replace(/<p>(<li>.*<\/li>)<\/p>/gs, '<ul>$1</ul>');
        html = html.replace(/<p><\/p>/g, '');
        html = html.replace(/<p>(<h[1-6]>)/g, '$1');
        html = html.replace(/(<\/h[1-6]>)<\/p>/g, '$1');
        html = html.replace(/<p>(<pre>)/g, '$1');
        html = html.replace(/(<\/pre>)<\/p>/g, '$1');
        
        // Substituir placeholders Mermaid por divs apropriados
        mermaidBlocks.forEach((block, index) => {
            const mermaidDiv = `<div class="mermaid-container"><pre class="mermaid" id="${block.id}">${block.code}</pre></div>`;
            html = html.replace(`__MERMAID_BLOCK_${index}__`, mermaidDiv);
        });
        
        // Agendar renderização do Mermaid após o HTML ser inserido no DOM
        if (mermaidBlocks.length > 0) {
            setTimeout(() => {
                mermaid.run();
            }, 100);
        }
        
        return html;
    },

    downloadMarkdown: async () => {
        if (!appState.selectedPop) return;
        
        try {
            const response = await fetch(`pop/${appState.selectedPop.filename}`);
            if (!response.ok) throw new Error('Erro ao carregar arquivo');
            
            const content = await response.text();
            utils.downloadFile(
                content,
                appState.selectedPop.filename,
                'text/markdown'
            );
        } catch (error) {
            console.error('Erro ao baixar markdown:', error);
            alert('Erro ao baixar arquivo. Tente novamente.');
        }
    },

    downloadPdf: () => {
        // Funcionalidade temporariamente desabilitada
        console.log('Download PDF temporariamente desabilitado - aguardando implementação adequada');
        alert('Funcionalidade em desenvolvimento. Use "Imprimir" como alternativa.');
        return;
    },

    printPop: () => {
        if (!appState.selectedPop) return;
        
        const printWindow = window.open('', '_blank');
        const printContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>${appState.selectedPop.title}</title>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        line-height: 1.6; 
                        max-width: 800px; 
                        margin: 0 auto; 
                        padding: 20px; 
                        color: #333;
                    }
                    h1, h2, h3, h4 { color: #091A30; margin-top: 2em; }
                    h1 { font-size: 24pt; }
                    h2 { font-size: 18pt; border-bottom: 2pt solid #FF002D; padding-bottom: 5pt; }
                    h3 { font-size: 14pt; }
                    h4 { font-size: 12pt; }
                    code { 
                        background-color: #f5f5f5; 
                        padding: 2pt 4pt; 
                        border-radius: 3pt; 
                        font-family: Courier, monospace; 
                    }
                    pre { 
                        background-color: #f5f5f5; 
                        padding: 10pt; 
                        border-radius: 5pt; 
                        overflow-x: auto; 
                    }
                    table { width: 100%; border-collapse: collapse; margin: 1em 0; }
                    th, td { padding: 8pt; border: 1pt solid #ddd; text-align: left; }
                    th { background-color: #091A30; color: white; }
                    .footer { 
                        margin-top: 3em; 
                        padding-top: 1em; 
                        border-top: 1pt solid #ddd; 
                        font-size: 10pt; 
                        color: #666; 
                        text-align: center; 
                    }
                </style>
            </head>
            <body>
                ${elements.modalContent.innerHTML}
                <div class="footer">
                    <p>© 2025 Expertzy Inteligência Tributária</p>
                    <p>Documento impresso em ${new Date().toLocaleDateString('pt-BR')}</p>
                </div>
            </body>
            </html>
        `;
        
        printWindow.document.write(printContent);
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
    }
};

// Header functionality
const headerManager = {
    init: () => {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        
        // Mobile menu toggle
        if (mobileToggle && mobileMenu) {
            mobileToggle.addEventListener('click', () => {
                const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
                mobileToggle.setAttribute('aria-expanded', !isExpanded);
                mobileMenu.classList.toggle('active');
                
                // Prevent scroll when menu is open
                document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
            });
        }
        
        // Close mobile menu when clicking links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    mobileToggle.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = 'auto';
                }
            });
        });
        
        // Close mobile menu on resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && mobileMenu) {
                mobileMenu.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Active navigation highlighting
        headerManager.highlightActiveSection();
        window.addEventListener('scroll', headerManager.highlightActiveSection);
    },
    
    highlightActiveSection: () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link[data-section]');
        
        let current = '';
        const scrollPosition = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    }
};

// Event Listeners
const eventListeners = {
    init: () => {
        // Header functionality
        headerManager.init();
        
        // Busca
        elements.searchInput.addEventListener('input', (e) => {
            filterManager.handleSearch(e.target.value);
        });

        // Filtro de categoria
        elements.categoryFilter.addEventListener('change', (e) => {
            filterManager.handleCategoryFilter(e.target.value);
        });

        // Modal
        elements.closeModal.addEventListener('click', popManager.closePop);
        
        // Fechar modal com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && elements.modal.style.display === 'flex') {
                popManager.closePop();
            }
        });

        // Fechar modal clicando fora
        elements.modal.addEventListener('click', (e) => {
            if (e.target === elements.modal) {
                popManager.closePop();
            }
        });

        // Downloads
        elements.downloadMd.addEventListener('click', popManager.downloadMarkdown);
        elements.downloadPdf.addEventListener('click', popManager.downloadPdf);
        elements.printPop.addEventListener('click', popManager.printPop);

        // Navegação suave
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
};

// Inicialização da aplicação
const app = {
    init: () => {
        console.log('🚀 Expertzy POPs - Inicializando aplicação...');
        
        // Renderizar POPs iniciais
        renderer.renderPopsGrid();
        renderer.updatePopCount();
        
        // Configurar event listeners
        eventListeners.init();
        
        console.log('✅ Aplicação inicializada com sucesso!');
        console.log(`📋 ${popsData.length} POPs carregados`);
    }
};

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', app.init);

// Expor funções globais necessárias
window.popManager = popManager;

// Service Worker para cache (apenas em produção HTTPS)
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}