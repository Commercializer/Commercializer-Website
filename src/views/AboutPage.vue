<template>
  <Navbar :absolute="false" />
  <AboutTitle />
  <MapSection />
  <Deliverables />
  <Testimonials />
  <BottomBannerSection />
  <FooterSection />
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue'
import AboutTitle from '@/components/about/AboutTitle.vue'
import MapSection from '@/components/about/MapSection.vue'
import Deliverables from '@/components/about/Deliverables.vue'
import Testimonials from '@/components/about/TestimonialSection.vue'
import BottomBannerSection from '@/components/BottomBannerSection.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>
