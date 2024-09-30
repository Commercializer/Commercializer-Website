<template>
  <Navbar />

  <ContactForm />

  <Branches />

  <Contacts2Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue'
import ContactForm from '@/views/pages/contacts-2/components/ContactForm.vue'
import Branches from '@/views/pages/contacts-2/components/Branches.vue'
import Contacts2Footer from '@/views/pages/contacts-2/components/Contacts2Footer.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
</script>
