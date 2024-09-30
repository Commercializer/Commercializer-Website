<template>
  <Navbar :absolute="false" />

  <FinancialHero />

  <Services />

  <CovidBanner />

  <Feature />

  <IndustrieSwiper />

  <Brands />

  <Testimonial />

  <NewsSwiper />

  <Contact />

  <FinancialFooter />

  <BackToTop />
</template>

<script lang="ts" setup>
import Navbar from '@/layouts/partials/Navbar.vue'
import FinancialHero from '@/views/landings/financial/components/FinancialHero.vue'
import Services from '@/views/landings/financial/components/Services.vue'
import CovidBanner from '@/views/landings/financial/components/CovidBanner.vue'
import Feature from '@/views/landings/financial/components/Feature.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
import IndustrieSwiper from '@/views/landings/financial/components/IndustrieSwiper.vue'
import Brands from '@/views/landings/financial/components/Brands.vue'
import Testimonial from '@/views/landings/financial/components/Testimonial.vue'
import NewsSwiper from '@/views/landings/financial/components/NewsSwiper.vue'
import Contact from '@/views/landings/financial/components/Contact.vue'
import FinancialFooter from '@/views/landings/financial/components/FinancialFooter.vue'
</script>
