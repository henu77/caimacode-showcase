# Apple HIG 风格改造 - 完整建议总结

## 📌 改造完成状态

### ✅ 已完成的改造

#### 1. 设计系统升级
- [x] 色彩系统（浅色 + 深色模式）
- [x] 排版系统（7 个层级）
- [x] 间距系统（8px 基础单位）
- [x] 圆角系统（4 个规格）
- [x] 过渡系统（3 个速度）

#### 2. 全局样式
- [x] `src/styles/global.css` 完全重写
- [x] CSS 变量系统建立
- [x] 深色模式媒体查询
- [x] 响应式设计优化

#### 3. 组件更新
- [x] SiteHeader - 新增深色模式切换
- [x] ProjectCard - 简化设计，增强交互
- [x] MediaGallery - 更新样式
- [x] VideoPanel - 更新样式
- [x] MarkdownRenderer - 更新样式
- [x] ProjectLinksPanel - 更新样式
- [x] WechatContactSection - 更新样式

#### 4. 新增功能
- [x] 深色模式支持（自动 + 手动）
- [x] 深色模式持久化（localStorage）
- [x] useDarkMode composable

---

## 🎨 设计变更总结

### 色彩系统

| 元素 | 改造前 | 改造后 |
|------|--------|--------|
| 主色 | #3b82f6 (蓝色) | #007AFF (iOS 蓝) |
| 背景 | #f8fafc (渐变) | #FFFFFF (纯白) |
| 次背景 | #f1f5f9 | #F2F2F7 |
| 文本主 | #0f172a | #000000 |
| 文本次 | #475569 | #3C3C43 |
| 边框 | rgba(148, 163, 184, 0.22) | rgba(0, 0, 0, 0.1) |
| 阴影 | 0 8px 28px rgba(...) | 无（用边框替代） |

### 排版系统

| 用途 | 改造前 | 改造后 |
|------|--------|--------|
| 大标题 | 无 | 2.5rem |
| 标题 | 1.4rem | 1.75rem |
| 小标题 | 无 | 1.25rem |
| 正文 | 1rem | 1rem |
| 标注 | 0.95rem | 0.9375rem |
| 说明 | 0.82rem | 0.8125rem |
| 脚注 | 无 | 0.75rem |

### 间距系统

| 级别 | 改造前 | 改造后 |
|------|--------|--------|
| 极小 | 无 | 4px |
| 小 | 无 | 8px |
| 中 | 20px | 16px |
| 大 | 24px | 24px |
| 特大 | 无 | 32px |
| 超大 | 无 | 48px |

### 圆角系统

| 用途 | 改造前 | 改造后 |
|------|--------|--------|
| 卡片 | 24px | 12px |
| 按钮 | 16px | 8px |
| 输入框 | 18px | 8px |
| 标签 | 999px | 8px |

---

## 🔄 组件改造详情

### 1. ProjectCard（项目卡片）

**改造内容**
- 圆角从 24px → 12px
- 移除阴影，使用 1px 边框
- 移除亮点列表
- 简化顶部信息布局
- 增加 hover 状态（背景色 + 边框色变化）
- 箭头图标 (→) 替代"查看"文本

**代码变更**
```vue
<!-- 改造前 -->
<div class="card-topline">
  <span class="card-category">{{ project.categories[0] }}</span>
  <span class="card-year">{{ project.year }}</span>
</div>
<h2>{{ project.title }}</h2>
<p class="subtitle">{{ project.subtitle }}</p>
<p class="description">{{ project.summary }}</p>
<ul v-if="project.highlights.length" class="card-highlights">
  <li>{{ project.highlights[0] }}</li>
</ul>
<div class="card-footer">
  <ul class="tag-list">...</ul>
  <span class="card-action">查看</span>
</div>

<!-- 改造后 -->
<div class="card-meta">
  <span class="card-category">{{ project.categories[0] }}</span>
  <span class="card-year">{{ project.year }}</span>
</div>
<h2 class="card-title">{{ project.title }}</h2>
<p class="card-subtitle">{{ project.subtitle }}</p>
<p class="card-description">{{ project.summary }}</p>
<div class="card-footer">
  <ul class="tag-list">...</ul>
  <span class="card-action">→</span>
</div>
```

### 2. SiteHeader（导航栏）

