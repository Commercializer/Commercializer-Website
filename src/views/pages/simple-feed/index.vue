<template>
  <Navbar :fixedTop="true" :isTransparent="false" :absolute="false" :navbarSticky="false" :stuck="true" />

  <Breadcrumb subTitle="Blog Simple Feed" />

  <Content />

  <Blog />

  <Cta />

  <SimpleFedFooter />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Content from '@/views/pages/simple-feed/components/Content.vue'
import Blog from '@/views/pages/simple-feed/components/Blog.vue'
import Cta from '@/views/pages/simple-feed/components/Cta.vue'
import SimpleFedFooter from '@/views/pages/simple-feed/components/SimpleFeedFooter.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
</script>
