<template>
  <b-container class="border-bottom-lg pt-sm-2">
    <Swiper
      class="mx-n2"
      :modules="[Pagination]"
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
        850: {
          slidesPerView: 5,
          spaceBetween: 8
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 8
        }
      }"
    >
      <SwiperSlide class="py-2" v-for="(brand, idx) in brandData" :key="idx">
        <a href="#" class="px-2 mx-2">
          <img :src="brand.image" class="d-block mx-auto my-2" width="155" alt="Brand" />
        </a>
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative pt-3"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { brandData } from '../data'
</script>
