<template>
  <b-container class="mb-5 pb-lg-5 pb-md-4 pb-3">
    <Swiper
      class="mx-n2"
      :modules="[Pagination]"
      :space-between="8"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        0: {
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
      <SwiperSlide class="py-3" v-for="(brand, index) in brandData" :key="index">
        <a href="#" class="card card-body card-hover px-2 mx-2">
          <img :src="brand.image" class="d-block mx-auto my-2" :width="154" alt="Brand" />
        </a>
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative pt-2 mt-4"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import { brandData } from '@/views/landings/dev-agency-3/data'
</script>
