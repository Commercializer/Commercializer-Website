<template>
  <div :class="customClass" :style="customStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import VanillaTilt from 'vanilla-tilt'
import { onMounted } from 'vue'

const props = defineProps({
  customClass: String,
  customStyle: Object,
  options: Object
})

onMounted(() => {
  let element = document.querySelectorAll('[data-tilt]')
  VanillaTilt.init(element, {
    ...props.options
  })
})
</script>
