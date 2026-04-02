<template>
  <main class="page home-page">
    <div class="page-grid">
      <section class="hero-panel panel">
        <SiteHeader />
        <div class="hero-copy">
          <p class="hero-kicker">PURE FRONTEND PORTFOLIO</p>
          <h2>把图片、视频和 README 组合成一个有品牌感的作品展示站。</h2>
          <p>
            这个站点适合持续收纳你的项目案例。首页像作品橱窗，详情页负责讲清楚每个项目的内容、亮点和演示效果。
          </p>
        </div>
        <div class="stats-grid">
          <article class="stat-card">
            <strong>{{ projects.length }}</strong>
            <span>示例项目</span>
          </article>
          <article class="stat-card">
            <strong>README</strong>
            <span>站内直接渲染</span>
          </article>
          <article class="stat-card">
            <strong>Media</strong>
            <span>图片 + 视频双展示</span>
          </article>
        </div>
      </section>

      <section class="intro-panel panel">
        <p class="section-label">WHY THIS STYLE</p>
        <h3>浅色简洁风，适合编程工作室与项目作品集。</h3>
        <p>
          卡片式排版可以先吸引浏览，再通过详情页沉淀内容。你后面只需要替换素材和 README，就能继续扩充整个展示站。
        </p>
      </section>
    </div>

    <section class="project-list-section">
      <div class="section-heading section-heading-inline">
        <div>
          <p>Featured Projects</p>
          <h2>项目展示</h2>
        </div>
      </div>
      <div class="project-grid">
        <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import SiteHeader from '../components/layout/SiteHeader.vue'
import ProjectCard from '../components/project/ProjectCard.vue'
import { projects } from '../content/projects'
</script>
