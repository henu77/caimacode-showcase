<template>
  <div class="floating-nav">
    <nav class="nav-items">
      <a
        href="#"
        class="nav-item"
        title="返回顶部"
        @click.prevent="scrollToTop"
      >
        ↑
      </a>

      <a
        href="#contact"
        class="nav-item"
        title="联系与关注"
      >
        💬
      </a>

      <a
        href="#links"
        class="nav-item"
        title="相关链接"
      >
        🔗
      </a>

      <a
        href="#gallery"
        class="nav-item"
        title="关键画面"
      >
        🖼️
      </a>

      <button
        class="nav-item"
        title="切换主题"
        @click="toggleTheme"
      >
        {{ isDark ? '☀️' : '🌙' }}
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useDarkMode } from '../../composables/useDarkMode'

const { isDark, toggleTheme } = useDarkMode()

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<style scoped>
.floating-nav {
  position: fixed;
  right: var(--spacing-lg);
  bottom: var(--spacing-2xl);
  z-index: 100;
}

.nav-items {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-light);
  color: var(--color-text-primary);
  font-size: 1.2rem;
  cursor: pointer;
  transition: all var(--transition-base);
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.nav-item:hover {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);
}

.nav-item:active {
  transform: translateY(0);
}

@media (max-width: 720px) {
  .floating-nav {
    right: var(--spacing-md);
    bottom: var(--spacing-lg);
  }

  .nav-item {
    width: 44px;
    height: 44px;
    font-size: 1rem;
  }
}
</style>
