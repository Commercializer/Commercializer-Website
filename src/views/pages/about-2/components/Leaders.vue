<template>
  <b-container fluid class="pt-lg-2 pb-5 mb-2 mb-md-4 mb-lg-5">
    <h2 class="h1 text-center pb-md-1 mb-1 mb-sm-3">Our Leaders</h2>
    <Swiper
      class="mx-0 mb-md-n2 mb-xxl-n3"
      :modules="[Pagination]"
      :slidesPerView="1"
      :spaceBetween="8"
      :loop="true"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        480: {
          slidesPerView: 2
        },
        700: {
          slidesPerView: 3
        },
        900: {
          slidesPerView: 4
        },
        1160: {
          slidesPerView: 5
        },
        1500: {
          slidesPerView: 6
        }
      }"
    >
      <SwiperSlide class="py-3" v-for="(leader, idx) in leaderData" :key="idx">
        <LeaderCard :leader="leader" />
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative pt-3 mt-3"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import LeaderCard from '@/views/pages/about-2/components/LeaderCard.vue'
import { leaderData } from '../data'
</script>
