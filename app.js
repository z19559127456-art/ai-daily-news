/**
 * AI每日资讯 - 主应用脚本
 * 动态加载内容 | 搜索 | 交互功能
 */

// ============================================
// 数据层 - 模拟AI资讯数据
// ============================================

const newsData = [
    {
        id: 1,
        title: "OpenAI发布GPT-5：多模态能力大幅提升，推理能力接近人类专家水平",
        excerpt: "OpenAI今日正式发布GPT-5模型，新模型在数学推理、代码生成和多模态理解方面实现了重大突破。据官方测试数据显示，GPT-5在多项基准测试中超越了前代模型40%以上...",
        content: "",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
        category: "产品发布",
        categorySlug: "products",
        author: "AI资讯编辑部",
        authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=editor1",
        date: "2026-05-08",
        readTime: "5分钟",
        tags: ["OpenAI", "GPT-5", "大语言模型"],
        featured: true,
        views: 12580
    },
    {
        id: 2,
        title: "Google DeepMind发布Gemini 3.0：原生多模态架构引领行业新标准",
        excerpt: "Google DeepMind团队宣布推出Gemini 3.0系列模型，采用全新的原生多模态架构，能够无缝处理文本、图像、音频和视频内容。新模型在科学研究和创意写作领域表现尤为突出...",
        content: "",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=350&fit=crop",
        category: "技术前沿",
        categorySlug: "tech",
        author: "技术观察员",
        authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=tech1",
        date: "2026-05-08",
        readTime: "4分钟",
        tags: ["Google", "Gemini", "多模态"],
        featured: false,
        views: 8930
    },
    {
        id: 3,
        title: "Anthropic Claude 4发布：安全性与有用性达到新平衡",
        excerpt: "Anthropic正式发布Claude 4，新模型在保持高安全性的同时，大幅提升了有用性和指令遵循能力。Claude 4引入了全新的宪法AI训练方法...",
        content: "",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=350&fit=crop",
        category: "产品发布",
        categorySlug: "products",
        author: "AI安全研究员",
        authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=safety1",
        date: "2026-05-07",
        readTime: "6分钟",
        tags: ["Anthropic", "Claude", "AI安全"],
        featured: false,
        views: 7650
    },
    {
        id: 4,
        title: "AI投资热潮持续：2026年Q1全球AI融资额突破500亿美元",
        excerpt: "据最新统计数据显示，2026年第一季度全球人工智能领域融资总额达到创纪录的512亿美元，同比增长85%。其中，大模型和AI基础设施领域获得最多投资...",
        content: "",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=350&fit=crop",
        category: "投资动态",
        categorySlug: "investment",
        author: "财经分析师",
        authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=finance1",
        date: "2026-05-07",
        readTime: "3分钟",
        tags: ["AI投资", "融资", "创业"],
        featured: false,
        views: 6540
    },
    {
        id: 5,
        title: "Meta发布开源大模型Llama 4：性能媲美闭源模型",
        excerpt: "Meta AI正式发布Llama 4系列开源大模型，包括70B和400B两个版本。测试显示，Llama 4-400B在多项基准测试中表现优异，接近GPT-4水平...",
        content: "",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=350&fit=crop",
        category: "技术前沿",
        categorySlug: "tech",
        author: "开源社区观察",
        authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=open1",
        date: "2026-05-06",
        readTime: "5分钟",
        tags: ["Meta", "Llama", "开源"],
        featured: false,
        views: 9870
    },
    {
        id: 6,
        title: "中国AI芯片突破：新一代训练芯片算力提升300%",
        excerpt: "国内半导体企业发布新一代AI训练芯片，采用先进制程工艺，单卡算力达到国际领先水平。该芯片已在国内多个大模型训练集群中部署使用...",
        content: "",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=350&fit=crop",
        category: "行业新闻",
        categorySlug: "news",
        author: "产业记者",
        authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=industry1",
        date: "2026-05-06",
        readTime: "4分钟",
        tags: ["AI芯片", "国产", "半导体"],
        featured: false,
        views: 11200
    },
    {
        id: 7,
        title: "AI Agent爆发元年：智能体应用落地加速",
        excerpt: "2026年被业界称为AI Agent爆发元年，各类智能体应用开始大规模落地。从个人助理到企业自动化，AI Agent正在改变人们的工作和生活方式...",
        content: "",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=350&fit=crop",
        category: "行业新闻",
        categorySlug: "news",
        author: "产品经理",
        authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pm1",
        date: "2026-05-05",
        readTime: "7分钟",
        tags: ["AI Agent", "智能体", "应用"],
        featured: false,
        views: 7890
    },
    {
        id: 8,
        title: "Nature发表：AI辅助科研论文数量激增，学术出版面临变革",
        excerpt: "《自然》杂志最新研究显示，使用AI辅助撰写的科研论文数量在过去一年增长超过300%。学术界正在讨论如何规范AI在科研写作中的使用...",
        content: "",
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&h=350&fit=crop",
        category: "学术研究",
        categorySlug: "research",
        author: "学术编辑",
        authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=academic1",
        date: "2026-05-05",
        readTime: "5分钟",
        tags: ["学术", "科研", "论文"],
        featured: false,
        views: 5430
    }
];

