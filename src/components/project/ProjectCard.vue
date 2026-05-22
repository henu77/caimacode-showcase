<template>
  <article class="project-card">
    <RouterLink class="card-link" :to="`/project/${project.slug}`">
      <div class="cover-wrap">
        <img class="cover-image" :src="project.cover" :alt="project.title" />
      </div>

      <div class="card-body">
        <div class="card-meta">
          <span class="card-category">{{ project.categories[0] || '案例项目' }}</span>
          <span class="card-year">{{ project.year || project.publishedAt }}</span>
        </div>

        <h2 class="card-title" v-html="highlightedTitle"></h2>
        <p class="card-subtitle" v-html="highlightedSubtitle"></p>
        <p class="card-description" v-html="highlightedSummary"></p>

        <div class="card-footer">
          <ul class="tag-list">
            <li v-for="tag in project.tags.slice(0, 2)" :key="tag">{{ tag }}</li>
          </ul>
          <span class="card-action">→</span>
        </div>
      </div>
    </RouterLink>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { ProjectItem } from '../../types/project'

interface Props {
  project: ProjectItem
  highlight?: string
}

const props = withDefaults(defineProps<Props>(), {
  highlight: '',
})

const highlightText = (text: string, query: string): string => {
  if (!query) return text
  const regex = new RegExp(`(${query})`, 'gi')
  return text.replace(regex, '<mark class="search-highlight">$1</mark>')
}

const highlightedTitle = computed(() => highlightText(props.project.title, props.highlight))
const highlightedSubtitle = computed(() => highlightText(props.project.subtitle, props.highlight))
const highlightedSummary = computed(() => highlightText(props.project.summary, props.highlight))
</script>

<style scoped>
.project-card {
  border: 1px solid var(--color-border-light);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-base);
}

.project-card:hover {
  background: var(--color-bg-secondary);
  border-color: var(--color-primary);
}

.card-link {
  display: grid;
  min-height: 100%;
  text-decoration: none;
}

.cover-wrap {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--color-bg-secondary);
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  display: grid;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
}

.card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
}

.card-category {
  font-size: var(--text-callout);
  letter-spacing: 0.12em;
  color: var(--color-primary);
  font-weight: 600;
}

.card-year {
  font-size: var(--text-callout);
  color: var(--color-text-secondary);
}

.card-title {
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  color: var(--color-text-primary);
  font-weight: 600;
  line-height: var(--line-height-tight);
  margin: 0;
}

.card-subtitle {
  font-size: var(--text-callout);
  color: var(--color-text-secondary);
  margin: 0;
}

.card-description {
  font-size: var(--text-callout);
  color: var(--color-text-secondary);
  margin: 0;
  line-height: var(--line-height-normal);
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  list-style: none;
  margin: 0;
  padding: 0;
}

.tag-list li {
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border-light);
  background: var(--color-bg-secondary);
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--text-footnote);
  color: var(--color-text-secondary);
  transition: all var(--transition-base);
}

.tag-list li:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.card-action {
  font-weight: 600;
  color: var(--color-primary);
  font-size: var(--text-body);
}

:deep(.search-highlight) {
  background: rgba(0, 122, 255, 0.2);
  color: var(--color-primary);
  font-weight: 600;
  padding: 0 2px;
  border-radius: 2px;
}
</style>
