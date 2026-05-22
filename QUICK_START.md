# Apple HIG 改造 - 快速开始指南

## 🚀 立即开始

### 1. 查看改造效果
```bash
npm run dev
# 访问 http://localhost:3000
```

### 2. 测试深色模式
- **自动**：系统设置深色模式时自动应用
- **手动**：点击导航栏右侧的主题切换按钮（☀️/🌙）

### 3. 测试响应式
在浏览器开发者工具中切换设备模式：
- 桌面：1920px
- 平板：1024px
- 手机：375px

---

## 📋 改造清单

### ✅ 已完成
- [x] 色彩系统（浅色 + 深色）
- [x] 排版系统（7 个层级）
- [x] 间距系统（8px 基础）
- [x] 圆角系统（4 个规格）
- [x] 深色模式支持
- [x] 所有组件更新
- [x] 响应式优化

### 📝 文档
- [x] 改造指南：`APPLE_HIG_MIGRATION_GUIDE.md`
- [x] 完整建议：`APPLE_HIG_COMPLETE_GUIDE.md`
- [x] 快速开始：本文件

---

## 🎨 设计系统速查

### 颜色
```css
主色: #007AFF (iOS 蓝)
背景: #FFFFFF (浅色) / #000000 (深色)
文本: #000000 (浅色) / #FFFFFF (深色)
边框: rgba(0, 0, 0, 0.1) (浅色) / rgba(255, 255, 255, 0.1) (深色)
```

### 间距
```
4px (xs) | 8px (sm) | 16px (md) | 24px (lg) | 32px (xl) | 48px (2xl) | 64px (3xl)
```

### 圆角
```
4px (sm) | 8px (md) | 12px (lg) | 16px (xl) | 999px (full)
```

### 排版
```
2.5rem (Display) | 1.75rem (Headline) | 1.25rem (Title) | 1rem (Body) | 0.9375rem (Callout)
```

---

## 🔧 常见修改

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
  --color-bg-secondary: #F2F2F7;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-primary: #000000; /* 深色 */
    --color-bg-secondary: #1C1C1E;
  }
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

---

## 🌙 深色模式使用

### 在组件中使用
```vue
<script setup lang="ts">
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark, toggleTheme } = useDarkMode()
</script>

<template>
  <button @click="toggleTheme">
    {{ isDark ? '☀️' : '🌙' }}
  </button>
</template>
```

### 在样式中使用
```css
/* 自动适配深色模式 */
.element {
  color: var(--color-text-primary);
  background: var(--color-bg-primary);
}

/* 深色模式特定样式 */
@media (prefers-color-scheme: dark) {
  .element {
    /* 深色模式样式 */
  }
}
```

---

## 📱 响应式断点

### 1024px（平板）
- 双列 → 单列
- 2 列网格 → 1 列

### 720px（手机）
- 减少边距和内边距
- 单列排列

```css
@media (max-width: 1024px) {
  /* 平板样式 */
}

@media (max-width: 720px) {
  /* 手机样式 */
}
```

---

## 🧪 快速测试

### 浅色模式
```bash
# 系统设置为浅色模式
# 或点击主题切换按钮
```

### 深色模式
```bash
# 系统设置为深色模式
# 或点击主题切换按钮
```

### 响应式
```bash
# 按 F12 打开开发者工具
# 点击设备工具栏
# 选择不同设备尺寸
```

---

## 🎯 下一步

### 短期（本周）
1. ✅ 查看改造效果
2. ✅ 测试所有功能
3. ✅ 验证响应式设计
4. 📝 收集反馈意见

### 中期（下周）
1. 添加页面过渡动画
2. 实现图片灯箱
3. 优化搜索高亮
4. 性能优化

### 长期（1-3 月）
1. 建立 Storybook 组件库
2. 完整的设计规范网站
3. 无障碍测试和优化
4. 性能监控

---

## 📚 文档导航

| 文档 | 用途 |
|------|------|
| `APPLE_HIG_MIGRATION_GUIDE.md` | 详细改造指南 |
| `APPLE_HIG_COMPLETE_GUIDE.md` | 完整建议和后续计划 |
| `README.md` | 项目基本信息 |

---

## 💡 设计原则回顾

### Apple HIG 三大原则

#### 1️⃣ 清晰（Clarity）
- 高对比度色彩
- 清晰的文本层级
- 极简设计

#### 2️⃣ 反馈（Feedback）
- 按钮 hover 状态
- 按钮 active 缩放
- 输入框 focus 边框

#### 3️⃣ 美观（Aesthetic）
- 统一的圆角
- 边框替代阴影
- 深色模式支持

---

## 🔗 有用的链接

- [Apple HIG 官方](https://developer.apple.com/design/human-interface-guidelines/)
- [Vue 3 文档](https://vuejs.org/)
- [Vite 文档](https://vitejs.dev/)
- [CSS 变量](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

---

## ❓ 常见问题

**Q: 如何恢复原来的设计？**
A: 使用 git 恢复之前的版本，或参考 git 历史记录。

**Q: 如何自定义颜色？**
A: 修改 `src/styles/global.css` 中的 CSS 变量。

**Q: 深色模式不工作？**
A: 检查浏览器是否支持 `prefers-color-scheme`，或手动点击主题切换按钮。

**Q: 如何添加新的间距规格？**
A: 在 `:root` 中添加新的 `--spacing-*` 变量。

---

## 📞 需要帮助？

1. 查看 `APPLE_HIG_MIGRATION_GUIDE.md` 获取详细信息
2. 查看 `APPLE_HIG_COMPLETE_GUIDE.md` 获取完整建议
3. 参考官方 Apple HIG 文档
4. 提交 Issue 或 PR

---

**祝你使用愉快！** 🎉
