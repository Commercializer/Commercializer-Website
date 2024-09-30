<template>
  <Navbar :fixedTop="true" :isTransparent="false" :absolute="false" :navbarSticky="false" :stuck="true" :isBorder="true" />

  <Slides />

  <SliderFooter />

  <BackToTop />
</template>

<script lang="ts" setup>
import Navbar from '@/layouts/partials/Navbar.vue';
import Slides from '@/views/pages/slider/components/Slides.vue';
import SliderFooter from '@/views/pages/slider/components/SliderFooter.vue';
import BackToTop from '@/layouts/partials/BackToTop.vue';
</script>
