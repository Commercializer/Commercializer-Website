<template>
  <b-container class="mb-5 pb-lg-5 pb-md-4 pb-3">
    <!-- Swiper slider -->
    <Swiper
      class="mb-xl-3 text-sm-start text-center"
      :modules="[Pagination, Autoplay]"
      :spaceBetween="24"
      :autoplay="true"
      :breakpoints="{
        0: {
          slidesPerView: 1
        },
        500: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        }
      }"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
    >
      <SwiperSlide v-for="(blog, idx) in blogData" :key="idx" class="h-auto">
        <BlogCard :blog="blog" />
      </SwiperSlide>

      <!-- Swiper pagination -->
      <div class="swiper-pagination position-static mt-4 pt-lg-3 pt-2"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'

import BlogCard from '@/views/landings/dev-agency-3/components/BlogCard.vue'
import { blogData } from '@/views/landings/dev-agency-3/data'
</script>
