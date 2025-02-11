<template>
  <RouterView />
  <!-- <CookieBanner v-if="bannerMounted" /> -->
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { onMounted, ref} from 'vue'
import CookieBanner from '@/components/CookieBanner.vue'

import SmoothScroll from 'smooth-scroll'

const bannerMounted = ref(false)

onMounted(() => {
  var scroll = new SmoothScroll('a[href*="#"]')
  setTimeout(() => {
    bannerMounted.value = true
  }, 50) 
})
</script>
