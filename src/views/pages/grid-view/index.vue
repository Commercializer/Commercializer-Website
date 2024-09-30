<template>
  <Navbar :absolute="false" />

  <b-nav class="container py-4 mb-lg-2 mt-lg-3" aria-label="breadcrumb">
    <b-breadcrumb class="mb-0">
      <b-breadcrumb-item href="/">
        <Icon :icon="HomeAltIcon" class="fs-lg me-1" />
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item active>Portfolio Grid View</b-breadcrumb-item>
    </b-breadcrumb>
  </b-nav>

  <PageTitle />

  <Grid />

  <Cta />

  <GridFooter />

  <BackToTop />
</template>

<script lang="ts" setup>
import Navbar from '@/layouts/partials/Navbar.vue'
import PageTitle from '@/views/pages/grid-view/components/PageTitle.vue'
import Grid from '@/views/pages/grid-view/components/Grid.vue'
import Cta from '@/views/pages/grid-view/components/Cta.vue'
import GridFooter from '@/views/pages/grid-view/components/GridFooter.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
import { Icon } from '@iconify/vue'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'
</script>
