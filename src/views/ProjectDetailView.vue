<template>
  <main v-if="isLoading" class="page missing-page">
    <section class="panel missing-panel">
      <p class="section-label">LOADING</p>
      <h1>正在加载项目内容...</h1>
    </section>
  </main>

  <main v-else-if="project" class="page detail-page" :style="{ '--project-accent': project.accent }">
    <FloatingNav />

    <div class="detail-shell">
      <div class="detail-topbar">
        <RouterLink class="back-link" to="/">← 返回首页</RouterLink>
      </div>

      <section class="detail-hero panel">
        <div class="detail-copy">
          <p class="hero-kicker">{{ project.subtitle }}</p>
          <h1>{{ project.title }}</h1>
          <p class="detail-summary">{{ project.summary }}</p>
          <p class="detail-description">{{ project.description }}</p>
          <div v-if="project.meta.length" class="detail-meta">
            <article v-for="item in project.meta" :key="`${item.label}-${item.value}`" class="meta-item">
              <span class="meta-label">{{ item.label }}</span>
              <span class="meta-value">{{ item.value }}</span>
            </article>
          </div>
          <ul v-if="project.highlights.length" class="highlight-list">
            <li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li>
          </ul>
          <ul class="tag-list">
            <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
          </ul>
        </div>
        <div class="detail-cover-column">
          <div class="detail-cover-wrap">
            <img class="detail-cover" :src="project.cover" :alt="project.title" />
          </div>
        </div>
      </section>

      <MediaGallery :images="project.gallery.images" :title="project.gallery.title" />
      <VideoPanel :title="project.videos.title" :videos="project.videos.items" />
      <ProjectLinksPanel :links="project.links" />
      <MarkdownRenderer :html="renderedReadme" :title="project.readme.title" />
      <WechatContactSection id="contact" title="联系与关注" description="欢迎扫码联系，或通过项目页中的公众号文章链接继续查看更完整的项目说明。" />
    </div>
  </main>

  <main v-else class="page missing-page">
    <section class="panel missing-panel">
      <p class="section-label">NOT FOUND</p>
      <h1>没有找到这个项目。</h1>
      <p v-if="errorMessage">{{ errorMessage }}</p>
      <RouterLink class="back-link" to="/">返回首页继续查看</RouterLink>
    </section>
  </main>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import { computed, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import FloatingNav from '../components/common/FloatingNav.vue'
import WechatContactSection from '../components/layout/WechatContactSection.vue'
import MarkdownRenderer from '../components/project/MarkdownRenderer.vue'
import MediaGallery from '../components/project/MediaGallery.vue'
import ProjectLinksPanel from '../components/project/ProjectLinksPanel.vue'
import VideoPanel from '../components/project/VideoPanel.vue'
import { loadProjectBySlug, loadProjectReadme } from '../content/projects'
import type { ProjectItem } from '../types/project'

const markdown = new MarkdownIt({
  html: false,
  breaks: true,
  linkify: true,
})

const route = useRoute()
const project = ref<ProjectItem | null>(null)
const readmeSource = ref('')
const isLoading = ref(true)
const errorMessage = ref('')

const renderedReadme = computed(() => markdown.render(readmeSource.value || '# README 暂未提供'))

async function loadCurrentProject() {
  const slug = String(route.params.slug || '')

  if (!slug) {
    project.value = null
    readmeSource.value = ''
    errorMessage.value = '项目标识无效。'
    isLoading.value = false
    return
  }

  isLoading.value = true
  errorMessage.value = ''

  try {
    const loadedProject = await loadProjectBySlug(slug)
    project.value = loadedProject
    readmeSource.value = await loadProjectReadme(loadedProject)
  } catch {
    project.value = null
    readmeSource.value = ''
    errorMessage.value = '请检查对应目录中的 project.json 是否存在且格式正确。'
  } finally {
    isLoading.value = false
  }
}

onMounted(loadCurrentProject)
watch(() => route.params.slug, loadCurrentProject)
</script>
