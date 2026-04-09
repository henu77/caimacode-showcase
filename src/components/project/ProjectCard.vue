<template>
  <article class="project-card" :style="{ '--project-accent': project.accent }">
    <RouterLink class="card-link" :to="`/project/${project.slug}`">
      <div class="cover-wrap">
        <img class="cover-image" :src="project.cover" :alt="project.title" />
      </div>
      <div class="card-body">
        <div class="card-topline">
          <span class="card-category">{{ project.categories[0] || '案例项目' }}</span>
          <span class="card-year">{{ project.year || project.publishedAt }}</span>
        </div>
        <p class="subtitle">{{ project.subtitle }}</p>
        <h2>{{ project.title }}</h2>
        <p class="description">{{ project.summary }}</p>
        <ul v-if="project.highlights.length" class="card-highlights">
          <li v-for="highlight in project.highlights.slice(0, 2)" :key="highlight">{{ highlight }}</li>
        </ul>
        <div class="card-footer">
          <ul class="tag-list">
            <li v-for="tag in project.tags.slice(0, 3)" :key="tag">{{ tag }}</li>
          </ul>
          <span class="card-action">阅读案例</span>
        </div>
      </div>
    </RouterLink>
  </article>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { ProjectItem } from '../../types/project'

defineProps<{
  project: ProjectItem
}>()
</script>
