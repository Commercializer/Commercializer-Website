<template>
  <Navbar is-dark />

  <ProductHero />

  <Section1 />

  <Benefits />

  <Gallery />

  <Specs />

  <Section2 />

  <Cta />

  <ProductFooter />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue'
import ProductHero from '@/views/landings/product/components/ProductHero.vue'
import Section1 from '@/views/landings/product/components/Section1.vue'
import Benefits from '@/views/landings/product/components/Benefits.vue'
import Gallery from '@/views/landings/product/components/Gallery.vue'
import Specs from '@/views/landings/product/components/Specs.vue'
import Section2 from '@/views/landings/product/components/Section2.vue'
import Cta from '@/views/landings/product/components/Cta.vue'
import ProductFooter from '@/views/landings/product/components/ProductFooter.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
</script>
