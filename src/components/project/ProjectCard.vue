<template>
  <article class="project-card" :style="{ '--project-accent': project.accent }">
    <RouterLink class="card-link" :to="`/project/${project.slug}`">
      <div class="cover-wrap">
        <img class="cover-image" :src="project.cover" :alt="project.title" />
      </div>
      <div class="card-body">
        <p class="subtitle">{{ project.subtitle }}</p>
        <h2>{{ project.title }}</h2>
        <p class="description">{{ project.description }}</p>
        <ul class="tag-list">
          <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
        </ul>
        <span class="card-action">查看详情</span>
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
