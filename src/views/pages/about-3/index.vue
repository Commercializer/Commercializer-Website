<template>
  <Navbar is-dark />

  <About3Hero />

  <Story />

  <Location />

  <Team />

  <Stats />

  <Testimonial />

  <Cta />

  <About3Footer />

  <BackToTop />
</template>

<script lang="ts" setup>
import Navbar from '@/layouts/partials/Navbar.vue'
import About3Hero from '@/views/pages/about-3/components/About3Hero.vue'
import Story from '@/views/pages/about-3/components/Story.vue'
import Location from '@/views/pages/about-3/components/Location.vue'
import Team from '@/views/pages/about-3/components/Team.vue'
import Stats from '@/views/pages/about-3/components/Stats.vue'
import Testimonial from '@/views/pages/about-3/components/Testimonial.vue'
import Cta from '@/views/pages/about-3/components/Cta.vue'
import About3Footer from '@/views/pages/about-3/components/About3Footer.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
</script>
