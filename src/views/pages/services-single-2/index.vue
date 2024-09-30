<template>
  <Navbar :absolute="false" />

  <Single2Hero />

  <DentalService />

  <Team />

  <Price />

  <News />

  <Contact />

  <Single2Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue'
import Single2Hero from '@/views/pages/services-single-2/components/Single2Hero.vue'
import DentalService from '@/views/pages/services-single-2/components/DentalService.vue'
import Team from '@/views/pages/services-single-2/components/Team.vue'
import Price from '@/views/pages/services-single-2/components/Price.vue'
import News from '@/views/pages/services-single-2/components/News.vue'
import Contact from '@/views/pages/services-single-2/components/Contact.vue'
import Single2Footer from '@/views/pages/services-single-2/components/Single2Footer.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
</script>
