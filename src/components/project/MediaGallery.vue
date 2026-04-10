<template>
  <section v-if="images.length" class="media-gallery">
    <div class="section-heading">
      <h2>{{ title }}</h2>
      <p class="section-intro">围绕项目关键节点挑选的画面与界面片段，用来快速建立案例印象。</p>
    </div>
    <div class="gallery-grid">
      <figure
        v-for="(image, index) in images"
        :key="image.src"
        class="gallery-item"
        :class="galleryClass(index)"
      >
        <img :src="image.src" :alt="image.alt" />
        <figcaption v-if="image.caption">{{ image.caption }}</figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ProjectImage } from '../../types/project'

defineProps<{
  images: ProjectImage[]
  title: string
}>()

function galleryClass(index: number) {
  if (index === 0) {
    return 'featured'
  }

  if (index % 3 === 1) {
    return 'wide'
  }

  return ''
}
</script>
