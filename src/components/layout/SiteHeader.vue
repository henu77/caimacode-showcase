<template>
  <header class="site-header">
    <div class="header-container">
      <RouterLink class="brand-link" to="/">
        <img class="brand-icon" src="/菜码编程.png" alt="菜码编程" />
        <h1 class="brand-name">菜码编程</h1>
      </RouterLink>

      <nav class="header-nav">
        <button class="theme-toggle" @click="toggleTheme" :title="isDark ? '切换浅色模式' : '切换深色模式'">
          <span v-if="isDark">☀️</span>
          <span v-else>🌙</span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useDarkMode } from '../../composables/useDarkMode'

const { isDark, toggleTheme } = useDarkMode()
</script>

<style scoped>
.site-header {
  background: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border-light);
  padding: var(--spacing-md) 0;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
}

.header-container {
  max-width: var(--page-width);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  text-decoration: none;
}

.brand-icon {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-md);
}

.brand-name {
  font-size: var(--text-title);
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
}

.header-nav {
  display: flex;
  gap: var(--spacing-md);
  align-items: center;
}

.theme-toggle {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-md);
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all var(--transition-base);
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-toggle:hover {
  background: var(--color-bg-tertiary);
  border-color: var(--color-primary);
}

.theme-toggle:active {
  transform: scale(0.95);
}
</style>
