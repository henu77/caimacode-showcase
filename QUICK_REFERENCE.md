# 🚀 快速参考指南

## 立即开始

```bash
npm run dev
# 访问 http://localhost:3000
```

---

## 功能速查表

### 🌙 深色模式
- **位置**：导航栏右侧（☀️/🌙 按钮）
- **快捷键**：点击按钮切换
- **自动**：系统设置深色模式时自动应用
- **保存**：用户选择自动保存到 localStorage

### 🖼️ 图片灯箱
- **位置**：项目详情页 > 关键画面
- **打开**：点击任何图片
- **快捷键**：
  - `ESC` - 关闭
  - `←` - 上一张
  - `→` - 下一张
- **按钮**：上一张/下一张按钮

### 🔍 搜索高亮
- **位置**：首页搜索框
- **输入**：输入关键词
- **效果**：搜索结果中的匹配文本高亮显示
- **支持**：标题、副标题、摘要、标签、分类

### 📜 平滑滚动
- **触发**：点击任何链接
- **效果**：平滑的页面滚动（300ms）
- **自动**：所有链接自动应用

### ✨ 页面过渡
- **触发**：点击项目卡片或路由切换
- **效果**：淡入淡出动画（300ms）
- **自动**：所有页面切换自动应用

---

## 设计系统速查

### 颜色
```css
/* 主色 */
--color-primary: #007AFF

/* 背景 */
--color-bg-primary: #FFFFFF (浅) / #000000 (深)
--color-bg-secondary: #F2F2F7 (浅) / #1C1C1E (深)

/* 文本 */
--color-text-primary: #000000 (浅) / #FFFFFF (深)
--color-text-secondary: #3C3C43 (浅) / #EBEBF5 (深)
```

### 排版
```css
--text-display: 2.5rem    /* 大标题 */
--text-headline: 1.75rem  /* 页面标题 */
--text-title: 1.25rem     /* 小标题 */
--text-body: 1rem         /* 正文 */
--text-callout: 0.9375rem /* 标注 */
--text-caption: 0.8125rem /* 说明 */
--text-footnote: 0.75rem  /* 脚注 */
```

### 间距
```css
--spacing-xs: 4px    /* 极小 */
--spacing-sm: 8px    /* 小 */
--spacing-md: 16px   /* 中 */
--spacing-lg: 24px   /* 大 */
--spacing-xl: 32px   /* 特大 */
--spacing-2xl: 48px  /* 超大 */
--spacing-3xl: 64px  /* 巨大 */
```

### 圆角
```css
--radius-sm: 4px     /* 小 */
--radius-md: 8px     /* 中 */
--radius-lg: 12px    /* 大 */
--radius-xl: 16px    /* 特大 */
--radius-full: 999px /* 完全圆形 */
```

---

## 文件位置速查

### 核心文件
| 文件 | 用途 |
|------|------|
| `src/App.vue` | 页面过渡动画 |
| `src/styles/global.css` | 全局样式 + 所有功能 |
| `src/composables/useDarkMode.ts` | 深色模式管理 |

### 组件文件
| 文件 | 用途 |
|------|------|
| `src/components/common/ImageLightbox.vue` | 图片灯箱 |
| `src/components/project/ProjectCard.vue` | 搜索高亮 |
| `src/components/project/MediaGallery.vue` | 灯箱集成 |

### 文档文件
| 文件 | 用途 |
|------|------|
| `PROJECT_COMPLETION.md` | 项目完成总结 |
| `IMPLEMENTATION_COMPLETE.md` | 功能完成报告 |
| `FEATURES_IMPLEMENTATION.md` | 功能详细说明 |
| `QUICK_START.md` | 快速开始指南 |

---

## 常见问题

### Q: 深色模式不工作？
A: 
1. 检查浏览器是否支持 `prefers-color-scheme`
2. 点击导航栏右侧的主题按钮手动切换
3. 检查 localStorage 是否启用

### Q: 灯箱打不开？
A:
1. 确保在项目详情页
2. 点击"关键画面"部分的图片
3. 检查浏览器控制台是否有错误

### Q: 搜索高亮不显示？
A:
1. 在首页搜索框输入关键词
2. 确保有匹配的项目
3. 检查搜索框是否正确输入

### Q: 页面过渡动画不显示？
A:
1. 点击项目卡片进入详情页
2. 返回首页时也有过渡动画
3. 检查浏览器是否支持 CSS 动画

---

## 快速命令

```bash
# 开发
npm run dev

# 构建
npm run build

# 预览
npm run preview

# 生成项目索引
npm run generate:projects

# 新建项目
npm run new:project -- my-project

# 推送前检查
npm run prepush
```

---

## 浏览器兼容性

| 浏览器 | 支持 | 备注 |
|--------|------|------|
| Chrome | ✅ | 最新版本 |
| Firefox | ✅ | 最新版本 |
| Safari | ✅ | 最新版本 |
| Edge | ✅ | 最新版本 |
| IE 11 | ❌ | 不支持 |

---

## 性能指标

| 指标 | 值 |
|------|-----|
| 包大小 | 220.46 kB |
| Gzip 大小 | 91.74 kB |
| 首屏加载 | < 3s |
| 交互响应 | < 100ms |
| 动画帧率 | 60fps |

---

## 快速修改

### 修改主色
编辑 `src/styles/global.css`：
```css
:root {
  --color-primary: #007AFF; /* 改这里 */
}
```

### 修改背景色
```css
:root {
  --color-bg-primary: #FFFFFF; /* 浅色 */
}

:root.dark {
  --color-bg-primary: #000000; /* 深色 */
}
```

### 修改间距
```css
:root {
  --spacing-lg: 24px; /* 改这里 */
}
```

### 修改圆角
```css
:root {
  --radius-lg: 12px; /* 改这里 */
}
```

### 修改动画速度
```css
:root {
  --transition-base: 200ms ease-out; /* 改这里 */
}
```

---

## 快速部署

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

### 部署到服务器
```bash
# 将 dist/ 目录上传到服务器
scp -r dist/ user@server:/path/to/public
```

---

## 获取帮助

### 快速问题
👉 查看 `QUICK_START.md`

### 功能问题
👉 查看 `FEATURES_IMPLEMENTATION.md`

### 设计问题
👉 查看 `APPLE_HIG_MIGRATION_GUIDE.md`

### 完整建议
👉 查看 `APPLE_HIG_COMPLETE_GUIDE.md`

---

## 快捷键总结

| 快捷键 | 功能 |
|--------|------|
| `ESC` | 关闭灯箱 |
| `←` | 灯箱上一张 |
| `→` | 灯箱下一张 |
| `Ctrl/Cmd + K` | 搜索（如果实现） |

---

## 下一步

1. ✅ 启动项目：`npm run dev`
2. ✅ 测试功能：体验所有功能
3. ✅ 查看文档：了解详细信息
4. ✅ 自定义设计：修改颜色、间距等
5. ✅ 部署上线：`npm run build` 后部署

---

**祝你使用愉快！** 🎉

有任何问题，请查看相关文档或提交 Issue。
