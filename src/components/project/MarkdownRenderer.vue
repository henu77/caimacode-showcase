<template>
  <section class="markdown-panel">
    <div class="section-heading">
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

<style scoped>
.markdown-panel {
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

.markdown-body {
  padding: var(--spacing-2xl);
  max-width: none;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-lg);
}

.markdown-body > :first-child {
  margin-top: 0;
}

.markdown-body > :last-child {
  margin-bottom: 0;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3 {
  color: var(--color-text-primary);
  margin: 1.2em 0 0.4em;
  font-weight: 600;
}

.markdown-body h1 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}

.markdown-body h2 {
  font-size: clamp(1.4rem, 2.4vw, 1.9rem);
}

.markdown-body h3 {
  font-size: var(--text-title);
}

.markdown-body p,
.markdown-body li,
.markdown-body blockquote,
.markdown-body td,
.markdown-body th {
  color: var(--color-text-secondary);
  font-size: var(--text-body);
  line-height: 1.6;
}

.markdown-body p,
.markdown-body ul,
.markdown-body ol,
.markdown-body blockquote,
.markdown-body pre,
.markdown-body table,
.markdown-body hr {
  margin: 0 0 0.8em;
}

.markdown-body ul,
.markdown-body ol {
  padding-left: 1.35rem;
}

.markdown-body li + li {
  margin-top: 0.42em;
}

.markdown-body a {
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

.markdown-body blockquote {
  border-left: 3px solid var(--color-border-light);
  padding: 0.15rem 0 0.15rem 1rem;
}

.markdown-body hr {
  border: 0;
  border-top: 1px solid var(--color-border-light);
}

.markdown-body code {
  font-family: var(--font-mono);
  font-size: 0.92em;
  background: var(--color-bg-secondary);
  padding: 0.16em 0.34em;
  border-radius: var(--radius-sm);
  color: var(--color-primary);
}

.markdown-body pre {
  overflow: auto;
  padding: 1rem;
  border-radius: var(--radius-lg);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-light);
}

.markdown-body pre code {
  background: transparent;
  color: var(--color-text-primary);
  padding: 0;
}

.markdown-body table {
  width: 100%;
  border-collapse: collapse;
}

.markdown-body th,
.markdown-body td {
  border-bottom: 1px solid var(--color-border-light);
  padding: 0.75rem 0.5rem;
  text-align: left;
}

.markdown-body th {
  color: var(--color-text-primary);
  font-weight: 600;
}
</style>
