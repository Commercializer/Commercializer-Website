<template>
  <div :class="customClass" :style="customStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { jarallax } from 'jarallax'
import { type PropType } from 'vue'
import type { JarallaxOptions } from 'jarallax'

const props = defineProps({
  customClass: String,
  customStyle: Object,
  options: Object as PropType<JarallaxOptions>
})

onMounted(() => {
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.4,
    ...props.options
  })
})
</script>
