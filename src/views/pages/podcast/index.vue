<template>
  <Navbar :absolute="false" />

  <b-nav class="container pt-4 mt-lg-3" aria-label="breadcrumb">
    <b-breadcrumb class="mb-0">
      <b-breadcrumb-item href="/">
        <Icon :icon="HomeAltIcon" class="fs-lg me-1" />
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item>
        <router-link :to="{ name: 'pages.grid-view-with-sidebar' }">Blog</router-link>
      </b-breadcrumb-item>
      <b-breadcrumb-item active>Podcast</b-breadcrumb-item>
    </b-breadcrumb>
  </b-nav>

  <PageTitle />

  <Content />

  <Comment />

  <CommentForm />

  <Podcast />

  <PodcastFooter />

  <BackToTop />
</template>

<script lang="ts" setup>
import Navbar from '@/layouts/partials/Navbar.vue'
import PageTitle from '@/views/pages/podcast/components/PageTitle.vue'
import Content from '@/views/pages/podcast/components/Content.vue'
import Comment from '@/views/pages/podcast/components/Comment.vue'
import CommentForm from '@/views/pages/podcast/components/CommentForm.vue'
import Podcast from '@/views/pages/podcast/components/Podcast.vue'
import PodcastFooter from './components/PodcastFooter.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'

import { Icon } from '@iconify/vue'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'
</script>
