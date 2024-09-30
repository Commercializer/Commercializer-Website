<template>
  <Navbar is-dark />

  <Saas2Hero />

  <Features />

  <ComparisonSlider />

  <Testimonial />

  <Cta />

  <Pricing />

  <Integration />

  <Saas2Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import Saas2Hero from '@/views/landings/saas-2/components/Saas2Hero.vue'
import Navbar from '@/layouts/partials/Navbar.vue'
import Features from '@/views/landings/saas-2/components/Features.vue'
import ComparisonSlider from '@/views/landings/saas-2/components/ComparisonSlider.vue'
import Testimonial from '@/views/landings/saas-2/components/Testimonial.vue'
import Cta from '@/views/landings/saas-2/components/Cta.vue'
import Pricing from '@/views/landings/saas-2/components/Pricing.vue'
import Integration from '@/views/landings/saas-2/components/Integration.vue'
import Saas2Footer from '@/views/landings/saas-2/components/Saas2Footer.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
</script>
