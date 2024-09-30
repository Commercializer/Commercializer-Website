<template>
  <Navbar :absolute="false" />

  <b-nav class="container pt-4 mt-lg-3" aria-label="breadcrumb">
    <b-breadcrumb class="mb-0">
      <b-breadcrumb-item href="/">
        <Icon :icon="HomeAltIcon" class="fs-lg me-1" />
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item> Blog </b-breadcrumb-item>
      <b-breadcrumb-item active>Single Post</b-breadcrumb-item>
    </b-breadcrumb>
  </b-nav>

  <SinglePostHero />

  <Content />

  <Comment />

  <CommentForm />

  <Articles />

  <SinglePostFooter />

  <BackToTop />
</template>

<script lang="ts" setup>
import Navbar from '@/layouts/partials/Navbar.vue'
import SinglePostHero from '@/views/pages/single-post/components/SinglePostHero.vue'
import Content from './components/Content.vue'
import Comment from './components/Comment.vue'
import CommentForm from './components/CommentForm.vue'
import Articles from '@/views/pages/single-post/components/Articles.vue'
import SinglePostFooter from '@/views/pages/single-post/components/SinglePostFooter.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
import { Icon } from '@iconify/vue'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'
</script>
