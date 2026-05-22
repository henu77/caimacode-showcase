# Apple HIG 风格改造指南

## 📋 改造概览

本文档详细说明了如何将菜码编程项目展示站从当前设计风格改造为 **Apple Human Interface Guidelines (HIG)** 风格。

### 改造内容清单

- ✅ 色彩系统升级（支持深色模式）
- ✅ 排版系统简化
- ✅ 间距系统统一（8px 基础单位）
- ✅ 圆角系统现代化
- ✅ 移除阴影，使用边框
- ✅ 增强交互反馈
- ✅ 深色模式支持
- ✅ 所有组件样式更新

---

## 🎨 设计系统变更

### 1. 色彩系统

#### 浅色模式
```css
--color-primary: #007AFF        /* iOS 蓝色 */
--color-secondary: #5AC8FA      /* 浅蓝 */
--color-tertiary: #34C759       /* 绿色 */
--color-destructive: #FF3B30    /* 红色 */
--color-warning: #FF9500        /* 橙色 */

--color-bg-primary: #FFFFFF     /* 主背景 */
--color-bg-secondary: #F2F2F7   /* 次背景 */
--color-bg-tertiary: #E5E5EA    /* 三级背景 */

--color-text-primary: #000000   /* 主文本 */
--color-text-secondary: #3C3C43 /* 次文本 */
--color-text-tertiary: #8E8E93  /* 三级文本 */
```

#### 深色模式
```css
--color-bg-primary: #000000
--color-bg-secondary: #1C1C1E
--color-bg-tertiary: #2C2C2E
--color-text-primary: #FFFFFF
--color-text-secondary: #EBEBF5
--color-text-tertiary: #8E8E93
```

### 2. 排版系统

| 用途 | 大小 | 用途 |
|------|------|------|
| Display | 2.5rem | 大标题 |
| Headline | 1.75rem | 标题 |
| Title | 1.25rem | 小标题 |
| Body | 1rem | 正文 |
| Callout | 0.9375rem | 标注 |
| Caption | 0.8125rem | 说明 |
| Footnote | 0.75rem | 脚注 |

### 3. 间距系统（8px 基础单位）

```css
--spacing-xs: 4px    /* 0.5 单位 */
--spacing-sm: 8px    /* 1 单位 */
--spacing-md: 16px   /* 2 单位 */
--spacing-lg: 24px   /* 3 单位 */
--spacing-xl: 32px   /* 4 单位 */
--spacing-2xl: 48px  /* 6 单位 */
--spacing-3xl: 64px  /* 8 单位 */
```

### 4. 圆角系统

```css
--radius-sm: 4px     /* 小元素 */
--radius-md: 8px     /* 按钮、输入框 */
--radius-lg: 12px    /* 卡片 */
--radius-xl: 16px    /* 大容器 */
--radius-full: 999px /* 完全圆形 */
```

### 5. 过渡时长

```css
--transition-fast: 150ms ease-out
--transition-base: 200ms ease-out
--transition-slow: 300ms ease-out
```

---

## 🔧 已修改的文件

### 核心样式
- `src/styles/global.css` - 全局样式和设计系统变量

### 新增文件
- `src/composables/useDarkMode.ts` - 深色模式管理

### 更新的组件
- `src/components/layout/SiteHeader.vue` - 导航栏（新增深色模式切换）
- `src/components/project/ProjectCard.vue` - 项目卡片
- `src/components/project/MediaGallery.vue` - 媒体库
- `src/components/project/VideoPanel.vue` - 视频面板
- `src/components/project/MarkdownRenderer.vue` - Markdown 渲染
- `src/components/project/ProjectLinksPanel.vue` - 链接面板
- `src/components/layout/WechatContactSection.vue` - 微信联系区

---

## 📱 响应式设计

### 断点 1: 1024px（平板）
- 详情页双列 → 单列
- 视频网格 2 列 → 1 列
- 图库全部 12 列
- 微信联系 2 列 → 1 列
- 链接按钮 3 列 → 1 列

### 断点 2: 720px（手机）
- 页面边距减少
- 面板内边距减少
- 卡片信息单列排列
- 网格间距减少

---

## 🎯 设计原则对标

### Apple HIG 核心原则

#### 1. 清晰（Clarity）
- **改造前**：蓝色强调色，柔和阴影，多层次视觉
- **改造后**：高对比度，清晰的文本层级，极简设计

#### 2. 反馈（Feedback）
- **改造前**：基础 hover 状态
- **改造后**：
  - 按钮 hover 时背景色变化
  - 按钮 active 时缩放反馈
  - 输入框 focus 时边框颜色变化
  - 卡片 hover 时背景和边框变化

