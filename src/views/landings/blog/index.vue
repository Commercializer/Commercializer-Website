<template>
  <Navbar :absolute="false" :isTransparent="false" />

  <BlogHero />

  <PopularPosts />

  <LatestPosts />

  <Podcasts />

  <Cta />

  <BlogFooter />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue';
import BlogHero from '@/views/landings/blog/components/BlogHero.vue';
import PopularPosts from '@/views/landings/blog/components/PopularPosts.vue';
import LatestPosts from '@/views/landings/blog/components/LatestPosts.vue';
import Podcasts from '@/views/landings/blog/components/Podcasts.vue';
import Cta from '@/views/landings/blog/components/Cta.vue';
import BlogFooter from '@/views/landings/blog/components/BlogFooter.vue';
import BackToTop from '@/layouts/partials/BackToTop.vue';
</script>
