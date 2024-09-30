<template>
  <Navbar />

  <MedicalHero />

  <Feature />

  <VideoReel />

  <Services />

  <Cta />

  <Team />

  <Testimonial />

  <News />

  <Contact />

  <MedicalFooter />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue'
import MedicalHero from '@/views/landings/medical/components/MedicalHero.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
import Feature from '@/views/landings/medical/components/Feature.vue'
import VideoReel from '@/views/landings/medical/components/VideoReel.vue'
import Services from '@/views/landings/medical/components/Services.vue'
import Cta from '@/views/landings/medical/components/Cta.vue'
import Team from '@/views/landings/medical/components/Team.vue'
import Testimonial from '@/views/landings/medical/components/Testimonial.vue'
import News from '@/views/landings/medical/components/News.vue'
import Contact from '@/views/landings/medical/components/Contact.vue'
import MedicalFooter from '@/views/landings/medical/components/MedicalFooter.vue'
</script>
