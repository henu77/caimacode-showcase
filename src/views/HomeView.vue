<template>
  <main class="page home-page">
    <section class="home-topbar">
      <SiteHeader />
      <div class="search-panel panel">
        <label class="search-label" for="project-search">搜索项目</label>
        <input
          id="project-search"
          v-model.trim="searchQuery"
          class="search-input"
          type="search"
          placeholder="搜索标题、摘要、标签或分类"
        />
      </div>
    </section>

    <section class="project-list-section">
      <div class="section-heading">
        <h2>项目预览</h2>
        <p class="section-intro">
          <template v-if="searchQuery">当前显示 {{ filteredProjects.length }} 个与"{{ searchQuery }}"相关的项目。</template>
        </p>
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

      <section v-else-if="!filteredProjects.length" class="panel missing-panel">
        <p class="section-label">EMPTY</p>
        <h2>没有找到匹配项目。</h2>
        <p>请尝试其他关键词。</p>
      </section>

      <div v-else class="project-grid unified-grid">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.slug"
          :project="project"
          :highlight="searchQuery"
        />
      </div>
    </section>

    <WechatContactSection />
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import SiteHeader from '../components/layout/SiteHeader.vue'
import WechatContactSection from '../components/layout/WechatContactSection.vue'
import ProjectCard from '../components/project/ProjectCard.vue'
import { loadProjects } from '../content/projects'
import type { ProjectItem } from '../types/project'

const projects = ref<ProjectItem[]>([])
const isLoading = ref(true)
const errorMessage = ref('')
const searchQuery = ref('')

const filteredProjects = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  if (!query) {
    return projects.value
  }

  return projects.value.filter((project) => {
    const haystack = [
      project.title,
      project.subtitle,
      project.summary,
      project.description,
      project.tags.join(' '),
      project.categories.join(' '),
      project.highlights.join(' '),
    ]
      .join(' ')
      .toLowerCase()

    return haystack.includes(query)
  })
})

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
