// js/render-tools.js - Tier-1 Modern Flagship Tool Card Component

function createToolCard(tool, isFeatured = false) {
    const isHot = tool.id === 'cleaning-quote-calculator' || tool.id === 'schedule-generator' || tool.id === 'dilution-calculator';
    const badgeText = isHot ? '🔥 FLAGSHIP' : (tool.tag || 'UTILITY');
    const badgeClass = isHot ? 'badge-hot' : 'badge-pro';

    return `
        <a href="${tool.url}" class="tool-card ${isHot ? 'card-featured' : ''}" style="text-decoration: none; display: flex; flex-direction: column; justify-content: space-between; position: relative;">
            <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                    <div class="card-icon" style="font-size: 32px; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; background: var(--bg-surface); border-radius: 12px; border: 1px solid var(--border-color);">${tool.icon}</div>
                    <span class="card-tag ${badgeClass}" style="margin-bottom: 0; font-size: 10px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase;">${badgeText}</span>
                </div>
                <div class="card-title" style="font-size: 16px; font-weight: 800; color: var(--text-main); margin-bottom: 6px;">${tool.title}</div>
                <div class="card-desc" style="font-size: 13px; color: var(--text-sub); line-height: 1.5;">${tool.desc}</div>
            </div>
            <div style="margin-top: 18px; padding-top: 12px; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; font-size: 13px; font-weight: 700; color: var(--primary);">
                <span>Launch Tool</span>
                <span style="transition: transform 0.2s;" class="arrow-indicator">→</span>
            </div>
        </a>
    `;
}

// 渲染到首页
function renderHomeTools() {
    const container = document.getElementById('home-tools-container');
    if (!container) return;

    let html = '';
    TOOLS_DATA.forEach(tool => {
        html += createToolCard(tool, tool.featured);
    });
    container.innerHTML = html;
}

// 渲染到工具列表页
function renderAllTools() {
    const container = document.getElementById('all-tools-container');
    if (!container) return;

    let html = '';
    TOOLS_DATA.forEach(tool => {
        html += createToolCard(tool, false);
    });
    container.innerHTML = html;
}

// 页面加载完成后自动执行
document.addEventListener('DOMContentLoaded', function() {
    renderHomeTools();
    renderAllTools();
});
