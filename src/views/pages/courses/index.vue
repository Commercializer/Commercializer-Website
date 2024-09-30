<template>
  <Navbar :absolute="false" />

  <b-container>
    <nav class="pt-4 mt-lg-3" aria-label="breadcrumb">
      <b-breadcrumb class="mb-0">
        <b-breadcrumb-item href="/">
          <Icon :icon="HomeAltIcon" class="fs-lg me-1" />
          Home
        </b-breadcrumb-item>
        <b-breadcrumb-item active>Courses</b-breadcrumb-item>
      </b-breadcrumb>
    </nav>

    <PageTitle />

    <Content />

    <Cta />

    <CoursesFooter />

    <BackToTop />
  </b-container>
</template>

<script lang="ts" setup>
import Navbar from '@/layouts/partials/Navbar.vue'
import PageTitle from '@/views/pages/courses/components/PageTitle.vue'
import Content from '@/views/pages/courses/components/Content.vue'
import Cta from '@/views/pages/courses/components/Cta.vue'
import CoursesFooter from '@/views/pages/courses/components/CoursesFooter.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
import { Icon } from '@iconify/vue'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'
</script>
