<template>
  <Navbar :fixedTop="true" :isTransparent="false" :absolute="false" :navbarSticky="false" :stuck="true" />

  <ConferenceHero />

  <Sponsors />

  <Speakers />

  <Tickets />

  <Highlights />

  <Schedule />

  <Testimonial />

  <Location />

  <Cta />

  <ConferenceFooter />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue';
import ConferenceHero from '@/views/landings/conference/components/ConferenceHero.vue';
import Sponsors from '@/views/landings/conference/components/Sponsors.vue';
import Speakers from '@/views/landings/conference/components/Speakers.vue';
import Tickets from '@/views/landings/conference/components/Tickets.vue';
import Highlights from '@/views/landings/conference/components/Highlights.vue';
import Schedule from '@/views/landings/conference/components/Schedule.vue';
import Testimonial from '@/views/landings/conference/components/Testimonial.vue';
import Location from '@/views/landings/conference/components/Location.vue';
import Cta from '@/views/landings/conference/components/Cta.vue';
import ConferenceFooter from '@/views/landings/conference/components/ConferenceFooter.vue';
import BackToTop from '@/layouts/partials/BackToTop.vue';
</script>
