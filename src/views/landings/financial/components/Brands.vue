<template>
  <!-- Brands (Carousel) -->
  <b-container class="my-n2 my-md-0">
    <Swiper
      class="mx-n2"
      :slidesPerView="2"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        500: {
          slidesPerView: 3,
          spaceBetween: 8
        },
        650: {
          slidesPerView: 4,
          spaceBetween: 8
        },
        900: {
          slidesPerView: 5,
          spaceBetween: 8
        },
        1100: {
          slidesPerView: 6,
          spaceBetween: 8
        }
      }"
    >
      <SwiperSlide class="py-3" v-for="(brand, idx) in brandsData" :key="idx">
        <a href="#" class="card card-body card-hover px-2 mx-2">
          <img :src="brand.image" class="d-block mx-auto my-2" width="154" alt="Brand" />
        </a>
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative pt-2 mt-4"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { brandsData } from '../data'
</script>
