<template>
  <Navbar :absolute="false" />
  <HeroSection />
  <!-- <TrustedBySection /> -->
  <BrandsSection />
  <AwardsSection />
  <!-- <ExamplesSection /> -->
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

import { useHead } from '@vueuse/head';

useHead({
  title: 'Commercializer | Venture Studio for Market-Leading Products',
  meta: [
    { name: 'description', content: 'Transforming groundbreaking ideas into market-leading products. From strategy and branding to product innovation and launch - get commercialized with us!' },
    { property: 'og:title', content: 'Commercializer | Venture Studio for Market-Leading Products' },
    { property: 'og:description', content: 'Transforming groundbreaking ideas into market-leading products. From strategy and branding to product innovation and launch - get commercialized with us!' },
    { property: 'og:url', content: 'https://www.commercializer.global' },
    { property: 'og:image', content: "https://opengraph.b-cdn.net/production/images/0faa5c61-b1ce-40b3-97fd-3e2173469fc1.png?token=mh1AG4KVf4qqp_sjW2ZxtBXhIq-2ADYt1S4nrSiExro&height=630&width=1200&expires=33274664896"},
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Commercializer' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:domain', content: 'commercializer.global' },
    { property: 'twitter:url', content: 'https://www.commercializer.global' },
    { name: 'twitter:title', content: 'Commercializer | Venture Studio for Market-Leading Products' },
    { name: 'twitter:description', content: 'Transforming groundbreaking ideas into market-leading products. From strategy and branding to product innovation and launch - get commercialized with us!' },
    { name: 'twitter:image', content: "https://opengraph.b-cdn.net/production/images/0faa5c61-b1ce-40b3-97fd-3e2173469fc1.png?token=mh1AG4KVf4qqp_sjW2ZxtBXhIq-2ADYt1S4nrSiExro&height=630&width=1200&expires=33274664896"}
  ]
});
</script>
