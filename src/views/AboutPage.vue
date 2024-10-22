<template>
  <Navbar :absolute="false" />
  <HeroSection />
  <TrustedBySection />
  <AwardsSection />
  <BrandsSection />
  <ExamplesSection />
  <ProductsSection />
  <BottomBannerSection />
  <FooterSection />
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import TrustedBySection from '@/components/TrustedBySection.vue'
import AwardsSection from '@/components/AwardsSection.vue'
import BrandsSection from '@/components/BrandsSection.vue'
import ExamplesSection from '@/components/ExamplesSection.vue'
import ProductsSection from '@/components/ProductsSection.vue'
import BottomBannerSection from '@/components/BottomBannerSection.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>
