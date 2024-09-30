<template>
  <Navbar :absolute="false" />

  <b-nav class="container py-4 mb-lg-2" aria-label="breadcrumb">
    <b-breadcrumb class="pt-lg-3 mb-0">
      <b-breadcrumb-item href="/">
        <Icon :icon="HomeAltIcon" class="fs-lg me-1" />
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item active>Services v.2</b-breadcrumb-item>
    </b-breadcrumb>
  </b-nav>

  <!-- Page title -->
  <h1 class="container pb-4 mt-n1 mt-lg-0">Services v.2</h1>

  <Services />

  <Feature />

  <Contact />

  <Service2Footer />

  <BackToTop />
</template>

<script lang="ts" setup>
import Navbar from '@/layouts/partials/Navbar.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
import Services from '@/views/pages/services-2/components/Services.vue'
import Feature from '@/views/pages/services-2/components/Feature.vue'
import Contact from '@/views/pages/services-2/components/Contact.vue'
import Service2Footer from '@/views/pages/services-2/components/Service2Footer.vue'
import { Icon } from '@iconify/vue'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'
</script>
