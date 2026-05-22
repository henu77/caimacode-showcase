<template>
  <section v-if="images.length" class="media-gallery" id="gallery">
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
        @click="openLightbox(index)"
      >
        <img :src="image.src" :alt="image.alt" />
        <figcaption v-if="image.caption">{{ image.caption }}</figcaption>
      </figure>
    </div>

    <ImageLightbox ref="lightboxRef" :images="images" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ProjectImage } from '../../types/project'
import ImageLightbox from '../common/ImageLightbox.vue'

defineProps<{
  images: ProjectImage[]
  title: string
}>()

const lightboxRef = ref<InstanceType<typeof ImageLightbox>>()

function galleryClass(index: number) {
  if (index === 0) {
    return 'featured'
  }

  if (index % 3 === 1) {
    return 'wide'
  }

  return ''
}

function openLightbox(index: number) {
  lightboxRef.value?.open(index)
}
</script>

<style scoped>
.media-gallery {
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

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--spacing-md);
}

.gallery-item {
  grid-column: span 4;
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  display: grid;
  gap: var(--spacing-sm);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-light);
  margin: 0;
  cursor: pointer;
  transition: all var(--transition-base);
}

.gallery-item:hover {
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

.gallery-item.featured {
  grid-column: span 7;
}

.gallery-item.wide {
  grid-column: span 5;
}

.gallery-item img {
  border-radius: var(--radius-lg);
  aspect-ratio: 16 / 10;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-item figcaption {
  font-size: var(--text-footnote);
  color: var(--color-text-secondary);
  margin: 0;
}

@media (max-width: 1024px) {
  .gallery-item,
  .gallery-item.featured,
  .gallery-item.wide {
    grid-column: span 12;
  }
}
</style>
