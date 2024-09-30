<template>
  <b-container class="mb-lg-5 mb-4 pb-3">
    <h2 class="h1 mb-lg-5 mb-4 pb-lg-0 pb-md-2 text-center">Our benefits</h2>

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
        },
        1200: {
          slidesPerView: 4
        }
      }"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
    >
      <SwiperSlide v-for="(benefit, idx) in benefitsData" :key="idx">
        <div class="mx-sm-0 mx-auto" style="max-width: 19.125rem">
          <h4 class="h5 mb-3">{{ benefit.title }}</h4>
          <p class="mb-0">{{ benefit.description }}</p>
        </div>
      </SwiperSlide>

      <!-- Swiper pagination -->
      <div class="swiper-pagination position-static mt-4 pt-lg-3 pt-2"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import { benefitsData } from '@/views/landings/dev-agency-3/data'
</script>
