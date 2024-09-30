<template>
  <a
    class="btn-scroll-top"
    role="button"
    :class="{ show: isButtonVisible }"
    data-scroll
    @click="backToTop"
  >
    <span class="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
    <Icon :icon="ChevronUpIcon" class="btn-scroll-top-icon bx"></Icon>
  </a>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import ChevronUpIcon from '@iconify/icons-bx/chevron-up'

import { onMounted, ref } from 'vue'

const backToTop = (e: any) => {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

let isButtonVisible = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      isButtonVisible.value = true
    } else {
      isButtonVisible.value = false
    }
  })
})
</script>
