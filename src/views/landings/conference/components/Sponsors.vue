<template>
  <section class="position-relative bg-dark py-5">
    <div
      class="position-absolute top-0 start-0 w-100 h-100"
      style="background-color: rgba(255, 255, 255, 0.05)"
    ></div>
    <b-container class="position-relative zindex-5 pt-1 pt-md-2 pb-lg-2 pt-lg-4">
      <h2 class="h3 text-light text-center text-lg-start mb-4 mb-lg-5">Sponsored by:</h2>
      <Swiper
        class="ms-xxl-n5 me-xxl-n4"
        :modules="[Pagination]"
        :slidesPerView="2"
        :spaceBetween="24"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true
        }"
        :breakpoints="{
          500: {
            slidesPerView: 3
          },
          650: {
            slidesPerView: 4
          },
          900: {
            slidesPerView: 5
          },
          1100: {
            slidesPerView: 6
          }
        }"
      >
        <SwiperSlide v-for="(brand, idx) in brandData" :key="idx">
          <a href="#" class="d-block py-3">
            <img :src="brand.image" class="d-block mx-auto" :width="154" alt="Brand" />
          </a>
        </SwiperSlide>

        <!-- Pagination (bullets) -->
        <div class="swiper-pagination position-relative pt-2 mt-4"></div>
      </Swiper>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { brandData } from '@/views/landings/conference/data'
</script>
