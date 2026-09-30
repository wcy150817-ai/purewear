function getToolUrl(tool) {
    if (typeof window !== 'undefined' && window.location.protocol === 'file:') {
        const isSubDir = window.location.pathname.includes('/tools/');
        return isSubDir ? `${tool.id}/index.html` : `tools/${tool.id}/index.html`;
    }
    return tool.url || `/tools/${tool.id}/`;
}

function createToolCard(tool) {
    const isHot = tool.id === 'cleaning-quote-calculator' || tool.id === 'dilution-calculator' || tool.id === 'schedule-generator';
    const targetUrl = getToolUrl(tool);
    
    return `
        <a href="${targetUrl}" class="omni-tool-card" data-category="${tool.category || 'all'}">
            <div>
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                    <span style="font-size: 24px; line-height: 1;">${tool.icon}</span>
                    ${isHot ? '<span style="font-size: 10px; font-weight: 700; color: #3B68FC; background: #EEF2FF; padding: 2px 7px; border-radius: 4px; border: 1px solid #C7D7FE;">POPULAR</span>' : ''}
                </div>
                <div class="omni-tool-card-title">${tool.title}</div>
                <div class="omni-tool-card-desc">${tool.desc}</div>
            </div>
            <div style="margin-top: 16px; padding-top: 10px; border-top: 1px solid var(--border-light); display: flex; justify-content: space-between; align-items: center; font-size: 12px; font-weight: 700; color: var(--omni-blue);">
                <span>Open Calculator</span>
                <span>→</span>
            </div>
        </a>
    `;
}

// 渲染到首页
function renderHomeTools(filter = 'all', searchKeyword = '') {
    const container = document.getElementById('home-tools-container');
    if (!container) return;

    let filtered = TOOLS_DATA;
    if (filter !== 'all') {
        filtered = filtered.filter(t => t.category === filter);
    }
    if (searchKeyword) {
        const kw = searchKeyword.toLowerCase();
        filtered = filtered.filter(t => t.title.toLowerCase().includes(kw) || t.desc.toLowerCase().includes(kw));
    }

    if (filtered.length === 0) {
        container.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">No calculators found matching your search.</div>';
        return;
    }

    let html = '';
    filtered.forEach(tool => {
        html += createToolCard(tool);
    });
    container.innerHTML = html;
}

// 渲染到工具列表页 (tools/index.html)
function renderAllTools(filter = 'all', searchKeyword = '') {
    const container = document.getElementById('all-tools-container');
    if (!container) return;

    let filtered = TOOLS_DATA;
    if (filter !== 'all') {
        if (filter === 'popular') {
            filtered = filtered.filter(t => t.featured || t.id === 'cleaning-quote-calculator' || t.id === 'dilution-calculator' || t.id === 'schedule-generator' || t.id === 'chemical-safety-checker');
        } else {
            filtered = filtered.filter(t => t.category === filter);
        }
    }
    if (searchKeyword) {
        const kw = searchKeyword.toLowerCase();
        filtered = filtered.filter(t => t.title.toLowerCase().includes(kw) || t.desc.toLowerCase().includes(kw));
    }

    if (filtered.length === 0) {
        container.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">No calculators found matching your search.</div>';
        return;
    }

    let html = '';
    filtered.forEach(tool => {
        html += createToolCard(tool);
    });
    container.innerHTML = html;
}

// 页面加载完成后自动执行
document.addEventListener('DOMContentLoaded', function() {
    renderHomeTools();
    renderAllTools();
});
