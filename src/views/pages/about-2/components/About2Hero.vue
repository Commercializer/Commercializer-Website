<template>
  <Jarallax custom-class="jarallax d-none d-md-block" :options="{ speed: 0.35 }">
    <span
      class="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary-translucent"
    ></span>
    <div class="jarallax-img" :style="{ backgroundImage: `url('${coverImg}')` }"></div>
    <div class="d-none d-xxl-block" style="height: 700px"></div>
    <div class="d-none d-md-block d-xxl-none" style="height: 550px"></div>
  </Jarallax>
</template>

<script setup lang="ts">
import coverImg from '@/assets/img/about/cover.jpg'
import Jarallax from '@/components/Jarallax.vue'
</script>