// ============================================
// 工具函数
// ============================================

/**
 * 格式化日期
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return "今天";
    if (days === 1) return "昨天";
    if (days < 7) return `${days}天前`;
    
    return date.toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

/**
 * 获取当前日期显示
 */
function getCurrentDateDisplay() {
    const now = new Date();
    const options = { 
        year: "numeric", 
        month: "long", 
        day: "numeric", 
        weekday: "long" 
    };
    return now.toLocaleDateString("zh-CN", options);
}

/**
 * 转义HTML
 */
function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

// ============================================
// 渲染函数
// ============================================

/**
 * 渲染特色文章
 */
function renderFeaturedArticle(article) {
    const container = document.getElementById("featuredArticle");
    if (!container) return;

    container.innerHTML = `
        <a href="/article-${article.id}.html" class="featured-link">
            <img src="${escapeHtml(article.image)}" 
                 alt="${escapeHtml(article.title)}" 
                 class="featured-image"
                 loading="eager">
        </a>
        <div class="featured-content">
            <div class="featured-meta">
                <span class="category-badge">${escapeHtml(article.category)}</span>
                <span class="publish-date">📅 ${formatDate(article.date)}</span>
                <span class="read-time">⏱️ ${escapeHtml(article.readTime)}阅读</span>
            </div>
            <h2 class="featured-title">
                <a href="/article-${article.id}.html">${escapeHtml(article.title)}</a>
            </h2>
            <p class="featured-excerpt">${escapeHtml(article.excerpt)}</p>
            <div class="featured-footer">
                <div class="author-info">
                    <img src="${escapeHtml(article.authorAvatar)}" 
                         alt="${escapeHtml(article.author)}" 
                         class="author-avatar"
                         loading="lazy">
                    <span class="author-name">${escapeHtml(article.author)}</span>
                </div>
                <span class="views">👁️ ${article.views.toLocaleString()} 阅读</span>
            </div>
        </div>
    `;
}

/**
 * 渲染新闻卡片
 */
function renderNewsCard(article) {
    return `
        <article class="news-card">
            <a href="/article-${article.id}.html" class="news-card-image-link">
                <img src="${escapeHtml(article.image)}" 
                     alt="${escapeHtml(article.title)}" 
                     class="news-card-image"
                     loading="lazy">
            </a>
            <div class="news-card-content">
                <div class="news-card-meta">
                    <span class="category-badge">${escapeHtml(article.category)}</span>
                    <span class="publish-date">${formatDate(article.date)}</span>
                    <span class="read-time">${escapeHtml(article.readTime)}</span>
                </div>
                <h3 class="news-card-title">
                    <a href="/article-${article.id}.html">${escapeHtml(article.title)}</a>
                </h3>
                <p class="news-card-excerpt">${escapeHtml(article.excerpt)}</p>
                <div class="news-card-footer">
                    <div class="news-tags">
                        ${article.tags.map(tag => `<a href="/tag/${tag.toLowerCase().replace(/\s+/g, "-")}.html" class="tag-small">${escapeHtml(tag)}</a>`).join("")}
                    </div>
                    <span class="views" style="color: var(--text-light); font-size: 0.85rem;">
                        👁️ ${article.views.toLocaleString()}
                    </span>
                </div>
            </div>
        </article>
    `;
}

