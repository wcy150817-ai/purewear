// js/render-tools.js

// 生成单个卡片HTML的函数
function createToolCard(tool, isFeatured = false) {
    const featuredClass = isFeatured ? 'card-featured' : 'tool-card';
    
    return `
        <a href="${tool.url}" class="card ${featuredClass}">
            <div class="card-icon">${tool.icon}</div>
            <div class="card-title">${tool.title}</div>
            <div class="card-desc">${tool.desc}</div>
            <span class="card-tag">${tool.tag}</span>
        </a>
    `;
}

// 渲染到首页
function renderHomeTools() {
    const container = document.getElementById('home-tools-container');
    if (!container) return;

    // 只获取 featured: true 的工具
    const featuredTools = TOOLS_DATA.filter(t => t.featured);
    
    let html = '';
    featuredTools.forEach(tool => {
        html += createToolCard(tool, true);
    });
    
    container.innerHTML = html;
}

// 渲染到工具列表页
function renderAllTools() {
    const container = document.getElementById('all-tools-container');
    if (!container) return;

    // 按类别分组（可选，这里简单演示全部输出）
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
