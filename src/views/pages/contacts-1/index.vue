<template>
  <Navbar is-dark />

  <Contacts1Hero />

  <Details />

  <Faqs />

  <Contacts1Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue'
import Contacts1Hero from '@/views/pages/contacts-1/components/Contacts1Hero.vue'
import Details from '@/views/pages/contacts-1/components/Details.vue'
import Faqs from '@/views/pages/contacts-1/components/Faqs.vue'
import Contacts1Footer from '@/views/pages/contacts-1/components/Contacts1Footer.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
</script>
