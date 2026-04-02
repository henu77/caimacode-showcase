<template>
  <header class="site-header">
    <RouterLink class="brand-link" to="/">
      <span class="brand-mark">CM</span>
      <div>
        <p class="brand-eyebrow">CAIMACODE SHOWCASE</p>
        <h1>菜码编程</h1>
      </div>
    </RouterLink>
    <p class="site-description">用前端把项目故事、图片演示、视频片段和 README 汇聚到一个作品集里。</p>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
