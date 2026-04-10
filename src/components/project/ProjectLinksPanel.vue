<template>
  <section v-if="hasLinks" class="project-links panel">
    <div class="section-heading">
      <h2>相关链接</h2>
      <p class="section-intro">项目演示、仓库地址与公众号文章等外部内容统一放在这里，便于继续查看。</p>
    </div>

    <div class="project-link-list">
      <a v-if="links.demo" class="project-link" :href="links.demo" target="_blank" rel="noreferrer noopener">在线演示</a>
      <a v-if="links.repo" class="project-link" :href="links.repo" target="_blank" rel="noreferrer noopener">源码仓库</a>
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

const hasLinks = computed(() => Boolean(props.links.demo || props.links.repo || props.links.external.length))
</script>
