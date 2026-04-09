<template>
  <section class="markdown-panel">
    <div class="section-heading">
      <p>Project Narrative</p>
      <h2>{{ title }}</h2>
      <p class="section-intro">将项目背景、实现方式与复盘内容整理为适合持续维护的案例正文。</p>
    </div>
    <div class="markdown-body" v-html="html"></div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  html: string
  title: string
}>()
</script>
