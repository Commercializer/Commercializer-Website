<template>
  <Navbar :absolute="false" />

  <nav class="container py-4 mb-lg-2 mt-lg-3" aria-label="breadcrumb">
    <b-breadcrumb class="mb-0">
      <b-breadcrumb-item href="/">
        <Icon :icon="HomeAltIcon" class="fs-lg me-1" />
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item> Portfolio </b-breadcrumb-item>
      <b-breadcrumb-item active>Single Project</b-breadcrumb-item>
    </b-breadcrumb>
  </nav>
  <!-- Page title -->
  <b-container class="pb-4 mb-2 mb-lg-3">
    <h1>Single Project 3D Rendering of Human Sculpture</h1>
    <p class="text-muted mb-0">NTF / Graphic Design / Art / Identity / Motion Design</p>
  </b-container>

  <SingleProjectHero />

  <AboutProject />

  <Content />

  <Results />

  <Testimonial />

  <ProjectSlider />

  <Cta />

  <SingleProjectFooter />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
import SingleProjectHero from '@/views/pages/single-project/components/SingleProjectHero.vue'
import AboutProject from '@/views/pages/single-project/components/AboutProject.vue'
import Content from '@/views/pages/single-project/components/Content.vue'
import Results from '@/views/pages/single-project/components/Results.vue'
import Testimonial from '@/views/pages/single-project/components/Testimonial.vue'
import ProjectSlider from '@/views/pages/single-project/components/ProjectSlider.vue'
import Cta from '@/views/pages/single-project/components/Cta.vue'
import SingleProjectFooter from '@/views/pages/single-project/components/SingleProjectFooter.vue'
import { Icon } from '@iconify/vue'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'
</script>
