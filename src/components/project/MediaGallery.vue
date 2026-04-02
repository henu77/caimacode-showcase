<template>
  <section class="media-gallery">
    <div class="section-heading">
      <p>Image Gallery</p>
      <h2>项目图片</h2>
    </div>
    <div class="gallery-grid">
      <figure v-for="(image, index) in images" :key="image" class="gallery-item">
        <img :src="image" :alt="`${title} 图片 ${index + 1}`" />
      </figure>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  images: string[]
  title: string
}>()
</script>
