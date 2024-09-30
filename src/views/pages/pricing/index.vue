<template>
  <Navbar :absolute="false" :is-dark="true" :isTransparent="false" />

  <PricingHero />

  <PricingPlan />

  <PlanComparison />

  <Faqs />

  <Brands />

  <Cta />

  <PricingFooter />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue';
import PricingHero from '@/views/pages/pricing/components/PricingHero.vue';
import PricingPlan from '@/views/pages/pricing/components/PricingPlan.vue';
import PlanComparison from '@/views/pages/pricing/components/PlanComparison.vue';
import Faqs from '@/views/pages/pricing/components/Faqs.vue';
import Brands from '@/views/pages/pricing/components/Brands.vue';
import Cta from '@/views/pages/pricing/components/Cta.vue';
import PricingFooter from '@/views/pages/pricing/components/PricingFooter.vue';
import BackToTop from '@/layouts/partials/BackToTop.vue';
</script>
