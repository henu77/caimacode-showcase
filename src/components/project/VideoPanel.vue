<template>
  <section v-if="videos.length" class="video-panel">
    <div class="section-heading">
      <p>Motion Notes</p>
      <h2>{{ title }}</h2>
      <p class="section-intro">用演示片段补充静态画面无法完整说明的交互节奏与页面切换过程。</p>
    </div>
    <div class="video-grid">
      <article v-for="video in videos" :key="video.title" class="video-card">
        <button
          v-if="activeVideo !== video.embedUrl"
          type="button"
          class="video-trigger"
          @click="activeVideo = video.embedUrl"
        >
          <span class="video-trigger-play">▶</span>
          <span class="video-trigger-text">点击播放视频</span>
        </button>
        <iframe
          v-else
          class="video-embed"
          :src="video.embedUrl"
          :title="video.title"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
import { ref } from 'vue'
import type { ProjectVideo } from '../../types/project'

const activeVideo = ref('')

defineProps<{
  title: string
  videos: ProjectVideo[]
}>()
</script>