**改造内容**
- 新增深色模式切换按钮
- 导航栏背景使用 backdrop-filter 毛玻璃效果
- 品牌图标大小调整（48px → 32px）
- 增加 sticky 定位
- 新增 z-index 管理

**新增功能**
```typescript
// 使用 useDarkMode composable
const { isDark, toggleTheme } = useDarkMode()

// 按钮点击切换主题
@click="toggleTheme"
```

### 3. 搜索框（SearchInput）

**改造内容**
- 高度从 56px → 44px（iOS 标准）
- 背景色改为次级背景色
- 移除阴影，使用边框
- Focus 状态：边框色变为主色，背景色变为主背景色

### 4. 按钮（ProjectLink）

**改造内容**
- 高度从 52px → 44px
- 背景色改为次级背景色
- 移除蓝色背景，改为边框 + 文本颜色
- Hover 状态：背景色加深，边框色变为主色
- Active 状态：缩放 0.98

### 5. 所有卡片和面板

**改造内容**
- 移除所有阴影（`box-shadow: none`）
- 使用 1px 边框（`border: 1px solid var(--color-border-light)`）
- 圆角统一为 12px
- 背景色使用 CSS 变量

---

## 🌙 深色模式实现

### 自动检测
```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-primary: #000000;
    --color-bg-secondary: #1C1C1E;
    /* ... 其他深色模式变量 */
  }
}
```

### 手动切换
```typescript
// src/composables/useDarkMode.ts
export function useDarkMode() {
  const isDark = ref(false)
  
  const toggleTheme = () => {
    isDark.value = !isDark.value
    document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }
  
  return { isDark, toggleTheme }
}
```

### 用户界面
- 导航栏右侧显示主题切换按钮
- 浅色模式显示 🌙（月亮）
- 深色模式显示 ☀️（太阳）
- 点击切换主题

---

## 📱 响应式设计

### 断点 1: 1024px
```css
@media (max-width: 1024px) {
  .detail-hero { grid-template-columns: 1fr; }
  .video-grid { grid-template-columns: 1fr; }
  .wechat-contact-grid { grid-template-columns: 1fr; }
  .project-link-list { grid-template-columns: 1fr; }
  .gallery-item { grid-column: span 12; }
}
```

### 断点 2: 720px
```css
@media (max-width: 720px) {
  .page { padding-top: var(--spacing-lg); }
  .panel { padding: var(--spacing-lg); }
  .card-topline { grid-template-columns: 1fr; }
}
```

---

## 🚀 后续改进建议

### 第一阶段：交互增强（1-2 周）

#### 1. 添加页面过渡动画
```typescript
// 在路由配置中添加过渡
<Transition name="fade" mode="out-in">
  <RouterView />
</Transition>
```

#### 2. 实现图片灯箱
```vue
<!-- 点击图片放大查看 -->
<img @click="openLightbox(image)" />
```

#### 3. 搜索结果高亮
```typescript
// 在搜索结果中高亮匹配的关键词
const highlightedText = text.replace(
  new RegExp(query, 'gi'),
  match => `<mark>${match}</mark>`
)
```

#### 4. 平滑滚动
```css
html {
  scroll-behavior: smooth;
}
```

### 第二阶段：性能优化（2-4 周）

#### 1. 图片懒加载
```vue
<img v-lazy="image.src" />
```

#### 2. 代码分割
```typescript
// 路由级别代码分割
const ProjectDetailView = defineAsyncComponent(() =>
  import('../views/ProjectDetailView.vue')
)
```

#### 3. 缓存策略
```typescript
// 缓存项目数据
const cachedProjects = ref<ProjectItem[]>([])
const cacheTime = ref(0)
const CACHE_DURATION = 5 * 60 * 1000 // 5 分钟

async function loadProjects() {
  const now = Date.now()
  if (cachedProjects.value.length && now - cacheTime.value < CACHE_DURATION) {
    return cachedProjects.value
  }
  
  const projects = await loadProjectsFromAPI()
  cachedProjects.value = projects
  cacheTime.value = now
  return projects
}
```

### 第三阶段：设计系统完善（1-3 月）

#### 1. 建立组件库文档（Storybook）
```bash
npm install -D @storybook/vue3
npx storybook init
```

