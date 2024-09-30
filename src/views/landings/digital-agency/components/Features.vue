<template>
  <b-container class="mb-5 pt-lg-5" id="benefits">
    <Swiper
      class="pt-3"
      :modules="[Pagination]"
      :slidesPerView="1"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        500: {
          slidesPerView: 2
        },
        991: {
          slidesPerView: 3
        }
      }"
    >
      <SwiperSlide
        v-for="(feature, idx) in featureData"
        :key="idx"
        class="px-2"
        :class="{ 'border-end-lg': idx != featureData.length - 1 }"
      >
        <div class="text-center">
          <img :src="feature.image" width="48" alt="Bulb icon" class="d-block mb-4 mx-auto" />
          <h4 class="mb-2 pb-1">{{ feature.title }}</h4>
          <p class="mx-auto" style="max-width: 336px">{{ feature.description }}</p>
        </div>
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { featureData } from '@/views/landings/digital-agency/data'
</script>
