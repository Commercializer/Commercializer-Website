<template>
  <div class="bg-secondary mb-5 pt-5">
    <b-container class="mb-5 py-lg-5">
      <h2 class="h1 mb-4 pb-3 text-center">Latest From Our Blog</h2>
      <b-row>
        <b-col lg="5" cols="12" class="mb-lg-0 mb-4">
          <BlogCard1 :blog="blogData[0]" />
        </b-col>

        <b-col>
          <BlogCard2
            v-for="(blog, idx) in blogData.slice(1, blogData.length)"
            :key="idx"
            :blog="blog"
            :class="{ 'mb-4': idx != blogData.length - 2 }"
          />
        </b-col>

        <b-col cols="12" class="mt-4 pt-lg-4 pt-3 text-center">
          <router-link
            to="/blog-grid-no-sidebar"
            class="btn btn-lg btn-outline-primary w-sm-auto w-100"
            >More blog posts
          </router-link>
        </b-col>
      </b-row>
    </b-container>

    <!-- Contact CTA -->
    <Cta />
  </div>
</template>

<script setup lang="ts">
import Cta from '@/views/landings/digital-agency/components/Cta.vue'

import BlogCard1 from '@/views/landings/digital-agency/components/BlogCard1.vue'
import BlogCard2 from '@/views/landings/digital-agency/components/BlogCard2.vue'
import { blogData } from '@/views/landings/digital-agency/data'
</script>
