<template>
  <Navbar :absolute="false" :isTransparent="false" />

  <DevAgency1Hero />

  <About />

  <Services />

  <CaseStudies />

  <Feature />

  <Testimonials />

  <Brands />

  <NewsSwiper />

  <Cta />

  <DevAgency1Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue';
import DevAgency1Hero from '@/views/landings/dev-agency-1/components/DevAgency1Hero.vue';
import About from '@/views/landings/dev-agency-1/components/About.vue';
import Services from '@/views/landings/dev-agency-1/components/Services.vue';
import CaseStudies from '@/views/landings/dev-agency-1/components/CaseStudies.vue';
import Feature from '@/views/landings/dev-agency-1/components/Feature.vue';
import Testimonials from '@/views/landings/dev-agency-1/components/Testimonials.vue';
import Brands from '@/views/landings/dev-agency-1/components/Brands.vue';
import NewsSwiper from '@/views/landings/dev-agency-1/components/NewsSwiper.vue';
import Cta from '@/views/landings/dev-agency-1/components/Cta.vue';
import DevAgency1Footer from '@/views/landings/dev-agency-1/components/DevAgency1Footer.vue';
import BackToTop from '@/layouts/partials/BackToTop.vue';
</script>
