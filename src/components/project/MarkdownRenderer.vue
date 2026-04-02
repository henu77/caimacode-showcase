<template>
  <section class="markdown-panel">
    <div class="section-heading">
      <p>README</p>
      <h2>项目说明</h2>
    </div>
    <div class="markdown-body" v-html="html"></div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  html: string
}>()
</script>
