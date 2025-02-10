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

import { useHead } from '@vueuse/head';

useHead({
  title:  'About Commercializer | Innovating, Building & Scaling Ventures',
  meta: [
  { name: 'description', content: 'Discover Commercializer’s mission to transform ideas into thriving businesses. We blend innovation, experience and commercial strategy to build market-leading products.' },
    { property: 'og:title', content: 'About Commercializer | Innovating, Building & Scaling Ventures' },
    { property: 'og:description', content: 'Discover Commercializer’s mission to transform ideas into thriving businesses. We blend innovation, experience and commercial strategy to build market-leading products.' },
    { property: 'og:url', content: 'https://www.commercializer.global/about' },
    { property: 'og:image', content: "https://opengraph.b-cdn.net/production/images/0faa5c61-b1ce-40b3-97fd-3e2173469fc1.png?token=mh1AG4KVf4qqp_sjW2ZxtBXhIq-2ADYt1S4nrSiExro&height=630&width=1200&expires=33274664896"},
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Commercializer' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:domain', content: 'commercializer.global' },
    { property: 'twitter:url', content: 'https://www.commercializer.global/about' },
    { name: 'twitter:title', content: 'About Commercializer  | Innovating, Building & Scaling Ventures' },
    { name: 'twitter:description', content: 'Discover Commercializer’s mission to transform ideas into thriving businesses. We blend innovation, experience and commercial strategy to build market-leading products.' },
    { name: 'twitter:image', content: "https://opengraph.b-cdn.net/production/images/0faa5c61-b1ce-40b3-97fd-3e2173469fc1.png?token=mh1AG4KVf4qqp_sjW2ZxtBXhIq-2ADYt1S4nrSiExro&height=630&width=1200&expires=33274664896"}
  ]
});
</script>
