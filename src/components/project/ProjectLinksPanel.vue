<template>
  <section v-if="hasLinks" class="project-links panel" id="links">
    <div class="section-heading">
      <h2>相关链接</h2>
      <p class="section-intro">项目演示、仓库地址与公众号文章等外部内容统一放在这里，便于继续查看。</p>
    </div>

    <div class="project-link-list">
      <a v-if="links.demo" class="project-link" :href="links.demo" target="_blank" rel="noreferrer noopener">
        在线演示
      </a>
      <a v-if="links.repo" class="project-link" :href="links.repo" target="_blank" rel="noreferrer noopener">
        源码仓库
      </a>
      <a v-if="links.xianyu" class="project-link project-link-xianyu" :href="links.xianyu" target="_blank" rel="noreferrer noopener">
        🛒 闲鱼商品
      </a>
      <a
        v-for="item in links.external"
        :key="`${item.label}-${item.url}`"
        class="project-link"
        :href="item.url"
        target="_blank"
        rel="noreferrer noopener"
      >
        {{ item.label }}
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ProjectLinks } from '../../types/project'

const props = defineProps<{
  links: ProjectLinks
}>()

const hasLinks = computed(() => Boolean(props.links.demo || props.links.repo || props.links.xianyu || props.links.external.length))
</script>

<style scoped>
.project-links {
  display: grid;
  gap: var(--spacing-lg);
}

.section-heading {
  display: grid;
  gap: var(--spacing-md);
}

.section-heading h2 {
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
}

.section-intro {
  font-size: var(--text-callout);
  color: var(--color-text-secondary);
  margin: 0;
}

.project-link-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--spacing-md);
}

.project-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border-light);
  background: var(--color-bg-secondary);
  color: var(--color-primary);
  font-weight: 600;
  text-align: center;
  font-size: var(--text-callout);
  transition: all var(--transition-base);
  text-decoration: none;
}

.project-link:hover {
  border-color: var(--color-primary);
  background: var(--color-bg-tertiary);
}

.project-link:active {
  transform: scale(0.98);
}

.project-link-xianyu {
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E72 100%);
  color: white;
  border-color: #FF6B6B;
}

.project-link-xianyu:hover {
  background: linear-gradient(135deg, #FF5252 0%, #FF7A5C 100%);
  border-color: #FF5252;
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
}

@media (max-width: 1024px) {
  .project-link-list {
    grid-template-columns: 1fr;
  }
}
</style>