/**
 * 渲染新闻列表
 */
function renderNewsList(articles, append = false) {
    const container = document.getElementById("newsList");
    if (!container) return;

    const html = articles.map(renderNewsCard).join("");
    
    if (append) {
        container.insertAdjacentHTML("beforeend", html);
    } else {
        container.innerHTML = html;
    }
}

// ============================================
// 状态管理
// ============================================

let currentPage = 1;
const itemsPerPage = 4;
let filteredNews = [...newsData];

/**
 * 加载更多新闻
 */
function loadMoreNews() {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const articles = filteredNews.slice(start, end);
    
    if (articles.length === 0) {
        const btn = document.getElementById("loadMoreBtn");
        if (btn) {
            btn.textContent = "没有更多资讯了";
            btn.disabled = true;
        }
        return;
    }
    
    renderNewsList(articles, true);
    currentPage++;
    
    // 重新加载广告
    if (typeof adsbygoogle !== "undefined") {
        try {
            adsbygoogle.push({});
        } catch (e) {
            console.log("Ad reload skipped");
        }
    }
}

/**
 * 搜索新闻
 */
function searchNews(keyword) {
    if (!keyword.trim()) {
        filteredNews = [...newsData];
    } else {
        const lower = keyword.toLowerCase();
        filteredNews = newsData.filter(article => 
            article.title.toLowerCase().includes(lower) ||
            article.excerpt.toLowerCase().includes(lower) ||
            article.tags.some(tag => tag.toLowerCase().includes(lower))
        );
    }
    
    currentPage = 1;
    
    // 重新渲染
    const featured = filteredNews.find(a => a.featured) || filteredNews[0];
    const regular = filteredNews.filter(a => a.id !== featured.id).slice(0, itemsPerPage);
    
    renderFeaturedArticle(featured);
    renderNewsList(regular);
    
    // 重置加载按钮
    const btn = document.getElementById("loadMoreBtn");
    if (btn) {
        btn.textContent = "加载更多资讯";
        btn.disabled = false;
    }
}

// ============================================
// 事件处理
// ============================================

/**
 * 初始化应用
 */
function initApp() {
    // 设置当前日期
    const dateEl = document.getElementById("currentDate");
    if (dateEl) {
        dateEl.textContent = getCurrentDateDisplay();
    }

    // 渲染特色文章
    const featured = newsData.find(a => a.featured) || newsData[0];
    renderFeaturedArticle(featured);

    // 渲染初始新闻列表
    const regularNews = newsData.filter(a => a.id !== featured.id).slice(0, itemsPerPage);
    renderNewsList(regularNews);

    // 加载更多按钮
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", loadMoreNews);
    }

    // 搜索表单
    const searchForm = document.getElementById("searchForm");
    if (searchForm) {
        searchForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const input = searchForm.querySelector(".search-input");
            if (input) {
                searchNews(input.value);
            }
        });
    }

    // 移动端菜单
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mainNav = document.getElementById("mainNav");
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener("click", () => {
            mainNav.classList.toggle("active");
        });
    }

    // 订阅表单
    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector(".newsletter-input");
            if (input && input.value) {
                alert("感谢订阅！我们会将每日AI资讯发送到您的邮箱。");
                input.value = "";
            }
        });
    }

    // 初始化广告
    if (typeof adsbygoogle !== "undefined") {
        try {
            adsbygoogle.push({});
        } catch (e) {
            console.log("AdSense not ready");
        }
    }
}

// ============================================
// 启动应用
// ============================================

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
} else {
    initApp();
}

// ============================================
// 性能优化：懒加载图片
// ============================================

if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute("data-src");
                }
                observer.unobserve(img);
            }
        });
    });

    // 观察所有懒加载图片
    document.querySelectorAll("img[loading='lazy']").forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// 分析追踪（可选）
// ============================================

/**
 * 简单的页面浏览追踪
 * 可以替换为 Google Analytics 或其他分析工具
 */
function trackPageView() {
    // 这里可以集成 Google Analytics
    console.log("Page viewed:", window.location.pathname);
}

// 追踪页面浏览
trackPageView();
