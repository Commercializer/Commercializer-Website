<template>
    <Navbar :absolute="false" />
    <ContactForm />
    <Branches />
    <FooterSection />
  </template>
  
  <script setup lang="ts">
  import Navbar from '@/layouts/partials/Navbar.vue'
  import Branches from '@/components/contact/Branches.vue'
  import ContactForm from '@/components/contact/ContactForm.vue'
  import FooterSection from '@/components/FooterSection.vue'

  import { useHead } from '@vueuse/head';

  useHead({
  title: 'Get Commercialized | Let’s Build Something Great Together',
  meta: [
    { name: 'description', content: 'Have an idea or project in mind? Get in touch with Commercializer for expert strategy, branding, and product innovation. Let’s turn your vision into reality!' },
    { property: 'og:title', content: 'Get Commercialized | Let’s Build Something Great Together' },
    { property: 'og:description', content: 'Have an idea or project in mind? Get in touch with Commercializer for expert strategy, branding, and product innovation. Let’s turn your vision into reality!' },
    { property: 'og:url', content: 'https://www.commercializer.global/contact' },
    { property: 'og:image', content: "https://opengraph.b-cdn.net/production/images/0faa5c61-b1ce-40b3-97fd-3e2173469fc1.png?token=mh1AG4KVf4qqp_sjW2ZxtBXhIq-2ADYt1S4nrSiExro&height=630&width=1200&expires=33274664896" },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Commercializer' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:domain', content: 'commercializer.global' },
    { property: 'twitter:url', content: 'https://www.commercializer.global/contact' },
    { name: 'twitter:title', content: 'Contact Commercializer | Let’s Build Something Great Together' },
    { name: 'twitter:description', content: 'Have an idea or project in mind? Get in touch with Commercializer for expert strategy, branding, and product innovation. Let’s turn your vision into reality!' },
    { name: 'twitter:image', content: "https://opengraph.b-cdn.net/production/images/0faa5c61-b1ce-40b3-97fd-3e2173469fc1.png?token=mh1AG4KVf4qqp_sjW2ZxtBXhIq-2ADYt1S4nrSiExro&height=630&width=1200&expires=33274664896"}
  ]
});
  </script>