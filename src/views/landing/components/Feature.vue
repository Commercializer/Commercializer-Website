<template>
  <b-container class="pt-5">
    <Swiper
      class="mt-n3 mt-md-0 pt-md-4 pt-lg-5 mx-n2"
      :modules="[Pagination, Navigation]"
      :slidesPerView="1"
      :spaceBetween="8"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :navigation="{
        prevEl: '#prev-news',
        nextEl: '#next-news'
      }"
      :breakpoints="{
        500: {
          slidesPerView: 2
        },
        700: {
          slidesPerView: 3
        },
        1000: {
          slidesPerView: 4
        }
      }"
    >
      <SwiperSlide v-for="(feature, idx) in featureData" :key="idx" class="h-auto pb-3">
        <div class="card card-hover bg-light border-0 animation-on-hover mx-2">
          <Vue3Lottie
            :animation-data="feature.animation.light"
            background-color="transparent"
            :speed="1.25"
            loop
            class="d-dark-mode-none mx-auto mt-4 mb-2"
            :player-controls="true"
            style="width: 180px"
          >
          </Vue3Lottie>

          <Vue3Lottie
            :animation-data="feature.animation.dark"
            background-color="transparent"
            :speed="1.25"
            loop
            class="d-none d-dark-mode-block mx-auto mt-4 mb-2"
            :player-controls="true"
            style="width: 180px"
          >
          </Vue3Lottie>

          <div class="card-body fs-lg fw-semibold text-center">{{ feature.title }}</div>
        </div>
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative bottom-0 mt-2"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Vue3Lottie } from 'vue3-lottie'
import { featureData } from '@/views/landing/data'
</script>
