<template>
  <section class="wechat-contact panel">
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
  }>(),
  {
    title: '联系与关注',
    description: '可通过个人微信直接沟通，也可以扫码关注公众号查看项目文章与后续更新。',
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
