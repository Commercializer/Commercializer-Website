<template>
  <b-container class="mb-5 pb-lg-5 pb-md-4 pb-3">
    <h2 class="h1 mb-md-4 mb-3 pb-lg-3 pb-2 text-center">Latest From Our Blog</h2>

    <Swiper
      class="mb-lg-5 mb-4 pb-lg-0 pb-md-2"
      :modules="[Pagination]"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        0: {
          slidesPerView: 1,
          spaceBetween: 24
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24
        }
      }"
    >
      <SwiperSlide class="h-auto" v-for="(blog, idx) in blogData" :key="idx">
        <BlogCard :blog="blog" />
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-static mt-4 pt-lg-3 pt-2"></div>
    </Swiper>
    <div class="mb-xl-3 text-center">
      <a href="#" class="btn btn-lg btn-outline-primary">More blog posts</a>
    </div>
  </b-container>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import BlogCard from '@/views/landings/saas-4/components/BlogCard.vue'
import { blogData } from '@/views/landings/saas-4/data'
</script>
