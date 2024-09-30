<template>
  <Jarallax custom-class="jarallax" :options="{ speed: 0.4 }">
    <div class="jarallax-img" :style="{ backgroundImage: `url('${heroImg}')` }"></div>
    <div class="d-none d-xxl-block" style="height: 800px"></div>
    <div class="d-none d-lg-block d-xxl-none" style="height: 600px"></div>
    <div class="d-none d-md-block d-lg-none" style="height: 450px"></div>
    <div class="d-md-none" style="height: 400px"></div>
  </Jarallax>
</template>

<script setup lang="ts">
import heroImg from '@/assets/img/portfolio/single/hero.jpg'
import Jarallax from '@/components/Jarallax.vue'
</script>
