# AI每日资讯 - Google AdSense 网站

一个专为Google AdSense优化的AI行业资讯网站，包含完整的页面结构、SEO优化和广告位配置。

## 📁 项目结构

```
ai-daily-news/
├── index.html              # 首页 - 新闻列表和特色文章
├── styles.css              # 主样式表 - 响应式设计
├── app.js                  # 主应用脚本 - 动态内容加载
├── article-template.html   # 文章详情页模板
├── about.html              # 关于我们页面
├── privacy.html            # 隐私政策页面
├── terms.html              # 使用条款页面
├── ads.txt                 # AdSense验证文件
├── robots.txt              # 搜索引擎爬虫配置
├── sitemap.xml             # 站点地图
└── README.md               # 项目说明
```

## 🚀 快速开始

### 1. 配置Google AdSense

1. 注册 [Google AdSense](https://www.google.com/adsense) 账号
2. 获取您的发布商ID（格式：`pub-XXXXXXXXXXXXXXXX`）
3. 替换所有文件中的 `ca-pub-XXXXXXXXXXXXXXXX` 为您的实际ID
4. 替换所有广告位ID（`data-ad-slot`）为您的实际广告单元ID

### 2. 更新域名

将所有文件中的 `https://your-domain.com/` 替换为您的实际域名。

### 3. 部署网站

将文件上传到您的Web服务器或静态网站托管服务（如：
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- AWS S3 + CloudFront

### 4. 验证AdSense

1. 将 `ads.txt` 文件上传到网站根目录
2. 在AdSense后台添加您的网站
3. 等待Google审核（通常需要几天到几周）

## 📱 页面说明

### 首页 (index.html)
- 特色文章展示区
- 新闻列表（支持分页加载）
- 搜索功能
- 分类导航
- 热门标签云
- 邮件订阅
- 多个广告位

### 文章详情页 (article-template.html)
- 文章头部信息
- 文章内容展示
- 作者信息
- 相关文章推荐
- 广告位

### 关于我们 (about.html)
- 平台介绍
- 数据统计
- 团队信息
- 联系方式
- 广告政策声明

### 隐私政策 (privacy.html)
- 信息收集说明
- Google AdSense Cookie政策
- 用户权利说明

### 使用条款 (terms.html)
- 服务说明
- 用户责任
- 知识产权
- 免责声明

## 🎯 AdSense优化要点

### 广告位配置
1. **顶部横幅** - 页面顶部，高可见性
2. **内容内嵌** - 特色文章和列表之间
3. **侧边栏** - 右侧边栏，垂直广告
4. **底部横幅** - 页面底部

### SEO优化
- 语义化HTML结构
- 完整的Meta标签
- Open Graph标签
- 规范的URL（canonical）
- XML站点地图
- Robots.txt配置

### 用户体验
- 响应式设计（移动端优先）
- 快速加载（懒加载图片）
- 清晰的导航结构
- 无障碍访问支持

## 📝 内容更新

### 添加新文章
1. 复制 `article-template.html`
2. 替换模板变量：
   - `{{TITLE}}` - 文章标题
   - `{{EXCERPT}}` - 文章摘要
   - `{{CONTENT}}` - 文章内容（HTML格式）
   - `{{IMAGE}}` - 封面图片URL
   - `{{CATEGORY}}` - 分类名称
   - `{{CATEGORY_SLUG}}` - 分类slug
   - `{{AUTHOR}}` - 作者名
   - `{{AUTHOR_AVATAR}}` - 作者头像
   - `{{DATE}}` - 发布日期
   - `{{READ_TIME}}` - 阅读时间
   - `{{VIEWS}}` - 阅读数
   - `{{TAGS}}` - 标签（逗号分隔）
   - `{{TAGS_HTML}}` - 标签HTML
   - `{{ID}}` - 文章ID

3. 更新 `sitemap.xml` 添加新文章URL
4. 更新 `app.js` 中的新闻数据

### 更新首页数据
编辑 `app.js` 中的 `newsData` 数组，添加或修改文章数据。

## 🔧 自定义配置

### 修改主题颜色
编辑 `styles.css` 中的CSS变量：
```css
:root {
    --primary-color: #2563eb;    /* 主色调 */
    --secondary-color: #7c3aed;  /* 次要色调 */
    --accent-color: #06b6d4;     /* 强调色 */
}
```

### 修改网站信息
编辑各HTML文件中的：
- 网站标题
- 描述
- 联系方式
- 社交媒体链接

## 📊 后续优化建议

1. **添加Google Analytics** - 追踪用户行为
2. **实现后端API** - 动态获取新闻数据
3. **添加评论系统** - 增加用户互动
4. **实现用户系统** - 个性化推荐
5. **添加社交分享** - 扩大传播范围
6. **优化图片** - 使用WebP格式
7. **启用CDN** - 加速全球访问
8. **添加PWA支持** - 可安装为应用

## 📄 许可证

本项目仅供学习和参考使用。请确保您的内容符合Google AdSense的政策要求。

## ⚠️ 重要提醒

1. **原创内容** - AdSense要求网站必须有原创内容
2. **禁止点击自己的广告** - 这会导致账号被封
3. **遵守政策** - 仔细阅读并遵守 [AdSense计划政策](https://support.google.com/adsense/answer/48182)
4. **隐私合规** - 确保遵守GDPR等隐私法规
5. **定期更新** - 保持内容新鲜度，定期发布新文章

## 📞 联系方式

如有问题或建议，请联系：contact@ai-daily-news.com
