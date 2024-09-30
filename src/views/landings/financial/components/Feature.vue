<template>
  <b-container class="py-5 my-2 my-md-4 my-lg-5">
    <h2 class="h1 text-center pt-1 pt-xl-3 mb-lg-4">Why Us?</h2>
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
        500: {
          slidesPerView: 2
        },
        800: {
          slidesPerView: 3
        },
        1200: {
          slidesPerView: 4
        }
      }"
    >
      <SwiperSlide class="h-auto py-3" v-for="(feature, idx) in featureData" :key="idx">
        <div class="card h-100 card-body card-hover mx-2">
          <Icon
            :icon="feature.icon"
            class="bx bx-rocket display-5 fw-normal card-icon"
            style="color: #b4b7c9"
          ></Icon>
          <h3 class="h5 pt-3 pb-1 mb-2">{{ feature.title }}</h3>
          <p class="mb-0">{{ feature.description }}</p>
        </div>
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative d-xl-none pt-3 mt-4"></div>
    </Swiper>
    <div class="d-flex flex-column flex-sm-row justify-content-center pt-3 pt-sm-4">
      <a href="#" class="btn btn-primary shadow-primary btn-lg">Request a price</a>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { Icon } from '@iconify/vue'
import { featureData } from '../data'
</script>
