<template>
  <section class="video-panel">
    <div class="section-heading">
      <p>Video Clips</p>
      <h2>视频展示</h2>
    </div>
    <div class="video-grid">
      <article v-for="video in videos" :key="video.title" class="video-card">
        <iframe
          v-if="video.type === 'bilibili' && video.embedUrl"
          class="video-embed"
          :src="video.embedUrl"
          :title="video.title"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
        <video
          v-else-if="video.available !== false && video.src"
          class="video-player"
          controls
          playsinline
          :poster="video.poster"
        >
          <source :src="video.src" type="video/mp4" />
          当前浏览器不支持视频播放。
        </video>
        <div v-else class="video-placeholder">
          <span>替换为你的真实项目视频后，这里会直接播放，或直接配置 B 站嵌入地址。</span>
        </div>
        <h3>{{ video.title }}</h3>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ProjectVideo } from '../../types/project'

defineProps<{
  videos: ProjectVideo[]
}>()
</script>
