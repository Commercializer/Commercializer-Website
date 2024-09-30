<template>
  <section class="bg-secondary py-5 mb-lg-5">
    <b-container class="pt-2 pt-lg-4 pt-xl-5">
      <h2 class="h1 mb-4 pb-lg-3 pt-lg-1 pb-1 text-center">Popular Posts</h2>
    </b-container>
    <div class="pb-lg-5 mb-xl-3">
      <Swiper
        :modules="[Pagination]"
        :slidesPerView="1"
        :centeredSlides="true"
        :loop="true"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true
        }"
        :breakpoints="{
          0: {
            slidesPerView: 1
          },
          576: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 4
          }
        }"
      >
        <SwiperSlide v-for="(blog, idx) in blogData" :key="idx" class="h-auto px-2">
          <BlogCard2 :blog="blog" />
        </SwiperSlide>

        <!-- Pagination (bullets) -->
        <div class="swiper-pagination position-relative pt-1 pt-sm-3 mt-5 d-xl-none d-flex"></div>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import BlogCard2 from '@/views/landings/blog/components/BlogCard2.vue'
import { blogData } from '@/views/landings/blog/data'
</script>
