<template>
  <main v-if="project" class="page detail-page" :style="{ '--project-accent': project.accent }">
    <div class="detail-shell">
      <div class="detail-topbar">
        <RouterLink class="back-link" to="/">← 返回首页</RouterLink>
      </div>

      <section class="detail-hero panel">
        <div class="detail-copy">
          <p class="hero-kicker">{{ project.subtitle }}</p>
          <h1>{{ project.title }}</h1>
          <p class="detail-description">{{ project.description }}</p>
          <ul class="tag-list">
            <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
          </ul>
        </div>
        <div class="detail-cover-wrap">
          <img class="detail-cover" :src="project.cover" :alt="project.title" />
        </div>
      </section>

      <MediaGallery :images="project.gallery" :title="project.title" />
      <VideoPanel :videos="project.videos" />
      <MarkdownRenderer :html="renderedReadme" />
    </div>
  </main>

  <main v-else class="page missing-page">
    <section class="panel missing-panel">
      <p class="section-label">NOT FOUND</p>
      <h1>没有找到这个项目。</h1>
      <RouterLink class="back-link" to="/">返回首页继续查看</RouterLink>
    </section>
  </main>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import MarkdownRenderer from '../components/project/MarkdownRenderer.vue'
import MediaGallery from '../components/project/MediaGallery.vue'
import VideoPanel from '../components/project/VideoPanel.vue'
import { projects, readmeContentByKey } from '../content/projects'

const markdown = new MarkdownIt({
  html: false,
  breaks: true,
  linkify: true,
})

const route = useRoute()

const project = computed(() =>
  projects.find((item) => item.slug === String(route.params.slug)),
)

const renderedReadme = computed(() => {
  if (!project.value) {
    return ''
  }

  const rawReadme = readmeContentByKey[project.value.readmeKey] ?? '# README 暂未提供'
  return markdown.render(rawReadme)
})
</script>
