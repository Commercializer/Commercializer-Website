<template>
  <Navbar :absolute="false" />

  <div class="position-relative">
    <div
      class="position-absolute top-0 start-0 w-100 h-100 d-dark-mode-none"
      style="background: linear-gradient(141deg, rgba(255, 255, 255, 0.01) 17.3%, #f3f6ff 78.21%)"
    ></div>
    <div
      class="position-absolute top-0 start-0 w-100 h-100 d-none d-dark-mode-block"
      style="
        background: linear-gradient(
          141deg,
          rgba(11, 15, 25, 0.01) 17.3%,
          rgba(255, 255, 255, 0.04) 78.21%
        );
      "
    ></div>

    <MobileApp3Hero />

    <Integration />

    <Feature />

    <ProcessSwiper />
  </div>
  <Functionality />

  <Benefits />

  <Testimonial />

  <Purchase />

  <MobileApp3Footer />

  <BackToTop />
</template>

<script lang="ts" setup>
import Navbar from '@/layouts/partials/Navbar.vue'
import MobileApp3Hero from '@/views/landings/mobile-app-3/components/MobileApp3Hero.vue'
import Integration from '@/views/landings/mobile-app-3/components/Integration.vue'
import Feature from '@/views/landings/mobile-app-3/components/Feature.vue'
import ProcessSwiper from '@/views/landings/mobile-app-3/components/ProcessSwiper.vue'
import Functionality from '@/views/landings/mobile-app-3/components/Functionality.vue'
import Benefits from '@/views/landings/mobile-app-3/components/Benefits.vue'
import Testimonial from '@/views/landings/mobile-app-3/components/Testimonial.vue'
import Purchase from '@/views/landings/mobile-app-3/components/Purchase.vue'
import MobileApp3Footer from '@/views/landings/mobile-app-3/components/MobileApp3Footer.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
</script>
