<template>
  <Navbar :absolute="false" />

  <b-nav class="container py-4 my-lg-3" aria-label="breadcrumb">
    <b-breadcrumb class="mb-0">
      <b-breadcrumb-item href="/">
        <Icon :icon="HomeAltIcon" class="fs-lg me-1" />
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item active>Portfolio List View</b-breadcrumb-item>
    </b-breadcrumb>
  </b-nav>

  <PageTitle />

  <List />

  <Cta />

  <ListFooter />

  <BackToTop />
</template>

<script lang="ts" setup>
import Navbar from '@/layouts/partials/Navbar.vue'
import PageTitle from '@/views/pages/list-view/components/PageTitle.vue'
import List from '@/views/pages/list-view/components/List.vue'
import Cta from '@/views/pages/list-view/components/Cta.vue'
import ListFooter from '@/views/pages/list-view/components/ListFooter.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
import { Icon } from '@iconify/vue'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'
</script>
