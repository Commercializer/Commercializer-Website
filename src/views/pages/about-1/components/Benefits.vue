<template>
  <b-container class="mt-3 mb-5 pt-lg-5" id="benefits">
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
      wrapper-class="pt-4"
    >
      <SwiperSlide
        class=""
        v-for="(item, idx) in benefitsData"
        :key="idx"
        :class="idx == benefitsData.length - 1 ? 'px-2' : 'border-end-lg px-2'"
      >
        <div class="text-center">
          <img :src="item.image" width="48" alt="" class="d-block mb-4 mx-auto" />
          <h4 class="mb-2 pb-1">{{ item.title }}</h4>
          <p class="mx-auto" style="max-width: 336px">{{ item.description }}</p>
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
import { benefitsData } from '../data'
</script>
