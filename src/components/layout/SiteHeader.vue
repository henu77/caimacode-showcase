<template>
  <header class="site-header">
    <RouterLink class="brand-link" to="/">
      <span class="brand-mark">CM</span>
      <div class="brand-copy">
        <p class="brand-eyebrow">菜码编程 · CASEBOOK</p>
        <h1>中文前端案例站</h1>
      </div>
    </RouterLink>
    <p class="site-description">
      以中文排版与前端实现为基础，把品牌介绍、项目画面、演示视频与项目说明整理成一套可持续扩展的案例档案。
    </p>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
