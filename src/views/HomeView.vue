<template>
  <main class="page home-page">
    <section class="home-hero">
      <section class="hero-panel panel">
        <SiteHeader />
        <div class="hero-copy">
          <p class="hero-kicker">中文排版 · 前端实现 · 案例叙事</p>
          <h2>把作品做成能阅读、能浏览、也能持续扩展的中文案例站。</h2>
          <p>
            这里不是单纯堆放截图的项目目录，而是把品牌表达、关键画面、演示片段与项目说明整理成一套有秩序的浏览体验。
          </p>
        </div>
      </section>

      <section class="manifesto-panel panel">
        <div class="section-heading">
          <p>方法概览</p>
          <h3>用更适合中文阅读的节奏，组织前端项目的展示方式。</h3>
        </div>
        <p>
          从首页首屏到项目详情，这个站点强调的是案例如何被讲清楚：先建立气质，再呈现画面，再补上视频与说明，让每个项目都更像一篇完整的案例记录。
        </p>
        <ul class="tag-list">
          <li>首页品牌叙事</li>
          <li>案例化详情页</li>
          <li>Markdown 长文容器</li>
        </ul>
      </section>
    </section>

    <section class="practice-section">
      <div class="section-heading">
        <p>实践维度</p>
        <h2>围绕内容、界面与阅读体验组织项目。</h2>
      </div>
      <div class="practice-grid">
        <article class="practice-card">
          <strong>品牌与入口</strong>
          <p>让首页先建立明确的气质与定位，而不是直接落入模板化项目列表。</p>
        </article>
        <article class="practice-card">
          <strong>案例与演示</strong>
          <p>把图片、视频和元信息按阅读顺序排列，让浏览过程更像翻阅案例而不是切换模块。</p>
        </article>
        <article class="practice-card">
          <strong>正文与沉淀</strong>
          <p>保留 README 的维护便利，同时给它更适合中文长文阅读的排版容器。</p>
        </article>
      </div>
    </section>

    <section class="project-list-section">
      <div class="section-heading">
        <p>精选案例</p>
        <h2>最近整理的前端展示与教学案例。</h2>
        <p class="section-intro">项目继续通过数据配置扩展，但每一个入口都按案例阅读的方式呈现。</p>
      </div>

      <section v-if="isLoading" class="panel missing-panel">
        <p class="section-label">LOADING</p>
        <h2>正在加载项目内容...</h2>
      </section>

      <section v-else-if="errorMessage" class="panel missing-panel">
        <p class="section-label">UNAVAILABLE</p>
        <h2>内容暂时不可用</h2>
        <p>{{ errorMessage }}</p>
      </section>

      <template v-else>
        <section v-if="featuredProjects.length" class="project-collection">
          <div class="section-heading section-heading-inline">
            <div>
              <p>Featured</p>
              <h2>重点案例</h2>
            </div>
          </div>
          <div class="project-grid featured-grid">
            <ProjectCard v-for="project in featuredProjects" :key="project.slug" :project="project" />
          </div>
        </section>

        <section v-if="archiveProjects.length" class="project-collection">
          <div class="section-heading section-heading-inline">
            <div>
              <p>Archive</p>
              <h2>案例档案</h2>
            </div>
          </div>
          <div class="project-grid archive-grid">
            <ProjectCard v-for="project in archiveProjects" :key="project.slug" :project="project" />
          </div>
        </section>
      </template>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import SiteHeader from '../components/layout/SiteHeader.vue'
import ProjectCard from '../components/project/ProjectCard.vue'
import { loadProjects } from '../content/projects'
import type { ProjectItem } from '../types/project'

const projects = ref<ProjectItem[]>([])
const isLoading = ref(true)
const errorMessage = ref('')

const featuredProjects = computed(() => projects.value.filter((project) => project.featured))
const archiveProjects = computed(() => projects.value.filter((project) => !project.featured))

onMounted(async () => {
  try {
    projects.value = await loadProjects()
  } catch {
    errorMessage.value = '请检查 public/projects.json 与项目配置文件是否可访问。'
  } finally {
    isLoading.value = false
  }
})
</script>
