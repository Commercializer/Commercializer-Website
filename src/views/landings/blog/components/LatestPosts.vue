<template>
  <section class="container mb-5 pt-5 pb-lg-5">
    <h2 class="h1 mb-4 pt-lg-2 pb-lg-3 py-1 text-center">Latest Posts</h2>

    <!-- Category tabs -->
    <ul class="nav nav-tabs justify-content-center mb-lg-5 mb-4 pb-lg-2">
      <li class="nav-item">
        <a href="#" class="nav-link active">All Topics</a>
      </li>

      <li v-for="(item, idx) in categories" :key="idx" class="nav-item">
        <a href="#" class="nav-link">{{ item }}</a>
      </li>
    </ul>

    <!-- Blog articles -->
    <div class="pb-3">
      <BlogCard3 v-for="(blog, idx) in blogData.slice(0, 4)" :key="idx" :blog="blog" />
    </div>

    <!-- Load more btn -->
    <a href="#" class="btn btn-lg btn-outline-primary w-100">
      <i class="bx bx-down-arrow-alt me-2 lh-1 lead"></i>
      Show more
    </a>
  </section>
</template>

<script setup lang="ts">
import BlogCard3 from '@/views/landings/blog/components/BlogCard3.vue'
import { blogData, categories } from '@/views/landings/blog/data'
</script>
