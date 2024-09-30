<template>
  <!-- Related courses (Carousel on narrow screens) -->
  <section class="bg-secondary pt-5 pb-4 pb-lg-5">
    <b-container class="py-2 pt-lg-4 pb-lg-0">
      <h2 class="h1 text-center pb-4">More courses like this</h2>
      <Swiper
        class="mx-n2"
        :modules="[Pagination]"
        :slidesPerView="1"
        :spaceBetween="8"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true
        }"
        :breakpoints="{
          560: {
            slidesPerView: 2
          },
          1000: {
            slidesPerView: 3
          }
        }"
      >
        <SwiperSlide class="h-auto pb-3" v-for="(course, idx) in courseData" :key="idx">
          <CourseCard :course="course"></CourseCard>
        </SwiperSlide>

        <!-- Pagination (bullets) -->
        <div class="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
      </Swiper>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import CourseCard from '@/views/pages/single-course/components/CourseCard.vue'
import { courseData } from '../data'
</script>
