<template>
  <Navbar :absolute="false" />

  <StartupHero />

  <Feature />

  <Hotspots />

  <Work />

  <Cta />

  <RegistraionCard />

  <Benefits />

  <StartupFooter />

  <BackToTop />
</template>

<script lang="ts" setup>
import Navbar from '@/layouts/partials/Navbar.vue'
import StartupHero from '@/views/landings/startup/components/StartupHero.vue'
import Feature from '@/views/landings/startup/components/Feature.vue'
import Hotspots from '@/views/landings/startup/components/Hotspots.vue'
import Work from '@/views/landings/startup/components/Work.vue'
import Cta from '@/views/landings/startup/components/Cta.vue'
import RegistraionCard from '@/views/landings/startup/components/RegistraionCard.vue'
import Benefits from '@/views/landings/startup/components/Benefits.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
import StartupFooter from '@/views/landings/startup/components/StartupFooter.vue'
</script>
