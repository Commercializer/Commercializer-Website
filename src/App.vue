<template>
  <CookieBanner />
  <RouterView />
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import CookieBanner from '@/components/CookieBanner.vue'

import SmoothScroll from 'smooth-scroll'

onMounted(() => {
  var scroll = new SmoothScroll('a[href*="#"]')
})
</script>
