<template>
  <div :class="customClass" :style="customStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onMounted, type PropType } from 'vue'
import Rellax from 'rellax'
import type { RellaxOptions } from 'rellax'

const props = defineProps({
  customClass: String,
  customStyle: Object,
  options: Object as PropType<RellaxOptions>
})

onMounted(() => {
  var rellax = new Rellax('.rellax', {
    ...props.options,
    horizontal: true
  })
})
</script>
