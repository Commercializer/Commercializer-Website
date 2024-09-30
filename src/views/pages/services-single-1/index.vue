<template>
  <Navbar :absolute="false" />

  <b-nav class="container py-4 mb-md-2 mb-lg-5 mt-lg-3" aria-label="breadcrumb">
    <b-breadcrumb class="mb-0">
      <b-breadcrumb-item href="/">
        <Icon :icon="HomeAltIcon" class="fs-lg me-1" />
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item> Services </b-breadcrumb-item>
      <b-breadcrumb-item active>Software Development</b-breadcrumb-item>
    </b-breadcrumb>
  </b-nav>

  <PageTitle />

  <Feature />

  <Work />

  <Brands />

  <TextSection />

  <Cta />

  <Single1Footer />

  <BackToTop />
</template>

<script lang="ts" setup>
import Navbar from '@/layouts/partials/Navbar.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
import PageTitle from '@/views/pages/services-single-1/Components/PageTitle.vue'
import Feature from '@/views/pages/services-single-1/Components/Feature.vue'
import Work from '@/views/pages/services-single-1/Components/Work.vue'
import Brands from '@/views/pages/services-single-1/Components/Brands.vue'
import TextSection from '@/views/pages/services-single-1/Components/TextSection.vue'
import Cta from '@/views/pages/services-single-1/Components/Cta.vue'
import Single1Footer from '@/views/pages/services-single-1/Components/Single1Footer.vue'
import { Icon } from '@iconify/vue'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'
</script>
