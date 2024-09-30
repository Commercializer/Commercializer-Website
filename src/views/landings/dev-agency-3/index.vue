<template>
  <Navbar is-dark />

  <DevAgency3Hero />

  <About />

  <Solutions />

  <Industries />

  <Technologies />

  <Projects />

  <Benefits />

  <Brands />

  <Blog />

  <DevAgency3Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue'
import DevAgency3Hero from '@/views/landings/dev-agency-3/components/DevAgency3Hero.vue'
import About from '@/views/landings/dev-agency-3/components/About.vue'
import Solutions from '@/views/landings/dev-agency-3/components/Solutions.vue'
import Industries from '@/views/landings/dev-agency-3/components/Industries.vue'
import Technologies from '@/views/landings/dev-agency-3/components/Technologies.vue'
import Projects from '@/views/landings/dev-agency-3/components/Projects.vue'
import Benefits from '@/views/landings/dev-agency-3/components/Benefits.vue'
import Brands from '@/views/landings/dev-agency-3/components/Brands.vue'
import Blog from '@/views/landings/dev-agency-3/components/Blog.vue'
import DevAgency3Footer from '@/views/landings/dev-agency-3/components/DevAgency3Footer.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
</script>
