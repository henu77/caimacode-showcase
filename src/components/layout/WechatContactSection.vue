<template>
  <section class="wechat-contact panel" :id="id">
    <div class="section-heading">
      <h2>{{ title }}</h2>
      <p class="section-intro">{{ description }}</p>
    </div>

    <div class="wechat-contact-grid">
      <article v-for="item in qrItems" :key="item.title" class="wechat-contact-card">
        <img class="wechat-qr-image" :src="item.src" :alt="item.alt" />
        <div class="wechat-contact-copy">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    description?: string
    id?: string
  }>(),
  {
    title: '联系与关注',
    description: '可通过个人微信直接沟通，也可以扫码关注公众号查看项目文章与后续更新。',
    id: undefined,
  },
)

const qrItems = [
  {
    title: '微信个人号',
    description: '适合直接沟通项目交流、合作咨询或继续了解具体实现。',
    src: '/微信个人号二维码.jpg',
    alt: '微信个人号二维码',
  },
  {
    title: '微信公众号',
    description: '用于查看项目文章、阶段总结与后续内容更新。',
    src: '/微信公众号二维码.jpg',
    alt: '微信公众号二维码',
  },
]
</script>

<style scoped>
.wechat-contact {
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

.wechat-contact-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--spacing-lg);
}

.wechat-contact-card {
  display: grid;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border-light);
  background: var(--color-bg-secondary);
}

.wechat-qr-image {
  width: min(100%, 260px);
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border-light);
  background: var(--color-bg-primary);
}

.wechat-contact-copy {
  display: grid;
  gap: var(--spacing-sm);
}

.wechat-contact-copy h3 {
  font-size: var(--text-body);
  color: var(--color-text-primary);
  font-weight: 600;
  margin: 0;
}

.wechat-contact-copy p {
  color: var(--color-text-secondary);
  font-size: var(--text-callout);
  margin: 0;
}

@media (max-width: 1024px) {
  .wechat-contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