#### 3. 美观（Aesthetic）
- **改造前**：渐变背景，多个圆角大小
- **改造后**：
  - 纯色背景
  - 统一的圆角（12px 卡片，8px 按钮）
  - 边框替代阴影
  - 深色模式支持

---

## 🚀 使用深色模式

### 自动检测系统偏好
深色模式会自动检测用户的系统设置（`prefers-color-scheme`）。

### 手动切换
用户可以点击导航栏右侧的主题切换按钮（☀️/🌙）手动切换。

### 存储用户选择
用户的主题选择会保存在 `localStorage` 中，下次访问时自动应用。

---

## 📊 视觉对比

### 项目卡片

**改造前**
```
┌─────────────────────┐
│   图片 (16:10)      │
│   24px 圆角         │
│   柔和阴影          │
├─────────────────────┤
│ [分类] [年份]       │
│ 标题                │
│ 副标题              │
│ 摘要                │
│ - 亮点              │
│ [标签] [标签]       │
│              [查看] │
└─────────────────────┘
```

**改造后**
```
┌─────────────────────┐
│   图片 (16:10)      │
│   12px 圆角         │
│   边框              │
├─────────────────────┤
│ [分类] [年份]       │
│ 标题                │
│ 副标题              │
│ 摘要                │
│ [标签] [标签]   [→] │
└─────────────────────┘
```

### 按钮

**改造前**
```
背景: #eff6ff (浅蓝)
边框: rgba(59, 130, 246, 0.16)
Hover: 背景 #dbeafe，边框加深
```

**改造后**
```
背景: var(--color-bg-secondary) (系统色)
边框: var(--color-border-light) (系统色)
Hover: 背景 var(--color-bg-tertiary)，边框 var(--color-primary)
Active: 缩放 0.98
```

---

## ✨ 新增功能

### 1. 深色模式支持
- 自动检测系统偏好
- 手动切换按钮
- 用户选择持久化

### 2. 增强的交互反馈
- 按钮 active 状态缩放
- 卡片 hover 时边框颜色变化
- 输入框 focus 时背景色变化

### 3. 更好的无障碍支持
- 高对比度色彩
- 清晰的焦点状态
- 语义化 HTML

---

## 🔍 测试清单

### 浅色模式
- [ ] 首页加载正常
- [ ] 项目卡片显示正确
- [ ] 搜索框可用
- [ ] 详情页布局正确
- [ ] 所有按钮可点击
- [ ] 链接颜色正确

### 深色模式
- [ ] 自动检测系统深色模式
- [ ] 手动切换按钮工作
- [ ] 所有元素颜色适配
- [ ] 文本对比度足够
- [ ] 图片显示正常

### 响应式
- [ ] 1024px 以下布局正确
- [ ] 720px 以下布局正确
- [ ] 触摸交互友好
- [ ] 没有水平滚动

### 交互
- [ ] 按钮 hover 效果
- [ ] 按钮 active 效果
- [ ] 输入框 focus 效果
- [ ] 链接悬停效果
- [ ] 过渡动画流畅

---

## 📚 参考资源

- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [iOS Design System](https://developer.apple.com/design/resources/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 🎓 后续改进建议

### 短期（1-2 周）
1. 添加更多交互动画
2. 实现灯箱（lightbox）查看图片
3. 添加搜索结果高亮
4. 优化移动端体验

### 中期（2-4 周）
1. 建立完整的设计规范文档
2. 创建 Storybook 组件库
3. 添加无障碍测试
4. 性能优化（图片懒加载等）

### 长期（1-3 月）
1. 开发可复用的 Vue 3 组件库
2. 集成设计工具（Figma）
3. 建立自动化测试
4. 创建设计系统网站

---

## 💡 常见问题

### Q: 如何自定义项目强调色？
A: 在 `project.json` 中设置 `accent` 字段。目前支持自定义，但建议保持 Apple 系统色以保持一致性。

### Q: 深色模式如何工作？
A: 使用 CSS 媒体查询 `@media (prefers-color-scheme: dark)` 自动检测，同时支持手动切换。

### Q: 如何添加新的颜色？
A: 在 `src/styles/global.css` 的 `:root` 中添加新的 CSS 变量，然后在组件中使用。

### Q: 如何修改间距？
A: 所有间距都使用 CSS 变量（`--spacing-*`），修改变量值即可全局生效。

---

## 📞 支持

如有问题或建议，请提交 Issue 或 PR。
