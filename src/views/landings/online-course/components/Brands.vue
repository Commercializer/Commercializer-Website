<template>
  <b-container class="mt-2 mb-lg-2 mb-xl-4 pt-3 pt-lg-5 pb-5">
    <h2 class="text-center pb-md-2">Trusted by Leading Universities &amp; Companies</h2>
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
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { brandsData } from '../data'
</script>
