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
  </script>