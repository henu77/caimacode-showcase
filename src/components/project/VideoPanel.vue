<template>
  <section v-if="videos.length" class="video-panel">
    <div class="section-heading">
      <h2>{{ title }}</h2>
      <p class="section-intro">用演示片段补充静态画面无法完整说明的交互节奏与页面切换过程。</p>
    </div>
    <div class="video-grid">
      <article v-for="video in videos" :key="video.title" class="video-card">
        <iframe
          class="video-embed"
          :src="video.embedUrl"
          :title="video.title"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
        <h3>{{ video.title }}</h3>
        <p v-if="video.description" class="video-description">{{ video.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ProjectVideo } from '../../types/project'

defineProps<{
  title: string
  videos: ProjectVideo[]
}>()
</script>

<style scoped>
.video-panel {
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

.video-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--spacing-lg);
}

.video-card {
  padding: var(--spacing-lg);
  display: grid;
  gap: var(--spacing-md);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.video-embed {
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0;
  border-radius: var(--radius-lg);
  background: var(--color-bg-secondary);
}

.video-card h3 {
  font-size: var(--text-body);
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
}

.video-description {
  font-size: var(--text-callout);
  color: var(--color-text-secondary);
  margin: 0;
}

@media (max-width: 1024px) {
  .video-grid {
    grid-template-columns: 1fr;
  }
}
</style>
