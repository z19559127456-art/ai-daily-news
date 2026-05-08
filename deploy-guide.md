# AI每日资讯网站 - 部署指南

## 📋 部署前准备

### 1. 域名和服务器
- 注册域名（推荐：Namecheap、Cloudflare、阿里云）
- 准备Web服务器或静态托管服务

### 2. Google AdSense账号
- 注册 [Google AdSense](https://www.google.com/adsense)
- 获取发布商ID：`pub-XXXXXXXXXXXXXXXX`
- 创建广告单元，获取广告位ID

## 🚀 部署步骤

### 步骤1：修改配置文件

#### 更新AdSense ID
编辑以下文件，将所有 `ca-pub-XXXXXXXXXXXXXXXX` 替换为您的实际ID：
- `index.html`
- `article-template.html`
- `about.html`
- `privacy.html`
- `terms.html`
- `ads.txt`

#### 更新广告位ID
将所有 `data-ad-slot="XXXXXXXXXX"` 替换为您的实际广告单元ID。

#### 更新域名
将所有 `https://your-domain.com/` 替换为您的实际域名。

### 步骤2：上传文件到服务器

#### 方案A：传统Web服务器
```
/var/www/ai-daily-news/
├── index.html
├── article/
│   ├── 1.html
│   ├── 2.html
│   ├── 3.html
│   ├── 4.html
│   ├── 5.html
│   ├── 6.html
│   ├── 7.html
│   └── 8.html
├── about.html
├── privacy.html
├── terms.html
├── styles.css
├── app.js
├── ads.txt
├── robots.txt
├── sitemap.xml
└── images/          # 存放本地图片
```

#### 方案B：静态网站托管（推荐）

**Vercel部署：**
```bash
# 安装Vercel CLI
npm i -g vercel

# 部署
cd ai-daily-news
vercel --prod
```

**Netlify部署：**
1. 将代码推送到GitHub仓库
2. 在Netlify中选择"New site from Git"
3. 选择您的仓库并部署

**Cloudflare Pages：**
1. 登录Cloudflare Dashboard
2. 进入Pages > Create a project
3. 连接GitHub仓库或上传文件

### 步骤3：配置DNS

在域名注册商处添加DNS记录：
```
Type: A
Name: @
Content: 您的服务器IP

Type: CNAME
Name: www
Content: your-domain.com
```

### 步骤4：验证AdSense

1. 在AdSense后台添加您的网站
2. 确保 `ads.txt` 文件可访问：`https://your-domain.com/ads.txt`
3. 等待Google审核（通常1-2周）

### 步骤5：提交搜索引擎

#### Google Search Console
1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 添加您的网站
3. 提交sitemap：`https://your-domain.com/sitemap.xml`

#### Bing Webmaster Tools
1. 访问 [Bing Webmaster](https://www.bing.com/webmasters)
2. 添加并验证网站
3. 提交sitemap

## 🔧 后续维护

### 定期更新内容
- 每周至少发布2-3篇新文章
- 使用 `generate-content.js` 生成新文章页面
- 更新 `sitemap.xml` 和 `app.js` 中的数据

### 监控网站性能
- 使用Google Analytics追踪访问数据
- 使用Google Search Console监控搜索表现
- 使用PageSpeed Insights优化加载速度

### AdSense优化
- 监控广告表现，调整广告位位置
- 测试不同广告格式和尺寸
- 遵守AdSense政策，避免违规操作

## 📊 推荐工具

### 分析工具
- Google Analytics 4
- Google Search Console
- Bing Webmaster Tools

### SEO工具
- Ahrefs（关键词研究）
- SEMrush（竞争对手分析）
- Screaming Frog（网站审计）

### 性能优化
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

## ⚠️ 注意事项

1. **内容原创性**：确保所有文章为原创内容，避免抄袭
2. **定期更新**：保持网站活跃，定期发布新内容
3. **用户体验**：避免过多广告影响用户体验
4. **移动适配**：确保网站在移动设备上表现良好
5. **加载速度**：优化图片和代码，提升加载速度

## 🆘 常见问题

**Q: AdSense审核需要多久？**
A: 通常1-2周，有时可能需要更长时间。

**Q: 为什么我的AdSense申请被拒绝？**
A: 常见原因：内容不足、原创性不够、网站结构问题。确保有充足的原创内容后再申请。

**Q: 如何提高AdSense收入？**
A: 增加流量、优化广告位、提高内容质量、选择高价值关键词。

**Q: 网站需要备案吗？**
A: 如果使用国内服务器，需要ICP备案。使用海外服务器则不需要。

## 📞 技术支持

如有问题，请通过以下方式联系：
- 邮箱：support@ai-daily-news.com
- GitHub Issues：[项目地址]
