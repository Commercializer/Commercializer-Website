<template>
  <Navbar is-dark />

  <DevAgency2Hero />

  <Services />

  <Awards />

  <CaseStudies />

  <ClientReview />

  <Cta />

  <DevAgency2Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue'
import DevAgency2Hero from '@/views/landings/dev-agency-2/components/DevAgency2Hero.vue'
import Services from '@/views/landings/dev-agency-2/components/Services.vue'
import Awards from '@/views/landings/dev-agency-2/components/Awards.vue'
import CaseStudies from '@/views/landings/dev-agency-2/components/CaseStudies.vue'
import ClientReview from '@/views/landings/dev-agency-2/components/ClientReview.vue'
import Cta from '@/views/landings/dev-agency-2/components/Cta.vue'
import DevAgency2Footer from '@/views/landings/dev-agency-2/components/DevAgency2Footer.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
</script>