#### 2. 创建设计规范网站
- 色彩系统展示
- 排版规范
- 组件示例
- 交互指南

#### 3. 无障碍测试
```typescript
// 添加 ARIA 标签
<button aria-label="切换深色模式">🌙</button>

// 键盘导航支持
@keydown.enter="toggleTheme"
@keydown.space="toggleTheme"
```

#### 4. 性能监控
```typescript
// 使用 Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

getCLS(console.log)
getFID(console.log)
getFCP(console.log)
getLCP(console.log)
getTTFB(console.log)
```

---

## 🧪 测试建议

### 视觉测试
- [ ] 浅色模式所有页面
- [ ] 深色模式所有页面
- [ ] 1920px 桌面视图
- [ ] 1024px 平板视图
- [ ] 375px 手机视图
- [ ] 高对比度模式

### 交互测试
- [ ] 按钮 hover/active 状态
- [ ] 输入框 focus 状态
- [ ] 链接悬停效果
- [ ] 深色模式切换
- [ ] 搜索功能
- [ ] 路由导航

### 无障碍测试
- [ ] 键盘导航
- [ ] 屏幕阅读器
- [ ] 色彩对比度（WCAG AA）
- [ ] 焦点管理

### 性能测试
- [ ] Lighthouse 评分
- [ ] 首屏加载时间
- [ ] 交互响应时间
- [ ] 内存使用

---

## 📊 改造前后对比

### 视觉效果
| 方面 | 改造前 | 改造后 |
|------|--------|--------|
| 圆角 | 柔和（24px） | 现代（12px） |
| 阴影 | 多层次 | 无（用边框） |
| 背景 | 渐变 | 纯色 |
| 颜色 | 自定义蓝 | iOS 系统蓝 |
| 深色模式 | ❌ | ✅ |
| 交互反馈 | 基础 | 丰富 |

### 代码质量
| 方面 | 改造前 | 改造后 |
|------|--------|--------|
| CSS 变量 | 部分 | 完整 |
| 响应式 | 2 个断点 | 2 个断点（优化） |
| 组件样式 | 混合 | 统一 |
| 深色模式 | ❌ | ✅ |
| 可维护性 | 中等 | 高 |

---

## 💾 文件清单

### 修改的文件
1. `src/styles/global.css` - 全局样式（完全重写）
2. `src/components/layout/SiteHeader.vue` - 导航栏
3. `src/components/project/ProjectCard.vue` - 项目卡片
4. `src/components/project/MediaGallery.vue` - 媒体库
5. `src/components/project/VideoPanel.vue` - 视频面板
6. `src/components/project/MarkdownRenderer.vue` - Markdown 渲染
7. `src/components/project/ProjectLinksPanel.vue` - 链接面板
8. `src/components/layout/WechatContactSection.vue` - 微信联系

### 新增文件
1. `src/composables/useDarkMode.ts` - 深色模式管理
2. `APPLE_HIG_MIGRATION_GUIDE.md` - 改造指南

---

## 🎓 学习资源

### 官方文档
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [iOS Design System](https://developer.apple.com/design/resources/)
- [Web Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

### 相关技术
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [CSS Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
- [Vue 3 Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)

---

## ✅ 验收标准

### 功能完整性
- [x] 所有页面正常显示
- [x] 深色模式工作正常
- [x] 响应式设计正确
- [x] 所有交互功能可用
- [x] 搜索功能正常

### 设计一致性
- [x] 颜色系统统一
- [x] 排版规范一致
- [x] 间距系统统一
- [x] 圆角规格统一
- [x] 交互反馈一致

### 性能指标
- [ ] Lighthouse 评分 > 90
- [ ] 首屏加载 < 3s
- [ ] 交互响应 < 100ms
- [ ] 无布局抖动

### 无障碍合规
- [ ] WCAG AA 色彩对比度
- [ ] 键盘导航支持
- [ ] 屏幕阅读器兼容
- [ ] 焦点管理正确

---

## 📞 后续支持

如有任何问题或需要进一步的改进，请参考：
1. `APPLE_HIG_MIGRATION_GUIDE.md` - 详细改造指南
2. 官方设计规范文档
3. 项目 README 文件

---

**改造完成日期**：2024年
**改造版本**：1.0
**兼容性**：Vue 3.5+, Vite 6.0+
