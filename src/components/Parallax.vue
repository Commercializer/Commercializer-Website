<template>
  <div :class="customClass" :style="customStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Parallax from 'parallax-js'

defineProps({
  customClass: String,
  customStyle: Object
})

onMounted(() => {
  const element = document.querySelectorAll<HTMLElement>('.parallax')
  for (let i = 0; i < element.length; i++) {
    new Parallax(element[i])
  }
})
</script>
