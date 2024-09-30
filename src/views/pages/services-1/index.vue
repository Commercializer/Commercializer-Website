<template>
  <main class="position-relative zindex-2">
    <Navbar :absolute="true" />

    <PageTitle />

    <Testimonial />

    <Feature />

    <Contact />
  </main>

  <ServiceFooter />

  <BackToTop />
</template>

<script lang="ts" setup>
import Navbar from '@/layouts/partials/Navbar.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
import PageTitle from '@/views/pages/services-1/components/PageTitle.vue'
import Testimonial from '@/views/pages/services-1/components/Testimonial.vue'
import Feature from '@/views/pages/services-1/components/Feature.vue'
import Contact from '@/views/pages/services-1/components/Contact.vue'
import ServiceFooter from './components/ServiceFooter.vue'
</script>
