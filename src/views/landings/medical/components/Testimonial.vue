<template>
  <section class="bg-secondary py-5 mb-2 mb-md-4 mb-lg-5">
    <b-container class="pt-lg-4 mt-1">
      <h2 class="h1 text-center pb-3 pb-md-4 pb-xl-5">What Our Patients Say</h2>
    </b-container>
    <div class="pb-lg-3 px-2 px-sm-0">
      <Swiper
        class=""
        :modules="[Pagination]"
        :slidesPerView="1"
        :centeredSlides="true"
        :spaceBetween="8"
        :loop="true"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true
        }"
        :breakpoints="{
          500: {
            slidesPerView: 2,
            spaceBetween: 24
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 24
          },
          1500: {
            slidesPerView: 6,
            spaceBetween: 24
          }
        }"
      >
        <SwiperSlide class="h-auto pt-4" v-for="(testimonial, idx) in testimonialData" :key="idx">
          <TestimonialCard :testimonial="testimonial" />
        </SwiperSlide>

        <!-- Pagination (bullets) -->
        <div class="swiper-pagination position-relative pt-1 pt-sm-3 mt-5"></div>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import TestimonialCard from '@/views/landings/medical/components/TestimonialCard.vue'
import { testimonialData } from '../data'
</script>
