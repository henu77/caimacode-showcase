<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div v-if="isOpen" class="lightbox-overlay" @click="close">
        <div class="lightbox-content" @click.stop>
          <button class="lightbox-close" @click="close" aria-label="关闭">×</button>

          <div class="lightbox-image-container">
            <img
              :src="currentImage.src"
              :alt="currentImage.alt"
              class="lightbox-image"
              @load="onImageLoad"
            />
          </div>

          <div v-if="currentImage.caption" class="lightbox-caption">{{ currentImage.caption }}</div>

          <div class="lightbox-nav">
            <button
              v-if="hasPrev"
              class="lightbox-btn lightbox-prev"
              @click="prev"
              aria-label="上一张"
            >
              ←
            </button>
            <button
              v-if="hasNext"
              class="lightbox-btn lightbox-next"
              @click="next"
              aria-label="下一张"
            >
              →
            </button>
          </div>

          <div class="lightbox-counter">{{ currentIndex + 1 }} / {{ images.length }}</div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { ProjectImage } from '../../types/project'

interface Props {
  images: ProjectImage[]
  initialIndex?: number
}

const props = withDefaults(defineProps<Props>(), {
  initialIndex: 0,
})

const isOpen = ref(false)
const currentIndex = ref(props.initialIndex)

const currentImage = computed(() => props.images[currentIndex.value])
const hasPrev = computed(() => currentIndex.value > 0)
const hasNext = computed(() => currentIndex.value < props.images.length - 1)

const open = (index: number = 0) => {
  currentIndex.value = index
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

const close = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

const prev = () => {
  if (hasPrev.value) {
    currentIndex.value--
  }
}

const next = () => {
  if (hasNext.value) {
    currentIndex.value++
  }
}

const onImageLoad = () => {
  // 图片加载完成，确保显示完整
}

const handleKeydown = (e: KeyboardEvent) => {
  if (!isOpen.value) return

  if (e.key === 'Escape') close()
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

defineExpose({ open, close })
</script>

<style scoped>
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--spacing-lg);
  overflow: auto;
}

.lightbox-content {
  position: relative;
  max-width: 95vw;
  max-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.lightbox-image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 90vw;
  max-height: 80vh;
  overflow: auto;
}

.lightbox-image {
  width: auto;
  height: auto;
  max-width: 90vw;
  max-height: 80vh;
  object-fit: contain;
  border-radius: var(--radius-lg);
}

.lightbox-caption {
  color: rgba(255, 255, 255, 0.7);
  font-size: var(--text-callout);
  margin-top: var(--spacing-md);
  text-align: center;
  max-width: 90vw;
  word-break: break-word;
}

.lightbox-close {
  position: absolute;
  top: var(--spacing-lg);
  right: var(--spacing-lg);
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-md);
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all var(--transition-base);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 var(--spacing-lg);
  pointer-events: none;
  width: 100%;
}

.lightbox-btn {
  pointer-events: all;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-md);
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all var(--transition-base);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lightbox-counter {
  position: absolute;
  bottom: var(--spacing-lg);
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.7);
  font-size: var(--text-callout);
  background: rgba(0, 0, 0, 0.5);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 300ms ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

@media (max-width: 720px) {
  .lightbox-overlay {
    padding: var(--spacing-md);
  }

  .lightbox-image-container {
    max-width: 95vw;
    max-height: 70vh;
  }

  .lightbox-image {
    max-width: 95vw;
    max-height: 70vh;
  }

  .lightbox-nav {
    padding: 0 var(--spacing-md);
  }

  .lightbox-btn {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .lightbox-close {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
}
</style>
